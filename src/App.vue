<template>
  
  <NavBar />

  <div class="background"/>
  <main class="hexagon" >
    <RouterView />
  </main>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import NavBar from './components/navbar/NavBar.vue'
</script>