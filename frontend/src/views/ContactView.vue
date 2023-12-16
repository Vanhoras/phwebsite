<template>
    <div id="contact_view">
      <h2 class="contact__title">CONTACT</h2>
      <ContactForm />
      
    </div>
</template>
  
  
<script setup lang="ts">
import ContactForm from '@/components/contact/ContactForm.vue'

</script>


<style scoped>

  #contact_view {
    padding-bottom: 15rem;
    padding-top: 7rem;
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
  
  