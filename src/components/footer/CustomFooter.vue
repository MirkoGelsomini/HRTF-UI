<script setup>
import { useThemeStore } from '/src/stores/theme';
import { useRouter } from 'vue-router';

const router = useRouter();
const themeStore = useThemeStore();

const navigateToHome = () => {
  router.push({ name: 'home' });
};
</script>

<template>
  <v-footer
    class="custom-footer"
    color="transparent"
    prominent
  >
    <div :class="$vuetify.display.mdAndDown ? '' : 'ml-5'"></div>

    <img
      height="40"
      cover
      src="@/assets/logo_white.png"
      @click="navigateToHome"
      class="clickable-item"
    />
    <h2 class="ml-2 clickable-item" @click="navigateToHome"></h2>

    <v-spacer></v-spacer>
    
    <!-- Theme Switching Menu -->
    <v-menu top>
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          icon="mdi-palette"
          variant="text"
          v-tooltip:top="'Change Theme'"
        ></v-btn>
      </template>

      <v-list>
        <v-list-item @click="themeStore.setTheme('originalLight')">
          <v-list-item-title>Original Light</v-list-item-title>
        </v-list-item>
        <v-list-item @click="themeStore.setTheme('originalDark')">
          <v-list-item-title>Original Dark</v-list-item-title>
        </v-list-item>
        <v-list-item @click="themeStore.setTheme('minorityReport')">
          <v-list-item-title>Minority Report</v-list-item-title>
        </v-list-item>
        <v-list-item @click="themeStore.setTheme('westworld')">
          <v-list-item-title>Westworld</v-list-item-title>
        </v-list-item>
        <v-list-item @click="themeStore.setTheme('foundation')">
          <v-list-item-title>Foundation</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- Other existing buttons -->
    <template v-if="$vuetify.display.smAndUp">
      <v-btn variant="text" icon>
        <v-badge
          color="primary"
          content="7"
          max="99"
        >
          <v-icon icon="mdi-bell"></v-icon>
        </v-badge>
      </v-btn>

      <v-btn icon="mdi-cloud" variant="text"></v-btn>
    </template>

    <template v-else>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
        </template>
        <div class="d-flex flex-column">
          <v-btn 
            variant="flat" 
            class="app-bar-menu-item menu-btn"
            color="overlay-items"
            icon>
            <v-badge
              color="primary"
              content="7"
              max="99"
            >
              <v-icon icon="mdi-bell"></v-icon>
            </v-badge>
          </v-btn>

          <v-btn 
            icon="mdi-cloud"
            class="app-bar-menu-item menu-btn" 
            variant="flat"
            color="overlay-items"></v-btn>
        </div>
      </v-menu>
    </template>
  </v-footer>
</template>

<style scoped>
.custom-footer {
  position: fixed;
  bottom: 0;
  border-top: 1px solid rgba(113 119 144 / 25%);  
  border-left: 1px solid rgba(113 119 144 / 25%);  
  border-right: 1px solid rgba(113 119 144 / 25%);
  border-top-left-radius: 50px !important;
  border-top-right-radius: 50px !import;
  padding-top: 15px;
  width: 98vw;
  left: 1vw;
}

.clickable-item {
  cursor: pointer;
}

.app-bar-menu-item {
  margin: 8px 0px  !important;
}

.menu-btn {
  border: 1px solid rgb(var(--v-theme-surface))
}
</style>