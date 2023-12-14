<template>
    <div class="social-link__container">
      <SocialLink 
        name="linkedin" 
        link="https://www.linkedin.com/in/paul-joel-hielscher/" 
        image="src/assets/icons/linkedin.svg" 
      />
      <SocialLink 
        name="xing" 
        link="https://www.xing.com/profile/Paul_Hielscher2" 
        image="src/assets/icons/xing.svg" 
      />
      <SocialLink 
        name="itch.io" 
        link="https://vanhoras.itch.io/" 
        image="src/assets/icons/itch.io.svg" 
      />
      <SocialLink 
        name="github" 
        link="https://github.com/vanhoras" 
        image="src/assets/icons/github2.svg" 
      />
    </div>
</template>
  
  
<script setup lang="ts">
  import SocialLink from '@/components/footer/SocialLink.vue'

</script>


<style scoped>

    .social-link__container {
        margin: auto;
        width: 32rem;
        padding: 5rem 1rem;
        display: flex;
        justify-content: space-between;
    }

</style>
  
  