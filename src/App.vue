<template>
  
  <NavBar />

  <div class="background" />
  <main class="hexagon" >
    <HomeView />
    <WebsitesView />
    <GamesView />
    <ContactView />
  </main>

  <Footer />
</template>

<script setup lang="ts">
  import NavBar from '@/components/navbar/NavBar.vue'
  import HomeView from '@/views/HomeView.vue'
  import GamesView from '@/views/GamesView.vue'
  import WebsitesView from '@/views/WebsitesView.vue'
  import ContactView from '@/views/ContactView.vue'
  import Footer from '@/components/footer/Footer.vue'

</script>