<template>
  <div class="background" />
  <main>
    <div id="legal_view">
      <h2>Legal Notice</h2>
      <h3>Paul Hielscher</h3>
      <p>{{ ADDRESS_LINE_1 }}</p>
      <p>{{ ADDRESS_LINE_2 }}</p>
      <p>{{ ADDRESS_LINE_3 }}</p>
      <h3>Contact</h3>
      <p><span class="bold">E-Mail:</span> {{ EMAIL }}</p>
    </div>
  </main>
</template>
  
  
<script setup lang="ts">
  import { useHead } from '@vueuse/head';
  import { ADDRESS_LINE_1, ADDRESS_LINE_2, ADDRESS_LINE_3, EMAIL } from '@/assets/personalInfo';

  useHead({
    meta: [
      {
        name: 'robots',
        content: 'noindex'
      }
    ]
  })
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
  
  