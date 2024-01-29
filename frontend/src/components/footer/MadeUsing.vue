<template>
  <p class="made-using">Made using Vue, NodeJs and AWS</p>
</template>

<script setup lang="ts"></script>

<style scoped>
  .made-using {
    font-size: 1.2rem;
    color: var(--text-dark);
    text-align: center;
    margin-bottom: 1rem;
  }

  @media (min-width: 1024px) {
    .made-using {
      text-align: none;
      margin-bottom: 0rem;
    }
  }
</style>
