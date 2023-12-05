<template>
  <div class="background"/>
  <main class="hexagon" >
    <div class="home">
      
      <img src="@/assets/images/paul.jpg" alt="Paul Hielscher" class="self-image"/>

      <div class="introduction__container">
        <p class="introduction__greeting">Hey,</p>
        <p class="introduction__self">I'm Paul</p>
        <h2 class="introduction__job">Developer</h2>
        <p class="introduction__text">skilled in everything from <RouterLink class="link--blue" to="/websites">Websites</RouterLink>,<br/> over <RouterLink class="link--yellow" to="/software">Financing Software</RouterLink> to <RouterLink to="/games" class="link--magenta">Game Development</RouterLink></p>
      </div>
    </div>
  </main>
</template>


<script setup lang="ts">

</script>

<style scoped>
  main {
    height: 100vh;
    position: relative;
    padding-top: 7.5rem;
  }

  .home {
    position: relative;
  }

  .self-image {
    width: 35rem;
    position: absolute;
    top: 18.9rem;
    clip-path: polygon(31% 0, 73% 0%, 95% 49%, 73% 98%, 31% 98%, 11% 49%);
    left: 49.1rem;
  }

  .introduction__container {
    position: absolute;
    left: 105rem;
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

</style>

