<template>
    <ul class="nav__links">
        <li class="nav-link__wrapper">
            <RouterLink :to="{name: 'websites'}"  class="nav-link link--magenta">References</RouterLink>
        </li>
        <li class="nav-link__wrapper">
            <RouterLink :to="{name: 'games'}" class="nav-link link--magenta">Games</RouterLink>
        </li>
        <li class="nav-link__wrapper">
            <RouterLink :to="{name: 'contact'}" class="nav-link link--magenta">Contact</RouterLink>
        </li>
    </ul>
</template>

<script setup lang="ts">

</script>

<style scoped>

    .nav__links {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
    }

    .nav-link {
        font-size: 2.2rem;
        padding: 1rem 1rem;
        display: inline-block;
        font-weight: normal;
    }

    .nav__main .nav-link {
        padding: 1rem 0rem;
    }

    @media (min-width: 1024px) {
        .nav-link {
            padding: 1rem 3rem;
        }
    }


</style>