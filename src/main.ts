import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { loadFonts } from './plugins/webfontloader'
import vuetify from '@/plugins/vuetify'
import '../src/styles/main.scss'
import { createPinia } from 'pinia'

loadFonts()

createApp(App).use(vuetify).use(router).use(createPinia()).mount('#app')

