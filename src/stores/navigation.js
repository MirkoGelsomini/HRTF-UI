import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {
  state: () => {
    return {
      drawer: true,
      navigationItems: [
        { header: true, title: 'Home',},
        { title: 'Dashboard', icon: 'mdi-view-dashboard', route: 'home' },
        { title: 'My profile', icon: 'mdi-account', route: 'about' },
        { title: 'Scans', icon: 'mdi-account', route: 'scans', tag: 9 },
      ],
    }
  },

  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
  },
})
