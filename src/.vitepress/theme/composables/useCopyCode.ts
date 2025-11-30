import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

export function useCopyCode() {
  const route = useRoute()

  onMounted(() => {
    setupCopyCode()
  })

  watch(
    () => route.path,
    () => {
      nextTick(() => {
        setupCopyCode()
      })
    }
  )
}

function setupCopyCode() {
  const blocks = document.querySelectorAll('div[class*="language-"]:not(.copy-added)')

  // SVG icons
  const copyIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2-2v1"></path></svg>'
  const checkIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'

  blocks.forEach((block) => {
    block.classList.add('copy-added')

    const button = document.createElement('button')
    button.className = 'copy'
    button.innerHTML = copyIcon
    button.setAttribute('aria-label', 'Copy code')
    button.setAttribute('data-tooltip', 'copy')

    button.addEventListener('click', async () => {
      const code = block.querySelector('code')
      if (code) {
        try {
          const text = code.textContent || ''
          await navigator.clipboard.writeText(text)
          button.innerHTML = checkIcon
          button.classList.add('copied')
          button.setAttribute('data-tooltip', 'copied!')
          setTimeout(() => {
            button.innerHTML = copyIcon
            button.classList.remove('copied')
            button.setAttribute('data-tooltip', 'copy')
          }, 2000)
        } catch (err) {
          button.setAttribute('data-tooltip', 'failed')
          setTimeout(() => {
            button.setAttribute('data-tooltip', 'copy')
          }, 2000)
        }
      }
    })

    block.appendChild(button)
  })
}
