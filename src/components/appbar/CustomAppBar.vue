<script setup>
import { useNavigationStore } from '/src/stores/navigation'
import { useTheme } from 'vuetify'

const router = useRouter()

const navigationStore = useNavigationStore()
const { toggleDrawer } = navigationStore

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  localStorage.setItem('theme', theme.global.name.value)
}

const navigateToHome = () => {
  router.push({ name: 'home' })
}
</script>

<template>
  <v-app-bar
      class="custom-app-bar"
      color="transparent"
      prominent
      >
        <v-app-bar-nav-icon 
          variant="text" 
          @click.stop="toggleDrawer()"
          v-if="$vuetify.display.mdAndDown"></v-app-bar-nav-icon>

        <div :class="$vuetify.display.mdAndDown?'':'ml-5'"></div>

        <img
          height="50"
          cover
          src="@/assets/logo.svg"
          @click="navigateToHome"
          class="clickable-item"
        />
        <h2 class="ml-2 clickable-item" @click="navigateToHome">Dashboard</h2>

      <v-spacer></v-spacer>

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

        <v-btn 
          :icon="theme.global.current.value.dark ? 
            'mdi-weather-night' : 'mdi-weather-sunny'" 
          variant="text" 
          :color="theme.global.current.value.dark ? 
            'yellow' : 'black'"
          v-tooltip:bottom="theme.global.current.value.dark ? 
            'Switch to light theme' : 'Switch to dark theme'"
          @click.stop="toggleTheme()"></v-btn>
      </template>

      <template v-else>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
          </template>
          <div class="d-flex flex-column">
            <v-btn 
              content="150"
              max="99"
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

            <v-btn 
              class="app-bar-menu-item menu-btn"
              icon
              variant="flat" 
              color="overlay-items"
              v-tooltip:bottom="theme.global.current.value.dark ?
                'Switch to light theme' : 'Switch to dark theme'"
              @click.stop="toggleTheme()">
              <v-icon           
                :color="theme.global.current.value.dark ?
                  'yellow' : 'black'"
                :icon="theme.global.current.value.dark ?
                  'mdi-weather-night' : 'mdi-weather-sunny'"
              ></v-icon>
            </v-btn>
          </div>
        </v-menu>
      </template>
    </v-app-bar>
</template>

<style scoped>
.custom-app-bar {
  border-bottom: 1px solid rgba(113 119 144 / 25%);
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