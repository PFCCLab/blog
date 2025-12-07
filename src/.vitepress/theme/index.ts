import './style.css'
import './mathjax3.css'
import { h } from 'vue'
import type { Theme } from 'vitepress'

import Layout from './Layout.vue'
import RegisterSW from './RegisterSW.vue'

const theme: Theme = {
  Layout() {
    return h(Layout, null, {
      'layout-bottom': () => h(RegisterSW),
    })
  },
}

export default theme
