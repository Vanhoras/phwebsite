<template>
  <div id="websites-view" ref="websiteView">
    <div class="lg-crop websites-view__title">
      <img
        :src="referencesHeaderImage"
        alt="References Overview Header"
        class="websites-view__image"
        rel="preload"
      />
    </div>

    <div class="website-view__content">
      <h2 class="websites-view__title display--none">Websites</h2>
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
  import ReferencesHeaderDesktop from '@/assets/images/websites/ReferencesHeaderDesktop.png';
  import ReferencesHeaderMobile from '@/assets/images/websites/ReferencesHeaderMobile.png';

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
  #websites-view {
    padding-top: 7.5rem;
  }

  .website-view__content {
    margin: auto;
    max-width: 110rem;
  }

  .websites-view__title {
    margin-bottom: 5rem;
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

  .websites-view__image {
    width: 1024px;
    position: absolute;
    right: calc((100% - 1024px) / 2);
  }

  @media (min-width: 1024px) {
    .websites-view__image {
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
