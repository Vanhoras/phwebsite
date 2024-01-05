<template>
    <ul class="footer__links">
        <li class="footer-link__wrapper">
            <RouterLink :to="{name: 'legal'}" class="footer-link link--white">Legal Notice</RouterLink>
        </li>
        <li class="footer-link__wrapper border--none">
            <RouterLink :to="{name: 'privacy'}" class="footer-link link--white">Privacy Policy</RouterLink>
        </li>
    </ul>
</template>


<script setup lang="ts">

</script>


<style scoped>

    .footer__links {
        display: flex;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        padding-left: 0;
    }

    .footer-link__wrapper {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        border-right: 1px solid;
    }

    @media (min-width: 500px) {
        .footer-link__wrapper {
            padding-left: 2rem;
            padding-right: 2rem;
        }
    }

</style>