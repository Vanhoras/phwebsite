<template>
  <div class="section" ref="sectionContainer">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
  import { useAppStore } from '@/stores/appStore';

  const appStore = useAppStore();

  const sectionContainer = ref<HTMLElement | null>(null);

  const handleSlideInView = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (appStore.scrollDown) {
          sectionContainer.value?.classList.remove('slide--down');
          sectionContainer.value?.classList.remove('translate--down');
          sectionContainer.value?.classList.remove('translate--up');
          sectionContainer.value?.classList.add('slide--up');
        } else {
          sectionContainer.value?.classList.remove('slide--up');
          sectionContainer.value?.classList.remove('translate--down');
          sectionContainer.value?.classList.remove('translate--up');
          sectionContainer.value?.classList.add('slide--down');
        }
      }
    });
  };

  const handleSlideOutView = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (appStore.scrollDown) {
          sectionContainer.value?.classList.remove('slide--up');
          sectionContainer.value?.classList.remove('slide--down');
          sectionContainer.value?.classList.remove('translate--up');
          sectionContainer.value?.classList.add('translate--down');
        } else {
          sectionContainer.value?.classList.remove('slide--up');
          sectionContainer.value?.classList.remove('slide--down');
          sectionContainer.value?.classList.remove('translate--down');
          sectionContainer.value?.classList.add('translate--up');
        }
      } else {
        sectionContainer.value?.classList.remove('slide--up');
        sectionContainer.value?.classList.remove('slide--down');
        sectionContainer.value?.classList.remove('translate--up');
        sectionContainer.value?.classList.remove('translate--down');
      }
    });
  };

  const slideInObserver = new IntersectionObserver(handleSlideInView, { rootMargin: '-100px' });
  const slideOutObserver = new IntersectionObserver(handleSlideOutView, { rootMargin: '300px' });

  onMounted(() => {
    if (!sectionContainer.value) return;
    slideInObserver.observe(sectionContainer.value);
    slideOutObserver.observe(sectionContainer.value);
  });

  onBeforeUnmount(() => {
    slideInObserver.disconnect();
    slideOutObserver.disconnect();
  });

  watch(
    () => appStore.sectionReached,
    () => {
      sectionContainer.value?.classList.remove('translate--up');
      sectionContainer.value?.classList.remove('translate--down');
    },
  );
</script>

<style scoped>
  @keyframes keyframes_slide--up {
    0% {
      transform: translate(0, 30rem);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes keyframes_slide--down {
    0% {
      transform: translate(0, -30rem);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  .section {
    pointer-events: none;
  }

  .translate--down {
    transform: translate(0, 30rem);
  }

  .translate--up {
    transform: translate(0, -30rem);
  }

  .slide--up {
    animation-name: keyframes_slide--up;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.35, 0.04, 0.25, 1.09);
  }

  .slide--down {
    animation-name: keyframes_slide--down;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.35, 0.04, 0.25, 1.09);
  }

  @media (min-width: 1024px) {
    .slide--up {
      animation-duration: 0.75s;
    }

    .slide--down {
      animation-duration: 0.75s;
    }
  }
</style>
