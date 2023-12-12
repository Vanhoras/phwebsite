<template>
    <header>
        <nav>
            <div class="nav__main">
                <RouterLink to="/" class="nav-link link--magenta" @click="closeMobileMenu()"><h1>Paul Hielscher</h1></RouterLink>
            </div>
            <NavBarLinksDesktop class="show--desktop"/>
            <NavBarLinksMobile class="show--mobile"/>
        </nav>
    </header>
</template>

<script setup lang="ts">
    import NavBarLinksDesktop from './NavBarLinksDesktop.vue';
    import NavBarLinksMobile from './NavBarLinksMobile.vue';
    import { useAppStore } from '@/stores/appStore';

    const store = useAppStore();

    const closeMobileMenu = () => {
        store.closeMobileNavbar();
    }

</script>



<style scoped>
    header {
        z-index: 1000;
        width: 100%;
        border-bottom: 1px solid var(--divider);
        position: fixed;
        top: 0;
        left: 0;
        background-color: var(--black);
    }

    nav {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        padding: 1rem 5rem;
        align-items: center;
    }

    .nav-link {
        padding: 1rem 0rem;
        display: inline-block;
    }

    .nav-link h1 {
        font-size: 2.2rem;
        display: inline-block;
        margin: 0;
        font-weight: normal;
    }

    .show--desktop {
       display: none; 
    }

    .show--mobile {
        display: inline-block;
    }

    @media (min-width: 672px) {
        .show--desktop {
            display: flex; 
        }

        .show--mobile {
            display: none;
        }
    }
</style>
