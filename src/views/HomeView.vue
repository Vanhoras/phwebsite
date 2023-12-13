<template>
  <div class="home">
    
    <img src="@/assets/images/paul.jpg" alt="Paul Hielscher" class="self-image" loading="eager" rel="preload"/>

    <div class="introduction__container">
      <p class="introduction__greeting">Hey,</p>
      <p class="introduction__self">I'm Paul Hielscher</p>
      <h2 class="introduction__job">Developer</h2>
      <p class="introduction__text">skilled in everything from <RouterLink class="link--blue" :to="{name: 'websites'}" @click="closeMobileMenu()"
        >Websites</RouterLink>,<br/> over <RouterLink class="link--yellow" :to="{name: 'software'}" @click="closeMobileMenu()"
        >Financing Software</RouterLink> to <RouterLink :to="{name: 'games'}" class="link--magenta" @click="closeMobileMenu()"
        >Game Development</RouterLink></p>
    </div>
  </div>
</template>


<script setup lang="ts">
  import { useAppStore } from '@/stores/appStore';

  const store = useAppStore();

  const closeMobileMenu = () => {
      store.closeMobileNavbar();
  }

</script>

<style scoped>

  .home {
    position: relative;
    min-height: 100vh;
  }

  .self-image {
    width: 35rem;
    position: absolute;
    top: 18.9rem;
    clip-path: polygon(31% 0, 73% 0%, 95% 49%, 73% 98%, 31% 98%, 11% 49%);
    left: 4rem;
  }

  .introduction__container {
    position: absolute;
    left: 60rem;
    top: 10rem;
  }

  .introduction__greeting {
    font-size: 5.5rem;
    font-weight: normal;
  }

  .introduction__self {
    font-size: 5.5rem;
    font-weight: normal;
    margin-top: -2rem;
  }

  .introduction__job {
    font-size: 8.5rem;
    font-weight: normal;
    margin-top: -1rem;
    margin-left: -0.4rem;
  }

  .introduction__text {
    font-size: 2.5rem;
    font-weight: normal;
    margin-top: 2.5rem;
  }

  @media (min-width: 1024px) {
    .introduction__container {
      left: 60rem;
      top: 10rem;
    }
  }

  @media (min-width: 1536px) {
    .self-image {
      left: 49.1rem;
    }

    .introduction__container {
      left: 105rem;
    }
  }
</style>

