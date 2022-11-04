import { createApp } from 'vue'
import './style.css'
import './template'
import App from './App.vue'

import router from './router/index'

createApp(App).use(router).mount('#app')
