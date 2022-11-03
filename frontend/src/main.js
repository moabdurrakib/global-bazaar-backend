import { createApp } from 'vue'
import './style.css'
import './template.js'

import router from "./router/index";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
