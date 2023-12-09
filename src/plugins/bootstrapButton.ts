import type { App, Plugin } from 'vue'
import BaseButton from '../components/BaseButton.vue'

export const BootstrapButtonPlugin: Plugin = {
  install(app: App) {
    app.component('BaseButton', BaseButton)
  }
}
