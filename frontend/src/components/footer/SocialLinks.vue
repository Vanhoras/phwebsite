<template>
  <div class="social-link__container">
    <SocialLink
      v-for="socialLink in socialLinks"
      :key="socialLink.name"
      :name="socialLink.name"
      :link="socialLink.link"
      :image="socialLink.icon"
    />
  </div>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/stores/appStore';
  import SocialLink from '@/components/footer/SocialLink.vue';
  import { computed } from 'vue';
  import type { SocialLinkI } from '@/types/socialLink';

  const appStore = useAppStore();

  const socialLinks = computed<SocialLinkI[]>(() => appStore.socialLinks);
</script>

<style scoped>
  .social-link__container {
    z-index: 500;
    margin: auto;
    width: 30rem;
    display: flex;
    justify-content: space-between;

    position: absolute;
    left: calc(50% - 15rem);
  }

  @media (min-width: 1100px) {
    .social-link__container {
      top: 5rem;
    }
  }
</style>
