<template>
  <div id="software-view" ref="softwareView">
    <div class="lg-crop software-view__title">
      <img
        :src="softwareHeaderImage"
        alt="Software View Header"
        class="software-view__image"
        rel="preload"
      />
    </div>

    <div class="software-view__content">
      <h2 class="software-view__title display--none">Software</h2>
      <SoftwarePreview
        v-for="(software, index) in softwareList"
        :key="software.id"
        :software="software"
        :direction-left="index % 2 == 0"
        :id="software.id"
        :lagBeforeShow="getLagBeforeShow(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useSoftwareStore } from '@/stores/softwareStore';
  import type { Software } from '@/types/software';
  import { computed } from 'vue';
  import SoftwarePreview from '@/components/software/SoftwarePreview.vue';
  import SoftwareHeaderDesktop from '@/assets/images/websites/ReferencesHeaderDesktop.png';
  import SoftwareHeaderMobile from '@/assets/images/websites/ReferencesHeaderMobile.png';

  const softwareStore = useSoftwareStore();
  const softwareList = computed<Software[]>(() => softwareStore.softwareList);

  const getLagBeforeShow = (index: number) => {
    if (window.innerWidth < 1024) {
      return 0;
    }

    if (index === 0) return 150;
    if (index === 1) return 250;
    return 0;
  };

  const softwareHeaderImage = computed<string>(() => {
    if (window.innerWidth < 1024) {
      return SoftwareHeaderMobile;
    }
    return SoftwareHeaderDesktop;
  });
</script>

<style scoped>
  #software-view {
    padding-top: 7.5rem;
  }

  .software-view__content {
    margin: auto;
    max-width: 110rem;
  }

  .software-view__title {
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

  .software-view__image {
    width: 1024px;
    position: absolute;
    right: calc((100% - 1024px) / 2);
  }

  @media (min-width: 1024px) {
    .software-view__image {
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
