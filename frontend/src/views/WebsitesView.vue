<template>
  <div id="websites_view">
    <div class="lg-crop">
      <img
        :src="referencesHeaderImage"
        alt="References Overview Header"
        class="websites__overview__image"
        rel="preload"
      />
    </div>

    <div class="website_view__content">
      <h2 class="websites__title">REFERENCES</h2>
      <WebsitePreview
        v-for="(website, index) in websites"
        :key="website.id"
        :website="website"
        :direction-left="index % 2 == 0"
        :id="website.id"
        :lagBeforeShow="getLagBeforeShow(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useWebsiteStore } from '@/stores/websiteStore';
  import type { Website } from '@/types/website';
  import { computed } from 'vue';
  import WebsitePreview from '@/components/website/WebsitePreview.vue';
  import ReferencesHeaderDesktop from '@/assets/images/websites/technologie_banner.png';
  import ReferencesHeaderMobile from '@/assets/images/websites/technologie_banner_large.png';

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

  const referencesHeaderImage = computed<string>(() => {
    if (window.innerWidth < 1024) {
      return ReferencesHeaderMobile;
    }
    return ReferencesHeaderDesktop;
  });
</script>

<style scoped>
  #websites_view {
    padding-top: 7.5rem;
  }

  .website_view__content {
    margin: auto;
    max-width: 110rem;
  }

  .websites__title {
    text-align: center;
    font-size: 6rem;
    font-weight: bold;
    color: var(--accent-3);
    margin-bottom: 2rem;
    margin-top: 0rem;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000000;
    -webkit-text-fill-color: var(--accent-3);
  }

  .border {
    height: 0.3rem;
    width: 10rem;
    margin: auto;
    background-color: var(--text);
    margin-bottom: 4rem;
  }

  .lg-crop {
    overflow: hidden;
    position: relative;
    height: 16rem;
  }

  .websites__overview__image {
    width: 1024px;
    position: absolute;
    right: calc((100% - 1024px) / 2);
  }

  @media (min-width: 1024px) {
    .websites__overview__image {
      width: 100%;
      position: relative;
      right: 0;
    }

    .lg-crop {
      overflow: auto;
      height: auto;
    }
  }
</style>
