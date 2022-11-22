<script setup>
import { useAuth } from "@/stores";
import { storeToRefs } from "pinia";

import { ElNotification } from "element-plus";
import { useRouter } from "vue-router";

const auth = useAuth();
const { users, loading } = storeToRefs(auth);

const router=useRouter()
// logout
const userLogout = async () => {
  const res = await auth.logout();
  if (res.status) {
    router.push({ name: "index.page" });
    ElNotification({
      title: "success",
      message: "Logout Success",
      type: "success",
      position: "top-left",
    });
  }
};
// search Icon
const search = () => {
  $(".header-form").toggleClass("active"),
    $(header - src)
      .children(".fa-search")
      .toggleClass("fa-times");
};

// Menubar

const menuSideBar = () => {
  $("body").css("overflow", "hidden"), $(".nav-sidebar").addClass("active");
};

// Header Cart
const headerCart = () => {
  $("body").css("overflow", "hidden"), $(".cart-sidebar").addClass("active");
};
</script>
<template>
  <div>
    <div class="backdrop"></div>
    <a class="backtop fas fa-arrow-up" href="#"></a>
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-5">
            <div class="header-top-welcome">
              <p>Welcome to Ecomart in Your Dream Online Store!</p>
            </div>
          </div>
          <div class="col-md-5 col-lg-3"></div>
          <div class="col-md-7 col-lg-4">
            <ul class="header-top-list">
              <li>
                <router-link :to="{ name: 'seller.apply' }"
                  >Seller Apply</router-link
                >
              </li>
              <li><a href="faq.html">need help</a></li>
              <li><a href="contact.html">contact us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <header class="header-part">
      <div class="container">
        <div class="header-content">
          <div class="header-media-group">
            <button class="header-user" @click="menuSideBar">
              <img src="@/assets/images/menu.png" alt="user" /></button
            ><router-link class="header-logo" :to="{ name: 'index.page' }"
              ><img src="@/assets/images/logo.png" alt="logo" /></router-link
            ><button class="header-src" @click="search">
              <i class="fas fa-search"></i>
            </button>
          </div>
          <router-link class="header-logo" :to="{ name: 'index.page' }"
            ><img src="@/assets/images/logo.png" alt="logo"
          /></router-link>
          <form class="header-form">
            <input type="text" placeholder="Search anything..." /><button>
              <i class="fas fa-search"></i>
            </button>
          </form>
          <div class="header-widget-group hover-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link header-widget"
                href="#"
                data-bs-toggle="dropdown"
                ><i class="fas fa-user"></i
              ></a>
              <ul class="dropdown-menu dropdown-menu-end" v-if="!users.data">
                <li>
                  <router-link
                    :to="{ name: 'user.login' }"
                    class="dropdown-item"
                    >Login</router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{ name: 'user.register' }"
                    class="dropdown-item"
                    >Register</router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{ name: 'user.profile' }"
                    class="dropdown-item"
                    >My profile</router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{ name: 'user.orders' }"
                    class="dropdown-item"
                    >My Orders</router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{ name: 'user.wishlist' }"
                    class="dropdown-item"
                    >My Wishlist</router-link
                  >
                </li>
              </ul>
              <ul class="dropdown-menu dropdown-menu-end" v-else>
                <li>
                  <router-link
                    :to="{ name: 'user.profile' }"
                    class="dropdown-item"
                    >My profile</router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{ name: 'user.orders' }"
                    class="dropdown-item"
                    >My Orders</router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{ name: 'user.wishlist' }"
                    class="dropdown-item"
                    >My Wishlist</router-link
                  >
                </li>
                <li>
                  <button
                    :disabled="loading"
                    class="dropdown-item"
                    @click="userLogout"
                  >
                    Logout
                    <span
                      v-show="loading"
                      class="spinner-boarder spinner-border-sm mr-1"
                    >
                    </span>
                  </button>
                </li>
              </ul>
            </li>

            <a href="wishlist.html" class="header-widget" title="Wishlist"
              ><i class="fas fa-heart"></i><sup>0</sup></a
            ><button
              class="header-widget header-cart"
              @click="headerCart"
              title="Cartlist"
            >
              <i class="fas fa-shopping-basket"></i><sup>9+</sup
              ><span>total price<small>$345.00</small></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<style>

@media only screen and (min-width:1700px) {
  section.banner-part {
    margin-left: 13%;
}
}

.hover-nav .nav-item .dropdown-menu {
  display: none;
  margin-top: 0;
}

/* .hover-nav .nav-item:hover .nav-link {
} */
.hover-nav .nav-item:hover .dropdown-menu {
  display: block;
}
</style>
