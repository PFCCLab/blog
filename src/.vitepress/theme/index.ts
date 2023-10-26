import './style.css'
import { h } from 'vue'

import Layout from './Layout.vue'

import RegisterSW from './RegisterSW.vue'

export default {
  Layout() {
    return h(Layout, null, {
      'layout-bottom': () => h(RegisterSW),
    })
  },
}
