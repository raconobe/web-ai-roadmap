import { onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  setup() {
    onMounted(() => {
      if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
        const base = import.meta.env.BASE_URL || '/'
        const swUrl = `${base.replace(/\/$/, '')}/sw.js`
        navigator.serviceWorker.register(swUrl).catch(() => {})
      }
    })
  }
}