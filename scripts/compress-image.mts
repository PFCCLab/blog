import { resolve, relative } from 'node:path'
import { readdir, access, stat, readFile, writeFile, unlink } from 'node:fs/promises'
import { existsSync, createReadStream, ReadStream } from 'node:fs'
import { exit } from 'node:process'
import sharp, { type Sharp, type WebpOptions } from 'sharp'

const IMG_DIR = resolve('src/images')
const POST_DIR = resolve('src/posts')
const IGNORE_FILES = ['.DS_Store']
const IMG_MAX_SIZE = 300 * 1024 // bytes
const IMG_MAX_WIDTH = 1000 // px

type WebpOptionsMatrix = {
  [key in keyof WebpOptions]: Array<WebpOptions[keyof WebpOptions]>
}

const COMPRESS_MATRIX: WebpOptionsMatrix = {
  lossless: [true, false],
  nearLossless: [true, false],
  smartSubsample: [false],
  quality: [100, 95, 90, 80, 75, 70],
}

async function replaceImageWithWebp(postFile: string, imgFile: string) {
  const content = (await readFile(postFile)).toString()
  const relativeImgFile = relative(POST_DIR, imgFile)
  const relativeWebpImgFile = relativeImgFile.replace(/\.[^.]+$/, '.webp')
  const webpImgFile = resolve(POST_DIR, relativeWebpImgFile)
  const newContent = content.replace(relativeImgFile, relativeWebpImgFile)
  await writeFile(postFile, newContent)
  return webpImgFile
}

function createCompressTransforms(compressMatrix: WebpOptionsMatrix): Sharp[] {
  const allOptions: WebpOptions[] = []
  for (const lossless of compressMatrix.lossless!) {
    for (const nearLossless of compressMatrix.nearLossless!) {
      for (const smartSubsample of compressMatrix.smartSubsample!) {
        for (const quality of compressMatrix.quality!) {
          allOptions.push({
            lossless: lossless as boolean,
            nearLossless: nearLossless as boolean,
            smartSubsample: smartSubsample as boolean,
            quality: quality as number,
          })
        }
      }
    }
  }
  const transforms = allOptions.map((option) => sharp().webp(option))
  return transforms
}

async function compressImage(imgFile: string, postFile: string): Promise<number> {
  const metadata = await sharp(imgFile).metadata()
  const width = metadata.width ?? 0
  const pipeline: Sharp[] = []
  let outputFile = imgFile

  // Resize image
  if (width > IMG_MAX_WIDTH) {
    pipeline.push(sharp().resize(IMG_MAX_WIDTH))
  }

  // Convert to webp
  const isWebp = imgFile.endsWith('.webp')
  if (!isWebp) {
    outputFile = await replaceImageWithWebp(postFile, imgFile)
  }

  let inputSharp = createReadStream(imgFile).pipe(sharp())
  for (const p of pipeline) {
    inputSharp.pipe(p)
    inputSharp = p
  }

  // Create compress transforms
  const compressTransfroms = createCompressTransforms(COMPRESS_MATRIX)
  // Don't use Promise.all to avoid memory leak
  const compressedBuffers: Buffer[] = []
  for (const transform of compressTransfroms) {
    const buffer = await inputSharp.clone().pipe(transform).toBuffer()
    compressedBuffers.push(buffer)
  }
  compressedBuffers.sort((a, b) => b.byteLength - a.byteLength)
  const compressedSizes = compressedBuffers.map((buffer) => buffer.byteLength)
  // Select the first one that is smaller than IMG_MAX_SIZE
  const selectedIdx = compressedSizes.findIndex((size) => size < IMG_MAX_SIZE)
  const selectedBuffer = compressedBuffers[selectedIdx]

  // Write to file
  await writeFile(outputFile, selectedBuffer)

  if (outputFile !== imgFile) {
    await unlink(imgFile)
  }
  return selectedBuffer.byteLength
}

for (const postImgDirName of await readdir(IMG_DIR)) {
  if (IGNORE_FILES.includes(postImgDirName)) {
    continue
  }
  const postFile = resolve(POST_DIR, `${postImgDirName}.md`)
  if (!existsSync(postFile)) {
    console.log(`Found image dir ${postImgDirName} without post file ${postFile}`)
    process.exit(1)
  }
  const postImgDir = resolve(IMG_DIR, postImgDirName)
  for (const imgName of await readdir(postImgDir)) {
    if (IGNORE_FILES.includes(postImgDirName)) {
      continue
    }
    const imgFile = resolve(postImgDir, imgName)
    const imgSize = (await stat(imgFile)).size
    if (imgSize > IMG_MAX_SIZE) {
      console.log(`Compressing ${imgFile} (${imgSize} bytes)`)
      const compressedSize = await compressImage(imgFile, postFile)
      console.log(`Compressed ${imgFile} to ${compressedSize} bytes`)
    }
  }
}
