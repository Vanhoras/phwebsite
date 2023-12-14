<template>
    <footer>
        <SocialLinks />
    </footer>
</template>
  
  
<script setup lang="ts">
    import SocialLinks from '@/components/footer/SocialLinks.vue'

</script>


<style scoped>

    footer {
        position: relative;
        z-index: 1000;
        background-color: var(--black);
        border-top: 1px solid var(--divider);
        width: 100%;
    }

</style>
  
  