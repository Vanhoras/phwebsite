<template>
  <footer>
    <MadeUsing class="display--mobile" />
    <SocialLinks />
    <div class="footer__container">
      <CopyrightNotice />
      <LegalLinks />
    </div>
  </footer>
</template>

<script setup lang="ts">
  import SocialLinks from '@/components/footer/SocialLinks.vue';
  import LegalLinks from '@/components/footer/LegalLinks.vue';
  import CopyrightNotice from '@/components/footer/CopyrightNotice.vue';
  import MadeUsing from '@/components/footer/MadeUsing.vue';
</script>

<style scoped>
  footer {
    position: relative;
    z-index: 1000;
    background-color: var(--black);
    border-top: 1px solid var(--divider);
    width: 100%;

    padding-top: 0.7rem;
  }

  .footer__container {
    position: relative;
    display: flex;
    justify-content: space-between;

    padding-top: 6rem;
    padding-bottom: 0.5rem;

    padding-left: 1rem;
    padding-right: 1rem;
  }

  .display--desktop {
    display: none;
  }

  @media (min-width: 500px) {
    .footer__container {
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }

  @media (min-width: 1100px) {
    footer {
      padding-top: 3.5rem;
    }

    .display--mobile {
      display: none;
    }

    .display--desktop {
      display: flex;
    }

    footer {
      padding-top: 0;
    }

    .footer__container {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
  }
</style>
