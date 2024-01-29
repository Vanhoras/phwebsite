<template>
  <NavBar />

  <RouterView />

  <AppFooter />
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import NavBar from '@/components/navbar/NavBar.vue';
  import AppFooter from '@/components/footer/AppFooter.vue';
</script>
