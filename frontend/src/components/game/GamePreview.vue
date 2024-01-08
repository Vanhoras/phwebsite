<template>
  <div class="game__preview opacity--zero" ref="gamesPreview">
    <a :href="props.game.itch_io_link">
      <img
        class="game__preview__image"
        :src="props.game.image"
        :alt="props.game.title"
        rel="preload"
      />
    </a>
    <a :href="props.game.itch_io_link">
      <h3 class="game__preview__title">{{ props.game.title }}</h3>
    </a>
    <h4 class="game__preview__description">{{ props.game.genre }}</h4>
    <!-- <p class="game__preview__description"><h4>Role:</h4> {{ props.game.role }}</p> -->
    <p class="game__preview__description">{{ props.game.short_description }}</p>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import type { Game } from '@/types/game';

  const props = defineProps<{ game: Game; order: number; gamesPerRow: number }>();

  const gamesPreview = ref<HTMLElement | null>(null);

  const handleInView = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(
          () => {
            gamesPreview.value?.classList.remove('opacity--zero');
            gamesPreview.value?.classList.add('fade-in--bottom');
            // Timeout to create a staggered effect
          },
          200 * (props.order % props.gamesPerRow),
        );
      }
    });
  };

  const observer = new IntersectionObserver(handleInView, { threshold: 0.5 });

  onMounted(() => {
    if (!gamesPreview.value) return;
    observer.observe(gamesPreview.value);
  });

  onBeforeUnmount(() => {
    observer.disconnect();
  });
</script>

<style scoped>
  .game__preview {
    margin-bottom: 4rem;
    width: 31.5rem;
  }

  .game__preview__image {
    height: 25rem;
    width: 31.5rem;
    margin-right: auto;
    margin-left: auto;
    display: block;
    border: 2px solid black;
  }

  .game__preview__title {
    color: var(--accent-1);
    font-size: 2.2rem;
    text-align: center;
    margin-top: 0.5rem;
  }

  .game__preview__title:hover {
    color: var(--accent-1--highlight);
  }

  .game__preview__description {
    text-align: center;
    white-space: pre-line;
  }
</style>
