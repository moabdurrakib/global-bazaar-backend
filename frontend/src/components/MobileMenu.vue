<script setup>
const menuClose = () => {
  $("body").css("overflow", "inherit"),
    $(".nav-sidebar").removeClass("active"),
    $(".backdrop").fadeOut();
};

//  Cart show

const cartShow = () => {
  $("body").css("overflow", "hidden"), $(".cart-sidebar").addClass("active");
};

// Category show
const cateShow = () => {
  $("body").css("overflow", "hidden"),
    $(".category-sidebar").addClass("active");
};

const categoryClose = () => {
  $("body").css("overflow", "inherit"),
    $(".category-sidebar").removeClass("active"),
    $(".backdrop").fadeOut();
};
</script>
<template>
  <div>
    <aside class="category-sidebar">
      <div class="category-header">
        <h4 class="category-title">
          <i class="fas fa-align-left"></i><span>categories</span>
        </h4>
        <button class="category-close" @click="categoryClose">
          <i class="icofont-close"></i>
        </button>
      </div>
      <ul class="category-list">
        <li class="category-item">
          <a class="category-link dropdown-link" href="#"
            ><i class="flaticon-vegetable"></i><span>vegetables</span></a
          >
          <ul class="dropdown-list">
            <li><a href="#">asparagus</a></li>
            <li><a href="#">broccoli</a></li>
            <li><a href="#">carrot</a></li>
          </ul>
        </li>
        <li class="category-item">
          <a class="category-link dropdown-link" href="#"
            ><i class="flaticon-groceries"></i><span>groceries</span></a
          >
          <ul class="dropdown-list">
            <li><a href="#">Grains & Bread</a></li>
            <li><a href="#">Dairy & Eggs</a></li>
            <li><a href="#">Oil & Fat</a></li>
          </ul>
        </li>
        <li class="category-item">
          <a class="category-link dropdown-link" href="#"
            ><i class="flaticon-fruit"></i><span>fruits</span></a
          >
          <ul class="dropdown-list">
            <li><a href="#">Apple</a></li>
            <li><a href="#">Orange</a></li>
            <li><a href="#">Strawberry</a></li>
          </ul>
        </li>
        <li class="category-item">
          <a class="category-link dropdown-link" href="#"
            ><i class="flaticon-dairy-products"></i><span>dairy farm</span></a
          >
          <ul class="dropdown-list">
            <li><a href="#">Egg</a></li>
            <li><a href="#">milk</a></li>
            <li><a href="#">butter</a></li>
          </ul>
        </li>
        <li class="category-item">
          <a class="category-link dropdown-link" href="#"
            ><i class="flaticon-crab"></i><span>sea foods</span></a
          >
          <ul class="dropdown-list">
            <li><a href="#">Lobster</a></li>
            <li><a href="#">Octopus</a></li>
            <li><a href="#">Shrimp</a></li>
          </ul>
        </li>
        <li class="category-item">
          <a class="category-link dropdown-link" href="#"
            ><i class="flaticon-salad"></i><span>diet foods</span></a
          >
          <ul class="dropdown-list">
            <li><a href="#">Salmon</a></li>
            <li><a href="#">Potatoes</a></li>
            <li><a href="#">Greens</a></li>
          </ul>
        </li>
        <li class="category-item">
          <a class="category-link dropdown-link" href="#"
            ><i class="flaticon-dried-fruit"></i><span>dry foods</span></a
          >
          <ul class="dropdown-list">
            <li><a href="#">noodles</a></li>
            <li><a href="#">Powdered milk</a></li>
            <li><a href="#">nut & yeast</a></li>
          </ul>
        </li>
        <li class="category-item">
          <a class="category-link dropdown-link" href="#"
            ><i class="flaticon-fast-food"></i><span>fast foods</span></a
          >
          <ul class="dropdown-list">
            <li><a href="#">mango</a></li>
            <li><a href="#">plumsor</a></li>
            <li><a href="#">raisins</a></li>
          </ul>
        </li>
        <li class="category-item">
          <a class="category-link dropdown-link" href="#"
            ><i class="flaticon-cheers"></i><span>drinks</span></a
          >
          <ul class="dropdown-list">
            <li><a href="#">Wine</a></li>
            <li><a href="#">Juice</a></li>
            <li><a href="#">Water</a></li>
          </ul>
        </li>
        <li class="category-item">
          <a class="category-link dropdown-link" href="#"
            ><i class="flaticon-beverage"></i><span>coffee</span></a
          >
          <ul class="dropdown-list">
            <li><a href="#">Cappuchino</a></li>
            <li><a href="#">Espresso</a></li>
            <li><a href="#">Latte</a></li>
          </ul>
        </li>
        <li class="category-item">
          <a class="category-link dropdown-link" href="#"
            ><i class="flaticon-barbecue"></i><span>meats</span></a
          >
          <ul class="dropdown-list">
            <li><a href="#">Meatball</a></li>
            <li><a href="#">Sausage</a></li>
            <li><a href="#">Poultry</a></li>
          </ul>
        </li>
        <li class="category-item">
          <a class="category-link dropdown-link" href="#"
            ><i class="flaticon-fish"></i><span>fishes</span></a
          >
          <ul class="dropdown-list">
            <li><a href="#">Agujjim</a></li>
            <li><a href="#">saltfish</a></li>
            <li><a href="#">pazza</a></li>
          </ul>
        </li>
      </ul>
      <div class="category-footer">
        <p>All Rights Reserved by <a href="#">Mohammad Abdur Rakib</a></p>
      </div>
    </aside>

    <aside class="nav-sidebar">
      <div class="nav-header">
        <router-link :to="{ name: 'index.page' }"
          ><img src="@/assets/images/logo.png" alt="logo" /></router-link
        ><button class="nav-close" @click="menuClose">
          <i class="icofont-close"></i>
        </button>
      </div>
      <div class="nav-content">
        <ul class="nav-list">
          <li>
            <router-link :to="{name:'index.page'}" class="nav-link"><i class="icofont-home"></i>Home</router-link>
          </li>

          <li>
            <a class="nav-link" href="contact.html"
              ><i class="icofont-contacts"></i>contact us</a
            >
          </li>

          <li>
            <a class="nav-link" href="login.html"
              ><i class="icofont-logout"></i>logout</a
            >
          </li>
        </ul>
        <div class="nav-info-group">
          <div class="nav-info">
            <i class="icofont-ui-touch-phone"></i>
            <p><small>call us</small><span>(+880) 1557768838</span></p>
          </div>
          <div class="nav-info">
            <i class="icofont-ui-email"></i>
            <p><small>email us</small><span>moabdurakib@gmail.com</span></p>
          </div>
        </div>
      </div>
    </aside>
    <!-- mobile footer menu  -->
    <div class="mobile-menu">
      <a
        href="/"
        class="active router-link-exact-active"
        title="Home Page"
        aria-current="page"
        ><i class="fas fa-home"></i><span>Home</span></a
      >
      <button class="cate-btn" @click="cateShow" title="Category List">
        <i class="fas fa-list"></i><span>category</span>
      </button>
      <button class="cart-btn" @click="cartShow" title="Cartlist">
        <i class="fas fa-shopping-basket"></i><span>Cart</span><sup>2</sup>
      </button>
      <a href="/my-wishist" class="" title="Wishlist"
        ><i class="fas fa-bell"></i><span>Notifications</span><sup>0</sup></a
      >
      <a href="/user/profile" class="" title="My Account"
        ><i class="fas fa-user"></i><span>My Account</span></a
      >
    </div>
  </div>
</template>
