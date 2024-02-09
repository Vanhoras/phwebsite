<template>
    <div class="tech__container">
        <p class="tech__text" :style="`color: ${props.color}`">{{ props.tech }}</p>
    </div>
</template>


<script setup lang="ts">
    const props = defineProps<{tech: string, color: string}>()
</script>


<style scoped>

    .tech__container {
        background-color: var(--grey-1);
        padding: 0.5rem 1rem;
        border-radius: 99999px;
        margin-right: 0.8rem;
        margin-top: 0.8rem;
    }

    .tech__text {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
    }

</style>