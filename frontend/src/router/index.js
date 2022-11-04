import { createWebHistory , createRouter } from "vue-router";
import { NotFound, Indexed,Shops,SingleProduct,Checkout } from "@/views/pages";
import {SellerPages,SellerStore, SellerApply} from "@/views/pages/seller"
import { UserLogin, UserRegister} from "@/views/auth";  
import { MyOrderList, MyProfile, MyWishlist} from "@/views/user";  


const routes = [
    {
        path: "/",
        component: Indexed,
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
        component: Shops,
        meta: { title: "shop" },
    },
    {
        path: '/products',
        name: 'product.details',
        component: SingleProduct,
        meta: { title: "product details" },
    },
    // user

    {
        path: '/my-profile',
        name: 'user.profile',
        component: MyProfile,
        meta: { title: "My Profile" },
    },
    {
        path: '/my-wishlist',
        name: 'user.wishlist',
        component: MyWishlist,
        meta: { title: "My Wishlist" },
    },
    {
        path: '/orders',
        name: 'user.orders',
        component: MyOrderList,
        meta: { title: "My Order List" },
    },
    {
        path: '/checkout',
        name: 'chekcout.page',
        component: Checkout,
        meta: { title: "Chekcout page" },
    },

    // Seller
    {
        path: '/seller-list',
        name: "seller.page",
        component: SellerPages,
        meta: { title: "Seller list" },
    },
    {
        path: '/seller-store',
        name: "seller.store",
        component: SellerStore,
        meta: { title: "Seller Store" },
    },
    {
        path: '/seller-apply',
        name: "seller.apply",
        component: SellerApply,
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

