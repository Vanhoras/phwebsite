<template>
  <a
    class="social-link"
    :href="props.link"
    @mouseover="hoverOverLink(true)"
    @mouseleave="hoverOverLink(false)"
    target="_blank"
  >
    <img
      :src="props.image"
      :alt="props.name"
      class="social-link__image"
      rel="preload"
      ref="socialLinkImage"
    />
  </a>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const props = defineProps<{ name: string; link: string; image: string }>();

  const socialLinkImage = ref<HTMLElement | null>(null);

  const hoverOverLink = (hover: boolean) => {
    if (socialLinkImage.value == null) return;

    if (hover) {
      socialLinkImage.value.classList.add('social-link__image--hover');
    } else {
      socialLinkImage.value.classList.remove('social-link__image--hover');
    }
  };
</script>

<style scoped>
  .social-link {
    width: 5.5rem;
    height: 5.5rem;
    display: inline-block;
    background-color: var(--grey-1);
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
  }

  .social-link:hover {
    transform: scale(0.9);
    background-color: var(--accent-1);
    box-shadow: 0 0 0 3px rgba(158, 4, 201, 0.2);
  }

  @keyframes scroll-down-top {
    0% {
      top: 1.4rem;
    }
    50% {
      top: 6rem;
    }
    50.1% {
      top: -3rem;
    }
    100% {
      top: 1.4rem;
    }
  }

  .social-link__image {
    color: var(--text);
    width: 2.3rem;
    display: inline-block;
    position: absolute;
    top: 1.4rem;
    left: 1.6rem;
  }

  .social-link__image--hover {
    animation-name: scroll-down-top;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.39, 0.58, 0.57, 1);
  }
</style>
