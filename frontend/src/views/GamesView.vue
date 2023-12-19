<template>
  <div id="games_view" ref="gamesView">
    <div class="lg-crop">
      <img src="@/assets/images/games/header.png" alt="Games Overview Header" class="games__overview__image" rel="preload"/>
    </div>
    <div class="games__overview__content">
        <GamePreview v-for="game in games" :key="game.id" :game="game"/>
    </div>
  </div>
</template>
  
  
<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import { useGameStore } from '@/stores/gameStore';
  import type { Game } from '@/types/game';
  import { computed } from 'vue';
  import GamePreview from '@/components/game/GamePreview.vue'
  import { useAppStore } from '@/stores/appStore';

  const appStore = useAppStore();
  const gamesStore = useGameStore();
  const games = computed<Game[]>(() => gamesStore.games)

  const gamesView = ref<HTMLElement | null>(null);

  const handleInView = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && appStore.scrollDown) {
        gamesView.value?.classList.toggle("fade-in--bottom");
      }
    });
  };
  
  const observer = new IntersectionObserver(handleInView);

  onMounted(() => {
    if (!gamesView.value) return;
    observer.observe(gamesView.value);
  });

  onBeforeUnmount(() => {
    observer.disconnect();
  });
</script>
  
  <style scoped>

    #games_view {
      padding-top: 7.5rem;
    }
    
    .games__overview__content {
        max-width: 110rem;
        margin: auto;
        padding-top: 5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .lg-crop {
      overflow: hidden;
      position: relative;
      height: 21.3rem;
    }

    .games__overview__image {
      width: 1024px;
      position: absolute;
      right: calc((100% - 1024px) / 2);
    }

    @media (min-width: 1024px) {
      .games__overview__image {
        width: 100%;
        position: relative;
        right: 0;
      }

      .lg-crop {
        overflow: auto;
        height: auto;
      }
    }
  </style>


  