<script setup>
import { useNavigationStore } from '/src/stores/navigation'
import { storeToRefs } from 'pinia'
import { ref, watch, onMounted, onUnmounted, computed } from 'vue'
import { useDisplay } from 'vuetify'

import NavHeader from './NavHeader.vue'
import NavLink from './NavLink.vue'

const emit = defineEmits(['update:collapsed'])

const display = useDisplay()
const navigationStore = useNavigationStore()
const { drawer, navigationItems } = storeToRefs(navigationStore)

const isCollapsed = ref(false)
let collapseTimer = null
const collapseDelay = 3000

const startCollapseTimer = () => {
  clearCollapseTimer()
  collapseTimer = setTimeout(() => {
    isCollapsed.value = true
  }, collapseDelay)
}

const clearCollapseTimer = () => {
  if (collapseTimer) {
    clearTimeout(collapseTimer)
    collapseTimer = null
  }
}

const expandDrawer = () => {
  clearCollapseTimer()
  isCollapsed.value = false
}

const collapseDrawer = () => {
  if (display.lgAndUp.value) {
    startCollapseTimer()
  }
}

watch(isCollapsed, (newValue) => {
  emit('update:collapsed', newValue)
})

watch(
  () => display.lgAndUp.value,
  (isLgAndUp) => {
    if (isLgAndUp) {
      drawer.value = true
      startCollapseTimer()
    } else {
      drawer.value = false
      clearCollapseTimer()
      isCollapsed.value = false
    }
  },
  { immediate: true }
)

watch(drawer, (isOpen) => {
  if (isOpen && display.lgAndUp.value) {
    startCollapseTimer()
  } else {
    clearCollapseTimer()
    isCollapsed.value = false
  }
})

onMounted(() => {
  if (display.lgAndUp.value) {
    startCollapseTimer()
  }
  emit('update:collapsed', isCollapsed.value)
})

onUnmounted(() => {
  clearCollapseTimer()
})

const isOverlayActive = computed(() => {
  return !isCollapsed.value && display.lgAndUp.value;
});

</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    class="custom-drawer"
    :class="{ 'is-expanded-overlay': isOverlayActive }"
    color="transparent"
    
    :rail="isCollapsed && $vuetify.display.lgAndUp"
    @mouseenter="expandDrawer"
    @mouseleave="collapseDrawer"
  >
    <v-list>
      <component
        :is="item.header ? NavHeader : NavLink"
        v-for="item in navigationItems"
        :key="item.id"
        :item="item"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.custom-drawer {
  height: 88vh !important;
  top: 2.5vh !important;
  left: 1vw !important;
  border-radius: 50px !important;

  border-right: 1px solid rgba(113, 119, 144, 0.25);
  transition: width 0.3s ease, transform 0.3s ease;
}

/* --- Overlay Styles for Expanded Drawer --- */
.custom-drawer.is-expanded-overlay {
  position: absolute !important;
  left: 0;
  z-index: 1000;
  height: 100vh;
  width: 256px;
  
  /* Solid background for original themes */
  background-color: rgb(var(--v-theme-surface));
}

/* Consolidated Minority Report Styles for Expanded Drawer */
.custom-drawer.is-expanded-overlay {
  border-color: rgba(255, 255, 255, 0.2) !important;
  background-color: rgba(255, 255, 255, 0.08) !important;
  backdrop-filter: blur(40px);
}
</style>
