<template>
  <div class="websites">
    <WebsitePreview v-for="(website, index) in websites" :key="website.id" :website="website" :direction-left="(index % 2) == 0"/>
  </div>
</template>
  
<script setup lang="ts">
  import { useWebsiteStore } from '@/stores/websiteStore';
  import type { Website } from '@/types/website';
  import { computed } from 'vue';
  import WebsitePreview from '@/components/website/WebsitePreview.vue'

  const store = useWebsiteStore();

  const websites = computed<Website[]>(() => store.websites)
</script>
  

<style scoped>

  .websites {
      max-width: 110rem;
      margin: auto;
      padding-top: 5rem;
  }

</style>
  
  