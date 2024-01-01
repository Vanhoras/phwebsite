<template>
    <div class="website-preview" :style="`flex-direction: ${directionLeft ? 'row' : 'row-reverse'}`" ref="websitePreview">
        <img class="website__image" :src="$props.website.image" :alt="props.website.title" rel="preload"/>
        <div class="website__container">
            <div class="website__header"><h3 class="website__title" :style="`color: ${props.website.color}`">{{ props.website.title }}</h3><span class="website__time">{{ props.website.time }}</span></div>
            <p class="website__role">{{ props.website.role }}</p>
            <p class="website__description">{{ props.website.description }}</p>
            <ul v-if="props.website.points">
                <li v-for="point in props.website.points" :key="point">{{ point }}</li>
            </ul>
            <div class="tech-stack__container">
                <TechDiv v-for="tech in props.website.techStack" :key="tech" :tech="tech" :color="props.website.color"/>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
    import { ref, onMounted, onBeforeUnmount } from 'vue';
    import type { Website } from '@/types/website';
    import TechDiv from '@/components/website/TechDiv.vue';
    import { useAppStore } from '@/stores/appStore';

    const appStore = useAppStore();
    
    const props = defineProps<{website: Website, directionLeft: boolean}>()

    const websitePreview = ref<HTMLElement | null>(null);

    const handleInView = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && appStore.scrollDown) {
                if (props.directionLeft) {
                    websitePreview.value?.classList.add("fade-in--right");
                    setTimeout(() => {
                        websitePreview.value?.classList.remove("fade-in--right");
                    }, 750);
                } else {
                    websitePreview.value?.classList.add("fade-in--left");
                    setTimeout(() => {
                        websitePreview.value?.classList.remove("fade-in--left");
                    }, 750);
                }
            }
        });
    };

    const observer = new IntersectionObserver(handleInView);

    onMounted(() => {
        if (!websitePreview.value) return;
        observer.observe(websitePreview.value);
    });

    onBeforeUnmount(() => {
        observer.disconnect();
    });
</script>


<style scoped>

    .website-preview {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        max-width: 110rem;
        margin: auto;
        padding-bottom: 9rem;
    }

    .website__image {
        width: 100%;
        padding: 0rem 1rem 1rem 1rem;
    }

    .website__container {
        width: 100%;
        padding: 0rem 1rem;
    }

    .website__header {
        display: flex;
        justify-content: space-between;
    }

    .website__title {
        font-size: 3.2rem;
        font-weight: normal;
    }

    .website__time {
        font-size: 1.5rem;
        color: var(--text-dark2);
        margin-top: 1.8rem;
    }

    .website__role {
        color: var(--text-dark2);
        font-size: 2rem;
        margin-top: -1rem;
        margin-bottom: 0.6rem;
    }

    .website__description {

    }

    ul {
        padding-left: 1.5rem;
    }

    li {
        list-style: disc;
    }

    .tech-stack__container {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        max-width: 50rem;
        margin-top: 1rem;
    }

    @media (min-width: 500px) {
        .website__image {
            width: 50rem;
        }

        .website__container {
            width: 50rem;
        }
    }

</style>