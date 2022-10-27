import {createRouter ,createWebHistory} from 'vue-router';
import index from '../views/pages/index.vue'

const routes = [
    {
        path: "/",
        commponent: index
    }
]

const router =createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;