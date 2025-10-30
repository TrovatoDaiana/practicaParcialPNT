import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import './bootstrap.js'
import router from './router.js'

const app=createApp(App)
app.use(router)
app.mount('#app')
