<template>
  <div id="websites_view" ref="websiteView">
    <h2 class="websites__title">REFERENCES</h2>
    <WebsitePreview v-for="(website, index) in websites" :key="website.id" :website="website" :direction-left="(index % 2) == 0"/>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import { useWebsiteStore } from '@/stores/websiteStore';
  import type { Website } from '@/types/website';
  import { computed } from 'vue';
  import WebsitePreview from '@/components/website/WebsitePreview.vue'
  import { useAppStore } from '@/stores/appStore';

  const appStore = useAppStore();
  const websiteStore = useWebsiteStore();
  const websites = computed<Website[]>(() => websiteStore.websites)

  const websiteView = ref<HTMLElement | null>(null);
  
  const handleInView = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      console.log('checking intersection1!', entry);
      if (entry.isIntersecting && appStore.scrollDown) {
        console.log('Your component1 is in view!', entry, websiteView.value);
      }
  });
};
  
  const observer = new IntersectionObserver(handleInView);

  onMounted(() => {
    if (!websiteView.value) return;
    observer.observe(websiteView.value);
  });

  onBeforeUnmount(() => {
    observer.disconnect();
  });
</script>
  

<style scoped>

  #websites_view {
      max-width: 110rem;
      margin: auto;
      padding-top: 7.5rem;
  }

  .websites__title {
    margin: auto;
    text-align: center;
    font-size: 6rem;
    font-weight: bold;
    color: var(--text-dark);
    margin-bottom: 6rem;
    margin-top: 3rem;
  }

</style>
  
  