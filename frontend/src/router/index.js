import { createRouter, createWebHistory } from 'vue-router';
import Index from "../views/pages/Index.vue"
import NotFound from "../views/pages/NotFound.vue"
import {UserLogin,UserRegister} from "@/views/auth"

const routes = [
    {
        path: "/",
        commponent: Index,
        name: 'index.page',
        meta: {title:"home"}
    },
    
    { path: '/:pathMatch(.*)*',
     name: 'NotFound', 
     component: NotFound ,
     meta: {title:"Not Found"}
    },

    // auth
    { path: '/auth/login',
    name: 'user.login', 
    component: UserLogin ,
    meta: {title:"User Login"}
   },
    { path: '/auth/register',
    name: 'user.register', 
    component: UserRegister ,
    meta: {title:"User Register"}
   },

]




const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

const DEFAULT_TITLE = '404'

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || DEFAULT_TITLE
     next()
  })


export default router;
