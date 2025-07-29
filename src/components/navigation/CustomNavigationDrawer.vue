<script setup>
import { useNavigationStore } from '/src/stores/navigation'
import { storeToRefs } from 'pinia'

import NavHeader from './NavHeader.vue'
import NavLink from './NavLink.vue'

import { useDisplay } from 'vuetify'

const display = useDisplay()

const navigationStore = useNavigationStore()
const { drawer, navigationItems } = storeToRefs(navigationStore)

const components = {
  NavHeader,
  NavLink
}

const itemType = function (item) {
  return item.header ? 'NavHeader' : 'NavLink'
}

watch(
  () => display.lgAndUp.value,
  (isMdAndUp) => {
    if (isMdAndUp) {
      drawer.value = true
    }
  },
  { immediate: true }
)
</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    class="custom-drawer" 
    color="transparent" 
    :style="{ top: 64 + 'px' }"
    :permanent="$vuetify.display.mdAndUp">
    
      <v-list>
        <component :is="components[itemType(item)]"
          v-for="item in navigationItems"
          :key="item.id"
          :item="item"/>
      </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.custom-drawer {
  border-right: 1px solid rgba(113 119 144 / 25%);
}

</style>