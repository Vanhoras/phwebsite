<template>
    <header>
        <nav>
            <div class="nav__main">
                <RouterLink to="/" class="nav-link"><h1>Paul Hielscher</h1></RouterLink>
            </div>
            <ul class="nav__links">
                <li class="nav-link__wrapper">
                    <RouterLink to="/websites" class="nav-link">Websites</RouterLink>
                </li>
                <li class="nav-link__wrapper">
                    <RouterLink to="/apps" class="nav-link">Apps</RouterLink>
                </li>
                <li class="nav-link__wrapper">
                    <RouterLink to="/games" class="nav-link">Games</RouterLink>
                </li>
                <li class="nav-link__wrapper">
                    <RouterLink to="/resume" class="nav-link">Resume</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">

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

    .nav__links {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
    }

    .nav-link__wrapper {
        list-style: none;
    }

    .nav-link {
        color: var(--link-1);
        font-size: 2.2rem;
        padding: 1rem 1rem;
        display: inline-block;
        font-weight: normal;
    }

    .nav-link h1 {
        font-size: 2.2rem;
        display: inline-block;
        margin: 0;
        font-weight: normal;
    }

    .nav-link:hover {
        color: var(--link-1--highlight);
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
