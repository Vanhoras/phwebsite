<template>
  <div class="background" />
  <main class="hexagon" >
      <HomeView />
      <WebsitesView />
      <GamesView />
      <ContactView />
  </main>
</template>
  
<script setup lang="ts">
  import { onMounted } from 'vue';
  import HomeView from '@/views/HomeView.vue';
  import GamesView from '@/views/GamesView.vue';
  import WebsitesView from '@/views/WebsitesView.vue';
  import ContactView from '@/views/ContactView.vue';
  import { useAppStore } from '@/stores/appStore';

  const store = useAppStore();

  let prevScrollY = window.scrollY || document.documentElement.scrollTop;

  const handleScroll = () => {
    const currentScrollY = window.scrollY || document.documentElement.scrollTop;
    
    store.scrollDown = currentScrollY > prevScrollY;

    prevScrollY = currentScrollY;
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  });

</script>

  