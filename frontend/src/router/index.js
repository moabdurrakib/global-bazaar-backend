import { createRouter, createWebHistory } from 'vue-router';
import { NotFound, Index, SellerPages,Shops,SellerStore } from "@/views/pages";
import { UserLogin, UserRegister} from "@/views/auth";

const routes = [
    {
        path: "/",
        commponent: Index,
        name: 'index.page',
        meta: { title: "home" }
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: { title: "Not Found" }
    },

    {
        path: '/shops',
        name: 'shop.page',
        commponent: Shops,
        meta: { title: "shop" },
    },

    // Seller
    {
        path: '/seller-list',
        name: "seller.page",
        commponent: SellerPages,
        meta: { title: "Seller list" },
    },
    {
        path: '/seller-store',
        name: "seller.store",
        commponent: SellerStore,
        meta: { title: "Seller Store" },
    },
    // auth
    {
        path: '/auth/login',
        name: 'user.login',
        component: UserLogin,
        meta: { title: "User Login" }
    },
    {
        path: '/auth/register',
        name: 'user.register',
        component: UserRegister,
        meta: { title: "User Register" },
    },

]




const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})


router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
})

export default router

