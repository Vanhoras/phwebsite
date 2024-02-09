<template>
  <div
    class="software-preview opacity--zero"
    :style="`flex-direction: ${directionLeft ? 'row' : 'row-reverse'}`"
    ref="softwarePreview"
  >
    <img
      class="software__image"
      :src="$props.software.image"
      :alt="props.software.title"
      rel="preload"
    />
    <div class="software__container">
      <div class="software__header">
        <h3 class="software__title" :style="`color: ${props.software.color}`">
          {{ props.software.title }}
        </h3>
        <span class="software__time">{{ props.software.time }}</span>
      </div>
      <p class="software__role">{{ props.software.role }}</p>
      <p class="software__description">{{ props.software.description }}</p>
      <ul v-if="props.software.points">
        <li v-for="point in props.software.points" :key="point">{{ point }}</li>
      </ul>
      <div class="tech-stack__container" ref="techStackContainer">
        <TechDiv
          v-for="tech in props.software.techStack"
          :key="tech"
          :tech="tech"
          :color="props.software.color"
          class="opacity--zero"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import type { Software } from '@/types/software';
  import TechDiv from '@/components/common/TechDiv.vue';

  const props = defineProps<{
    software: Software;
    directionLeft: boolean;
    lagBeforeShow: number;
  }>();

  const softwarePreview = ref<HTMLElement | null>(null);
  const techStackContainer = ref<HTMLElement | null>(null);

  const handleInView = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          softwarePreview.value?.classList.remove('opacity--zero');
          if (props.directionLeft) {
            softwarePreview.value?.classList.add('fade-in--right');
          } else {
            softwarePreview.value?.classList.add('fade-in--left');
          }
        }, props.lagBeforeShow);

        const techStack: HTMLCollection | undefined = techStackContainer.value?.children;

        for (let i = 0; i < (techStack?.length || 0); i++) {
          setTimeout(
            () => {
              techStack?.item(i)?.classList.remove('opacity--zero');
              techStack?.item(i)?.classList.add('fade-in--none');
            },
            props.lagBeforeShow + i * 75 + 100,
          );
        }
      }
    });
  };

  const observer = new IntersectionObserver(handleInView, {
    threshold: 0.5,
  });

  onMounted(() => {
    if (!softwarePreview.value) return;
    observer.observe(softwarePreview.value);
  });

  onBeforeUnmount(() => {
    observer.disconnect();
  });
</script>

<style scoped>
  .software-preview {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 106rem;
    margin: auto;
    padding-bottom: 4rem;
  }

  .software__image {
    width: 100%;
    padding: 0rem 1rem 1rem 1rem;
  }

  .software__container {
    width: 100%;
    padding: 0rem 1rem;
  }

  .software__header {
    display: flex;
    justify-content: space-between;
  }

  .software__title {
    font-size: 3.2rem;
    font-weight: normal;
  }

  .software__time {
    font-size: 1.5rem;
    color: var(--text-dark2);
    margin-top: 1.8rem;
  }

  .software__role {
    color: var(--text-dark2);
    font-size: 2rem;
    margin-top: -1rem;
    margin-bottom: 0.6rem;
  }

  ul {
    padding-left: 1.5rem;
  }

  li {
    list-style: disc;
  }

  .tech-stack__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    max-width: 48rem;
    margin-top: 1rem;
  }

  @media (min-width: 500px) {
    .software__image {
      width: 48rem;
    }

    .software__container {
      width: 48rem;
    }
  }
</style>
