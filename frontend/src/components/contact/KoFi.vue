<template>
  <div>
    <!-- KoFi button element taken from KoFi -->
    <span id="spanPreview" alt="HTML Button preview" class="imgPreview">
      <link
        href="https://fonts.googleapis.com/css?family=Quicksand:400,700"
        rel="stylesheet"
        type="text/css"
      />
      <div class="btn-container">
        <a
          title="Support me on ko-fi.com"
          class="kofi-button"
          target="_blank"
          href="https://ko-fi.com/vanhoras"
        >
          <span class="kofitext">
            <img
              src="https://storage.ko-fi.com/cdn/cup-border.png"
              alt="Ko-fi donations"
              class="kofiimg"
            />Buy me a coffee</span
          >
        </a>
      </div>
    </span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  .btn-container {
    text-align: center;
  }

  .kofi-button {
    line-height: 3.6rem;
    display: inline-block;
    padding: 0.2rem 1.2rem;
    border-radius: 1.2rem;
    cursor: pointer;
    border: 2px solid var(--text-dark);
    font-family:
      'Quicksand',
      Helvetica,
      Century Gothic,
      sans-serif;
    font-size: 1.4rem;
    color: var(--text);
  }

  .kofi-button:hover {
    border-color: var(--accent-1);
    color: var(--accent-1);
  }

  .kofitext {
    letter-spacing: -0.15px;
    vertical-align: middle;
    line-height: 3.3rem;
    font-weight: 600;
  }

  .kofiimg {
    height: 1.5rem;
    width: 2.2rem;
    vertical-align: middle;
    margin-right: 0.5rem;
    margin-bottom: 0.3rem;
    content: url('https://storage.ko-fi.com/cdn/cup-border.png');
  }
</style>
