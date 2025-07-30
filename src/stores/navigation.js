import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {
  state: () => {
    return {
      drawer: true,
      navigationItems: [
        { header: true, title: '' },
        { title: 'Dashboard', icon: 'mdi-view-dashboard', route: 'home' },
        { title: 'My profile', icon: 'mdi-account', route: 'about' },
        { title: 'Scans', icon: 'mdi-face-recognition', route: 'scans' },
        { title: 'Pointclouds', icon: 'mdi-dots-hexagon', route: 'pointclouds' },
        { title: 'Meshes', icon: 'mdi-cube', route: 'meshes' },
        { title: 'Raw data', icon: 'mdi-file', route: 'raw-data' },
        { title: 'Alignments', icon: 'mdi-chart-box-outline', route: 'alignments' },
        { title: 'Measures', icon: 'mdi-chart-scatter-plot', route: 'measures' },
        { title: 'HRTF', icon: 'mdi-ear-hearing', route: 'hrtf' },
        { title: 'Editor', icon: 'mdi-view-dashboard-edit', route: 'editor' },
        { title: 'Profile', icon: 'mdi-account', route: 'profile' },
        { title: 'Logout', icon: 'mdi-logout', route: 'logout' },
        { title: 'Import', icon: 'mdi-plus-circle-outline', route: 'import' },
        { title: 'Processing', icon: 'mdi-wrench', route: 'processing' },
      ],
    }
  },

  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
  },
})
