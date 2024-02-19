<template>
  <div class="home">
    <img
      src="@/assets/images/paul.jpg"
      alt="Paul Hielscher"
      class="self-image image--hexagonal"
      loading="eager"
      rel="preload"
    />

    <div class="introduction__container">
      <p class="introduction__greeting">Hey,</p>
      <p class="introduction__self">I'm Paul Hielscher</p>
      <h2 class="introduction__job">Developer</h2>
      <p class="introduction__text">
        skilled in everything from
        <RouterLink class="link link--blue" :to="{ name: 'websites' }" @click="closeMobileMenu()"
          >Websites</RouterLink
        >,<br />
        over
        <RouterLink class="link link--yellow" :to="{ name: 'software' }" @click="closeMobileMenu()"
          >Financing Software</RouterLink
        >
        to
        <RouterLink :to="{ name: 'games' }" class="link link--magenta" @click="closeMobileMenu()"
          >Game Development</RouterLink
        >
      </p>
    </div>

    <RouterLink :to="{ name: 'websites' }" @click="closeMobileMenu()">
      <svg class="scroll-down-arrow" viewBox="16.5 53.141 167 93.72">
        <path
          d="M166.471 56.5l-66.674 66.218-66.219-66.674c-3.826-3.852-10.323-3.874-14.175-.048s-3.874 10.322-.049 14.175l73.281 73.786c3.826 3.852 10.323 3.874 14.175.049l73.786-73.281c3.852-3.826 3.874-10.323.049-14.175s-10.027-3.876-14.174-.05z"
        ></path>
      </svg>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/stores/appStore';

  const store = useAppStore();

  const closeMobileMenu = () => {
    store.closeMobileNavbar();
  };
</script>

<style scoped>
  .home {
    position: relative;
    min-height: calc(100vh - 7.5rem);
    pointer-events: none;
  }

  .self-image {
    position: absolute;
    top: 15.7rem;
    left: calc(50vw - 16.8rem);
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

  .scroll-down-arrow {
    display: none;
  }

  .link {
    pointer-events: auto;
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
      pointer-events: auto;
      font-size: 2.5rem;
      margin-top: 2.5rem;
    }
  }

  @media (min-width: 1024px) {
    .self-image {
      top: 18.8rem;
      left: calc(50vw - 41.1rem);
    }

    .introduction__container {
      position: absolute;
      left: calc(50vw + 14.5rem);
      top: 10rem;
      padding: 0;
      margin-left: 0;
      text-align: left;
    }

    .scroll-down-arrow {
      display: block;
      pointer-events: auto;
      fill: var(--text-dark);
      width: 10rem;
      transform: scale(100%, 50%);
      position: absolute;
      bottom: -0.5rem;
      left: calc(50vw - 5rem);
    }
  }
</style>
