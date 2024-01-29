<template>
  <div class="copyright">
    <MadeUsing class="display--desktop" />
    <p>&#169; 2024 Paul Hielscher</p>
  </div>
</template>

<script setup lang="ts">
  import MadeUsing from '@/components/footer/MadeUsing.vue';
</script>

<style scoped>
  .copyright {
    margin-top: 1.5rem;
  }

  .made-using {
    font-size: 1.2rem;
    color: var(--text-dark);
  }

  .display--desktop {
    display: none;
  }

  @media (min-width: 1024px) {
    .display--desktop {
      display: block;
    }

    .copyright {
      margin-top: 0.2rem;
    }
  }
</style>
