<template>
  <div class="navbar-links--mobile">
    <svg @click="toggleMobileMenu()" class="menu-button" fill="currentColor" viewBox="0 0 50 50">
      <path
        d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"
      />
    </svg>

    <div class="navbar-mobile__container hide display--none" ref="mobileContainer">
      <ul class="nav__links">
        <li>
          <RouterLink
            :to="{ name: 'websites' }"
            class="nav-link link--magenta"
            @click="closeMobileMenu()"
            >References</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :to="{ name: 'games' }"
            class="nav-link link--magenta"
            @click="closeMobileMenu()"
            >Games</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :to="{ name: 'contact' }"
            class="nav-link link--magenta"
            @click="closeMobileMenu()"
            >Contact</RouterLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useAppStore } from '@/stores/appStore';

  const store = useAppStore();

  const mobileContainer = ref<HTMLElement | null>(null);

  const toggleMobileMenu = () => {
    store.toggleMobileNavbar();
  };

  const closeMobileMenu = () => {
    store.closeMobileNavbar();
  };

  watch(
    () => store.mobileNavbarOpen,
    () => {
      if (mobileContainer.value == null) return;

      if (store.mobileNavbarOpen) {
        mobileContainer.value.classList.remove('display--none');
        mobileContainer.value.classList.remove('hide');
        mobileContainer.value.classList.add('open');
      } else {
        mobileContainer.value.classList.add('hide');
        mobileContainer.value.classList.remove('open');
      }
    },
  );
</script>

<style scoped>
  .navbar-links--mobile {
    position: relative;
  }

  .menu-button {
    position: absolute;
    width: 5rem;
    color: var(--accent-1);
    cursor: pointer;
    top: -2.3rem;
    right: 0;
  }

  .menu-button:hover {
    color: var(--accent-1--highlight);
  }

  @keyframes fade-in {
    from {
      right: -120vw;
      opacity: 0.5;
    }
    to {
      right: -5.1rem;
      opacity: 1;
    }
  }

  @keyframes fade-out {
    0% {
      right: -5.1rem;
      opacity: 1;
    }
    99% {
      right: -120vw;
      opacity: 1;
    }
    100% {
      right: -120vw;
      opacity: 0;
    }
  }

  .navbar-mobile__container {
    position: absolute;
    top: 3.8rem;
    right: -5.1rem;
    background-color: var(--black);
    min-width: 100vw;
    min-height: 20rem;
    z-index: 1000;
    border-bottom: 1px solid var(--divider);
    border-left: 1px solid var(--divider);
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }

  .navbar-mobile__container.hide {
    animation-name: fade-out;
    animation-timing-function: cubic-bezier(0.47, 0, 0.74, 0.71);
  }

  .navbar-mobile__container.open {
    animation-name: fade-in;
    animation-timing-function: cubic-bezier(0.39, 0.58, 0.57, 1);
  }

  .nav__links {
    margin-top: 1rem;
  }

  .nav-link {
    font-size: 2.2rem;
    padding: 1rem 1rem;
    display: inline-block;
    font-weight: normal;
  }
</style>
