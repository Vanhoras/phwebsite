<template>
  <div class="hexagon__container" ref="hexagonContainer">
    <HighlightedHexagon
      v-for="(hexagon, index) in hexagons"
      :position-x="hexagon.positionX"
      :position-y="hexagon.positionY"
      :key="index"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount, type Ref } from 'vue';
  import HighlightedHexagon from './HighlightedHexagon.vue';

  interface Hexagon {
    positionX: number;
    positionY: number;
  }

  const hexagonContainer = ref<HTMLElement | null>(null);

  const hexagons: Ref<Hexagon[]> = ref([]);

  onMounted(() => {
    fillScreenWithHexagons();
    window.addEventListener('resize', fillScreenWithHexagons);
  });

  // Remove event listener on component unmount
  onBeforeUnmount(() => {
    window.removeEventListener('resize', fillScreenWithHexagons);
  });

  const fillScreenWithHexagons = () => {
    // smaller window = smaller hexagon
    const hexagonHeight = window.innerWidth >= 1100 ? 262 : 232;
    const hexagonWidth = window.innerWidth >= 1100 ? 296 : 263;

    hexagons.value = [];

    // Because of scroll Behaviours the scrollHeight is not entirely accurate. Increasing by 1000px fixes it, while adding some overflow.
    const maxHeight = (hexagonContainer.value?.scrollHeight || 8000) + 1000;
    const maxWidth = window.innerWidth;

    // shift hexagon up depending on window size
    const offsetY = window.innerWidth >= 1100 ? hexagonHeight * -1 : hexagonHeight * -0.5;
    const offsetX = calculateOffsetX(hexagonWidth);

    let currentY = offsetY;
    let currentX = offsetX;

    let even = false;

    while (currentY < maxHeight) {
      while (currentX < maxWidth) {
        hexagons.value.push({ positionX: currentX, positionY: currentY });

        currentX += hexagonWidth * 1.5;
      }

      even = !even;
      currentX = offsetX + (even ? hexagonWidth * 0.75 : 0);

      currentY += hexagonHeight * 0.5;
    }
  };

  const calculateOffsetX = (hexagonWidth: number) => {
    // calculation to align the middle of the hexagons with the middle of the window.
    const midPointOfWindow = window.innerWidth * 0.5;
    let middleHexagon = Math.ceil(window.innerWidth / (hexagonWidth * 0.75) / 2);

    // middleHexagon needs to be uneven for the design to work
    if (middleHexagon % 2 === 0) middleHexagon++;

    const midPointOfMiddleHexagon = ((middleHexagon - 1) * 0.75 + 0.5) * hexagonWidth;
    const baseOffsetX = hexagonWidth * -0.75;

    return baseOffsetX + (midPointOfWindow - midPointOfMiddleHexagon);
  };
</script>

<style scoped>
  .hexagon__container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
