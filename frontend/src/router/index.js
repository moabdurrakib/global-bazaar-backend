import { createRouter, createWebHistory } from 'vue-router';
import Index from "../views/pages/Index.vue"
import NotFound from "../views/pages/NotFound.vue"
import {UserLogin,UserRegister} from "@/views/auth"

const routes = [
    {
        path: "/",
        commponent: Index,
        name: 'index.page'
    },
    
    { path: '/:pathMatch(.*)*',
     name: 'NotFound', 
     component: NotFound 
    },

    // auth
    { path: '/auth/login',
    name: 'user.login', 
    component: UserLogin 
   },
    { path: '/auth/register',
    name: 'user.register', 
    component: UserRegister 
   },

]

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})
