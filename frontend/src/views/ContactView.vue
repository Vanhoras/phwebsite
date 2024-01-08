<template>
  <div id="contact_view" ref="contactView">
    <h2 class="contact__title" ref="contactTitle">CONTACT</h2>
    <ContactForm />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import ContactForm from '@/components/contact/ContactForm.vue';
  import { useAppStore } from '@/stores/appStore';

  const appStore = useAppStore();

  const contactView = ref<HTMLElement | null>(null);
  const contactTitle = ref<HTMLElement | null>(null);

  const handleInView = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && appStore.scrollDown) {
        contactTitle.value?.classList.add('fade-in--left');
      }
    });
  };

  const observer = new IntersectionObserver(handleInView);

  onMounted(() => {
    if (!contactTitle.value) return;
    observer.observe(contactTitle.value);
  });

  onBeforeUnmount(() => {
    observer.disconnect();
  });
</script>

<style scoped>
  #contact_view {
    padding-bottom: 15rem;
    padding-top: 15rem;
    min-height: calc(100vh - 15.5rem);
  }

  .contact__title {
    margin: auto;
    text-align: center;
    font-size: 6rem;
    font-weight: bold;
    color: var(--text-dark);
    margin-bottom: 8rem;
  }
</style>
