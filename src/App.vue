<script setup>
import CustomAppBar from './components/appbar/CustomAppBar.vue'
import CustomNavigationDrawer from './components/navigation/CustomNavigationDrawer.vue'

import { useTheme } from 'vuetify'

const theme = useTheme()

onMounted(() => {
  // retrieve saved theme from local storage
  const storageTheme = localStorage.getItem('theme')
  if (storageTheme) {
    theme.global.name.value = storageTheme
  }
})
</script>

<template>
  <v-app>
    <v-card class="app-container-card border-0 elevation-0" color="transparent">
      <v-layout class="h-100">
        <CustomAppBar />
        <CustomNavigationDrawer />

        <v-main :style="{ paddingTop: 64 + 'px' }">
          <v-container fluid class="pa-10 h-100 w-100 overflow-y-auto custom-container">
            <RouterView />
          </v-container>
        </v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>


<style scoped>
.custom-container {
  background-color: rgba(var(--v-theme-theme-bg), var(--v-theme-bg-alpha));
}
</style>
