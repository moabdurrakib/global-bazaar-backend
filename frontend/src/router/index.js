import { createRouter, createWebHistory } from 'vue-router';
import Index from "../views/pages/Index.vue"
import NotFound from "../views/pages/NotFound.vue"

const routes = [
    {
        path: "/",
        commponent: Index,
        name: Index
    },
    
    { path: '/:pathMatch(.*)*',
     name: 'NotFound', 
     component: NotFound 
    },
]

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})
