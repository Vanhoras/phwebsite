<template>
  <div class="background" />
  <main>
    <div id="legal_view">
      <h2>Legal Notice</h2>
      <h3>Paul Hielscher</h3>
      <p>{{ personalInfo.addressLine1 }}</p>
      <p>{{ personalInfo.addressLine2 }}</p>
      <p>{{ personalInfo.addressLine3 }}</p>
      <p>{{ personalInfo.addressLine4 }}</p>
      <h3>Contact</h3>
      <p><span class="bold">E-Mail:</span> {{ personalInfo.email }}</p>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { useHead } from '@vueuse/head';
  import { useAppStore } from '@/stores/appStore';
  import { computed } from 'vue';
  import type { PersonalInfo } from '@/types/personalInfoI';

  useHead({
    meta: [
      {
        name: 'robots',
        content: 'noindex',
      },
    ],
  });

  const appStore = useAppStore();

  const personalInfo = computed<PersonalInfo>(() => appStore.personalInfo);
</script>

<style scoped>
  main {
    min-height: calc(100vh - 15.6rem);
  }

  #legal_view {
    padding-top: 3rem;
    text-align: center;
  }

  h2 {
    font-size: 4rem;
    font-weight: bold;
  }

  h3 {
    font-size: 2rem;
    margin-top: 2rem;
    font-weight: bold;
  }
</style>
@/types/personalInfoI
