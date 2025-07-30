<script setup>
import { useThemeStore } from './stores/theme';
import CustomFooter from './components/footer/CustomFooter.vue';
import CustomNavigationDrawer from './components/navigation/CustomNavigationDrawer.vue';
import { onMounted, ref, watch, computed } from 'vue';
import { useDisplay } from 'vuetify';

const themeStore = useThemeStore();
const display = useDisplay();
const isDrawerCollapsed = ref(true);

// Watch for changes in the themeCssClass and apply to document.body
watch(
  () => themeStore.themeCssClass,
  (newClass) => {
    document.body.className = newClass;
  },
  { immediate: true } // Apply immediately on component mount
);

onMounted(() => {
  themeStore.initTheme();
});

const updateDrawerCollapsed = (collapsed) => {
  isDrawerCollapsed.value = collapsed;
};


</script>

<template>
  <v-app>
    <v-card class="app-container-card border-0 elevation-0" color="transparent">
      <CustomNavigationDrawer @update:collapsed="updateDrawerCollapsed" />
        
      <v-layout class="h-100 custom-layout">
        <v-main>
          <v-container fluid class="pa-5 h-100 w-100 overflow-y-auto custom-container">
            <RouterView />
          </v-container>
        </v-main>
      </v-layout>
    </v-card>
    <CustomFooter />
  </v-app>
</template>

<style scoped>
/* Removed .custom-layout specific styles as they will now be handled by --v-layout-left */
.custom-layout {
  width: 94vw !important;
  left: 4vw;

}
</style>