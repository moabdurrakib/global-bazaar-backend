import { createApp } from 'vue'
import {createPinia} from 'pinia'
import './style.css'
import './template'
import App from './App.vue'

import router from './router/index'

createApp(App).use(createPinia()).use(router).mount('#app')
