<template>
  <div>
    <div class="lg-crop">
      <img src="@/assets/images/games/header.png" alt="Games Overview Header" class="games__overview__image"/>
    </div>
    <div class="games__overview__content">
        <GamePreview v-for="game in games" :key="game.id" :game="game"/>
    </div>
  </div>
</template>
  
  
  <script setup lang="ts">
    import { useGameStore } from '@/stores/gameStore';
    import type { Game } from '@/types/game';
    import { computed } from 'vue';
    import GamePreview from '@/components/game/GamePreview.vue'

    const store = useGameStore();

    const games = computed<Game[]>(() => store.games)
  </script>
  
  <style scoped>
    
    .games__overview__content {
        max-width: 100rem;
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


  