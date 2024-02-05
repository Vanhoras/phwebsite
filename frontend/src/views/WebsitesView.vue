<template>
  <div id="websites_view" ref="websiteView">
    <h2 class="websites__title">REFERENCES</h2>
    <div class="border"></div>
    <WebsitePreview
      v-for="(website, index) in websites"
      :key="website.id"
      :website="website"
      :direction-left="index % 2 == 0"
      :id="website.id"
      :lagBeforeShow="getLagBeforeShow(index)"
    />
  </div>
</template>

<script setup lang="ts">
  import { useWebsiteStore } from '@/stores/websiteStore';
  import type { Website } from '@/types/website';
  import { computed } from 'vue';
  import WebsitePreview from '@/components/website/WebsitePreview.vue';

  const websiteStore = useWebsiteStore();
  const websites = computed<Website[]>(() => websiteStore.websites);

  const getLagBeforeShow = (index: number) => {
    if (window.innerWidth < 1024) {
      return 0;
    }

    if (index === 0) return 150;
    if (index === 1) return 250;
    return 0;
  };
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
    font-size: 5rem;
    font-weight: bold;
    color: var(--text-dark);
    margin-bottom: 0rem;
    margin-top: 1rem;
  }

  .border {
    height: 0.3rem;
    width: 10rem;
    margin: auto;
    background-color: var(--text);
    margin-bottom: 4rem;
  }
</style>
