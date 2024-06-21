<template>
  <div class="background" />
  <main @mousemove="propagateMouseMove" @mouseleave="propagateMouseLeave">
    <HexagonFiller :mousePosition="mousePosition" :triggerMouseLeft="triggerMouseLeft" />

    <div id="topLocation" ref="topLocation"></div>
    <HomeView />

    <div id="referencesLocation"></div>
    <SectionContainer>
      <WebsitesView />
    </SectionContainer>

    <div id="gamesLocation"></div>
    <SectionContainer>
      <GamesView />
    </SectionContainer>

    <div id="contactLocation"></div>
    <ContactView />

    <div id="bottomLocation" ref="bottomLocation"></div>
  </main>
</template>

<script setup lang="ts">
  import { onMounted, onBeforeUnmount, ref } from 'vue';
  import HomeView from '@/views/HomeView.vue';
  import GamesView from '@/views/GamesView.vue';
  import WebsitesView from '@/views/WebsitesView.vue';
  import ContactView from '@/views/ContactView.vue';
  import SectionContainer from '@/components/SectionContainer.vue';
  import { useAppStore } from '@/stores/appStore';
  import HexagonFiller from '@/components/hexagon/HexagonFiller.vue';

  const appStore = useAppStore();

  const topLocation = ref<HTMLElement | null>(null);
  const bottomLocation = ref<HTMLElement | null>(null);

  let prevScrollY = window.scrollY || document.documentElement.scrollTop;
  let mousePosition = ref({ x: -1, y: -1 });
  let triggerMouseLeft = 0;

  const handleScroll = () => {
    const currentScrollY = window.scrollY || document.documentElement.scrollTop;

    appStore.scrollDown = currentScrollY > prevScrollY;

    prevScrollY = currentScrollY;
  };

  const handleInView = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        appStore.sectionReached++;
      }
    });
  };

  const observer = new IntersectionObserver(handleInView);

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    if (topLocation.value) {
      observer.observe(topLocation.value);
    }

    if (bottomLocation.value) {
      observer.observe(bottomLocation.value);
    }
  });

  onBeforeUnmount(() => {
    observer.disconnect();
  });

  const propagateMouseMove = (e: MouseEvent) => {
    mousePosition.value = { x: e.pageX, y: e.pageY };
  };
  const propagateMouseLeave = (e: MouseEvent) => {
    triggerMouseLeft++;
  };
</script>
