import { resolve, relative } from 'node:path'
import { readdirSync } from 'node:fs'
import { readdir, stat, readFile, writeFile, unlink } from 'node:fs/promises'

const POST_DIR = resolve('src/posts')
const IN_GITHUB_ACTIONS = process.env.GITHUB_ACTIONS === 'true'

function isMeetKebabCase(filename: string): boolean {
  return /^[a-z0-9-]+$/.test(filename)
}

function suggestKebabCase(filename: string): string {
  return filename.toLowerCase().replace('_', '-').toLowerCase()
}

function getAllPostFilenames(): string[] {
  return readdirSync(POST_DIR).map((filename) => filename.replace(/\.md$/, ''))
}

function main() {
  const postFilenames = getAllPostFilenames()
  let hasError = false
  for (const filename of postFilenames) {
    const filepath = resolve(POST_DIR, `${filename}.md`)
    if (!isMeetKebabCase(filename)) {
      const errorMesssage = `Filename "${filename}" is not in kebab-case, suggest: "${suggestKebabCase(filename)}"`
      if (IN_GITHUB_ACTIONS) {
        console.log('in github actions')
        console.log(`::error file=${filepath}::${errorMesssage}`)
      } else {
        console.log(
          `not in github actions, process.env.GITHUB_ACTIONS: ${process.env.GITHUB_ACTIONS}`
        )
      }
      console.error(errorMesssage)
      hasError = true
    }
  }
  if (hasError) {
    process.exit(1)
  }
}

main()
