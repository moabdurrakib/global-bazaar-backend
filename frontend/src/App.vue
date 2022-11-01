<template>
  <div>
    <div class="backdrop"></div>
    <a class="backtop fas fa-arrow-up" href="#"></a>
    <HeaderPart />
    
    <NavBar />
    <CartSideBar />
    <MobileMenu /> 

  <!-- Content part -->
  <router-view></router-view>
  <Index />

  <NewsLetter /> 
  <FooterPart /> 
 
  </div>
</template>
<script setup>
import Index from './views/pages/index.vue'
import {HeaderPart ,CartSideBar, NavBar, MobileMenu ,NewsLetter,FooterPart} from '@/components'
</script>

<style>
.section.news-part{
  background: url(assets/images/newsletter.jpg) no-repeat center;
}
</style>