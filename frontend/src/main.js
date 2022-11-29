import { createApp } from 'vue'
import {createPinia} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './style.css'
import './template'
import App from './App.vue'

import router from './router/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App).use(pinia).use(router).use(ElementPlus).mount('#app')
