<template>
  <div class="home">
    
    <img src="@/assets/images/paul.jpg" alt="Paul Hielscher" class="self-image image--hexagonal" loading="eager" rel="preload"/>

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
    position: absolute;
    top: 15.9rem;
    left: calc(50vw - 14.8rem);
  }

  .introduction__container {
    position: relative;
    width: 100%;
    padding: 40rem 1rem 0rem 1rem;
    text-align: center;
  }

  .introduction__greeting {
    font-size: 4.5rem;
    font-weight: normal;
  }

  .introduction__self {
    font-size: 4.5rem;
    font-weight: normal;
    margin-top: -2rem;
  }

  .introduction__job {
    font-size: 7.5rem;
    font-weight: normal;
    margin-top: -2rem;
    margin-left: -0.4rem;
  }

  .introduction__text {
    font-size: 2rem;
    font-weight: normal;
    margin-top: 0rem;
  }

  @media (min-width: 500px) {
    .introduction__container {
      margin-left: calc(50vw - 26rem);
      width: auto;
      max-width: 55rem;
    }

    .introduction__greeting {
      font-size: 5.5rem;
    }

    .introduction__self {
      font-size: 5.5rem;
    }

    .introduction__job {
      font-size: 8.5rem;
      margin-top: -1rem;
    }

    .introduction__text {
      font-size: 2.5rem;
      margin-top: 2.5rem;
    }
  }

  @media (min-width: 1024px) {
    .self-image {
      top: 18.9rem;
      left: 4rem;
    }

    .introduction__container {
      position: absolute;
      left: 60rem;
      top: 10rem;
      padding: 0;
      margin-left: 0;
      text-align: left;
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

