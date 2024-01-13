<template>
  <div id="games_view" ref="gamesView">
    <div class="lg-crop">
      <img
        src="@/assets/images/games/header.png"
        alt="Games Overview Header"
        class="games__overview__image"
        rel="preload"
      />
    </div>
    <div class="games__overview__content" ref="gamesContainer">
      <GamePreview
        v-for="(game, index) in games"
        :key="game.id"
        :game="game"
        :order="index"
        :gamesPerRow="gamesPerRow"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useGameStore } from '@/stores/gameStore';
  import type { Game } from '@/types/game';
  import { computed } from 'vue';
  import GamePreview from '@/components/game/GamePreview.vue';

  const gamesStore = useGameStore();
  const games = computed<Game[]>(() => gamesStore.games);

  const gamesView = ref<HTMLElement | null>(null);

  // currently hardcoded. If the number of games per row changes due to design calculate it instead.
  const gamesPerRow = window.innerWidth > 945 ? 3 : window.innerWidth > 629 ? 2 : 1;
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
