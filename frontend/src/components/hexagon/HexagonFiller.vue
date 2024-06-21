<template>
  <div class="hexagon__container" ref="hexagonContainer">
    <HighlightedHexagon
      v-for="(hexagon, index) in hexagons"
      :position-x="hexagon.positionX"
      :position-y="hexagon.positionY"
      :key="index"
      :mousePosition="hexagon.mousePosition"
      :triggerRemoveHighlight="hexagon.triggerRemoveHighlight"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount, type Ref, watch } from 'vue';
  import HighlightedHexagon from './HighlightedHexagon.vue';

  const props = defineProps<{
    mousePosition: { x: number; y: number };
    triggerMouseLeft: number;
  }>();

  interface Hexagon {
    positionX: number;
    positionY: number;
    mousePosition: { x: number; y: number } | null;
    triggerRemoveHighlight: number;
  }

  const hexagonContainer = ref<HTMLElement | null>(null);

  const hexagons: Ref<Hexagon[]> = ref([]);

  let previousHighlightedHexagon: Hexagon | null = null;

  onMounted(() => {
    fillScreenWithHexagons();
    window.addEventListener('resize', fillScreenWithHexagons);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', fillScreenWithHexagons);
  });

  const fillScreenWithHexagons = () => {
    // smaller window = smaller hexagon
    const hexagonHeight = getHexagonHeight();
    const hexagonWidth = getHexagonWidth();

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
        hexagons.value.push({
          positionX: currentX,
          positionY: currentY,
          mousePosition: null,
          triggerRemoveHighlight: -1,
        });

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

  watch(
    () => props.mousePosition,
    (newValue) => {
      const hexagon = findHexagonByPoint(newValue);

      if (!hexagon) return;

      // remove mouse position from previous hexagon
      if (previousHighlightedHexagon && previousHighlightedHexagon !== hexagon) {
        previousHighlightedHexagon.mousePosition = null;
        previousHighlightedHexagon.triggerRemoveHighlight++;
      }

      hexagon.mousePosition = newValue;

      previousHighlightedHexagon = hexagon;
    },
  );

  watch(
    () => props.triggerMouseLeft,
    () => {
      // remove mouse position from previous hexagon
      if (previousHighlightedHexagon) {
        previousHighlightedHexagon.mousePosition = null;
        previousHighlightedHexagon.triggerRemoveHighlight++;
      }
    },
  );

  const findHexagonByPoint = (point: { x: number; y: number }): Hexagon | undefined => {
    return hexagons.value.find((hexagon) => {
      return isPointInHexagon(hexagon, point);
    });
  };

  const isPointInHexagon = (hexagon: Hexagon, point: { x: number; y: number }): boolean => {
    const hexagonHeight = getHexagonHeight();
    const hexagonWidth = getHexagonWidth();

    // check if the position is within the bounding box
    if (
      point.x > hexagon.positionX + hexagonWidth ||
      point.x < hexagon.positionX ||
      point.y > hexagon.positionY + hexagonHeight ||
      point.y < hexagon.positionY
    ) {
      return false;
    }
    // else check corner cases

    // localize the point to the hexagon and map into the upper right quadrant
    // this way we only need to check 1 corner instead of 4
    const localPoint = localizePointToHexagonUpperRight(hexagon, point);

    // normalized vector to the edge of the corner
    // n = {-v, -h}
    const v = hexagonWidth / 4;
    const h = hexagonHeight / 2;

    // normalized vector of the point with a corner
    // p = {localPoint.x - v, localPoint.y - h}

    // build the dot product between the normalized vector to the ede of the corner and the normalized vector of the point with a corner
    const dotProduct = 2 * v * h - v * localPoint.x - h * localPoint.y;

    // if the dot product is greater or equal to 0 the point is within the hexagon
    return dotProduct >= 0;
  };

  const localizePointToHexagonUpperRight = (
    hexagon: Hexagon,
    point: { x: number; y: number },
  ): { x: number; y: number } => {
    const center = getHexagonCenter(hexagon);

    return { x: Math.abs(point.x - center.x), y: Math.abs(point.y - center.y) };
  };

  const getHexagonCenter = (hexagon: Hexagon): { x: number; y: number } => ({
    x: hexagon.positionX + getHexagonWidth() * 0.5,
    y: hexagon.positionY + getHexagonHeight() * 0.5,
  });

  const getHexagonHeight = () => (window.innerWidth >= 1100 ? 262 : 232);
  const getHexagonWidth = () => (window.innerWidth >= 1100 ? 296 : 263);
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
