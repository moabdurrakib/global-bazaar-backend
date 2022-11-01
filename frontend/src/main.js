import { createApp } from 'vue'
import './style.css'
import './template.js'

import {router} from "./router";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
