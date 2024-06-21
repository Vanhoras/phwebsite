<template>
  <div
    class="hexagonContent"
    ref="hexagonContent"
    @mousemove.stop="onMouseMove"
    @mouseleave.stop="removeHighlight"
  ></div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';

  const hexagonContent = ref<HTMLElement | null>(null);

  const baseOffsetX = -2;
  const baseOffsetY = -10;
  const gradientSize = '15rem';
  const gradientColor = '#8e8e8e4f';

  const props = defineProps<{
    positionX: number;
    positionY: number;
    mousePosition: { x: number; y: number } | null;
    triggerRemoveHighlight: number;
  }>();

  const onMouseMove = (e: MouseEvent) => {
    updateHighlightLocation({ x: e.pageX, y: e.pageY });
  };

  const updateHighlightLocation = (position: { x: number; y: number }) => {
    const x = position.x - baseOffsetX - props.positionX;
    const y = position.y - baseOffsetY - props.positionY;

    const radient = `radial-gradient(circle ${gradientSize} at ${x}px ${y}px, ${gradientColor}, transparent`;

    hexagonContent.value?.setAttribute('style', `background: ${radient}`);
  };

  const removeHighlight = () => {
    hexagonContent.value?.removeAttribute('style');
  };

  watch(
    () => props.mousePosition,
    (value) => {
      if (!value) return;
      
      updateHighlightLocation(value);
    },
  );

  watch(
    () => props.triggerRemoveHighlight,
    () => {

      removeHighlight();
    },
  );
</script>

<style scoped>
  .hexagonContent {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
</style>
