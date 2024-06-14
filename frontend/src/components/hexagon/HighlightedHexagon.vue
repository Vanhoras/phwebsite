<template>
  <div
    class="hexagon-highlighted"
    :style="`top: ${props.positionY}px; left: ${props.positionX}px;`"
  >
    <HexagonContent :position-x="props.positionX" :position-y="props.positionY" />
    <div class="hexagon__border"></div>
  </div>
</template>

<script setup lang="ts">
  import HexagonContent from '@/components/hexagon/HexagonContent.vue';

  const props = defineProps<{ positionX: number; positionY: number }>();
</script>

<style scoped>
  .hexagon-highlighted {
    width: 26.3rem;
    height: 23.2rem;
    position: absolute;
    background-color: transparent;
    clip-path: polygon(25% 0, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  }

  .hexagon__border {
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #2a2c2e;
    clip-path: polygon(
      25% 0,
      75% 0%,
      100% 50%,
      75% 100%,
      25% 100%,
      0% 50%,
      25% 0,
      calc(25% + 1px) 1px,
      1px 50%,
      calc(25% + 1px) calc(100% - 1px),
      calc(75% - 1px) calc(100% - 1px),
      calc(100% - 1px) 50%,
      calc(75% - 1px) 1px,
      calc(25% + 1px) 1px
    );
  }

  @media (min-width: 1100px) {
    .hexagon-highlighted {
      width: 29.6rem;
      height: 26.2rem;
    }
  }
</style>
