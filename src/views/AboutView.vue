<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-btn>
      Button
    </v-btn>

    <section class="typography-section">
      <h2>Typography</h2>
      <h1>Heading 1 - The quick brown fox jumps over the lazy dog</h1>
      <h2>Heading 2 - The quick brown fox jumps over the lazy dog</h2>
      <h3>Heading 3 - The quick brown fox jumps over the lazy dog</h3>
      <h4>Heading 4 - The quick brown fox jumps over the lazy dog</h4>
      <h5>Heading 5 - The quick brown fox jumps over the lazy dog</h5>
      <h6>Heading 6 - The quick brown fox jumps over the lazy dog</h6>
    </section>

    <section class="color-palette-section">
      <h2>Color Palette</h2>
      <div class="color-item">
        <div class="color-box error-color"></div>
        <span>Error (#A54B4B)</span>
      </div>
      <div class="color-item">
        <div class="color-box info-color"></div>
        <span>Info (#668395)</span>
      </div>
      <div class="color-item">
        <div class="color-box success-color"></div>
        <span>Success (#607E44)</span>
      </div>
      <div class="color-item">
        <div class="color-box warning-color"></div>
        <span>Warning (#E0C28A)</span>
      </div>
      <div class="color-item">
        <div class="color-box primary-color"></div>
        <span>Primary (#DAA520)</span>
      </div>
      <div class="color-item">
        <div class="color-box secondary-color"></div>
        <span>Secondary (#C8B9D7)</span>
      </div>
    </section>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column; /* Added to stack content vertically */
  }
}

.typography-section,
.color-palette-section {
  margin-top: 40px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  background-color: rgba(var(--v-theme-surface), var(--v-surface-alpha));
  width: 80%; /* Ensure sections take up reasonable width */
  max-width: 800px; /* Limit max width for readability */
}

.typography-section h1, .typography-section h2, .typography-section h3,
.typography-section h4, .typography-section h5, .typography-section h6 {
  margin-bottom: 10px;
}

.color-palette-section .color-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.color-palette-section .color-box {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  margin-right: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Color definitions from the Foundation theme in vuetifyStyle.js */
.color-palette-section .error-color {
  background-color: #A54B4B;
}
.color-palette-section .info-color {
  background-color: #668395;
}
.color-palette-section .success-color {
  background-color: #607E44;
}
.color-palette-section .warning-color {
  background-color: #E0C28A;
}
.color-palette-section .primary-color {
  background-color: #DAA520;
}
.color-palette-section .secondary-color {
  background-color: #C8B9D7;
}
</style>
