<template>
  <div
    class="hexagonContent"
    ref="hexagonContent"
    @mousemove="updateHighlightLocation"
    @mouseleave="removeHighlight"
  ></div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const hexagonContent = ref<HTMLElement | null>(null);

  const baseOffsetX = -2;
  const baseOffsetY = -10;
  const gradientSize = '15rem';
  const gradientColor = '#8e8e8e4f';

  const props = defineProps<{ positionX: number; positionY: number }>();

  const updateHighlightLocation = (e: MouseEvent) => {
    const x = e.pageX - baseOffsetX - props.positionX;
    const y = e.pageY - baseOffsetY - props.positionY;

    const radient = `radial-gradient(circle ${gradientSize} at ${x}px ${y}px, ${gradientColor}, transparent`;

    hexagonContent.value?.setAttribute('style', `background: ${radient}`);
  };

  const removeHighlight = () => {
    hexagonContent.value?.removeAttribute('style');
  };
</script>

<style scoped>
  .hexagonContent {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
</style>
