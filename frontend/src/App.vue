<template>
  <NavBar />
    
  <RouterView />

  <Footer />
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import NavBar from '@/components/navbar/NavBar.vue';
  import Footer from '@/components/footer/Footer.vue';
  
</script>