// src/stores/foundationGoldTheme.js
import { ref } from 'vue';

export const useFoundationGoldTheme = ref({
  dark: true,
  colors: {
    background: '#000000',
    surface: '#141416',
    primary: '#00E5FF',
    'primary-darken-1': '#00B8CC',
    secondary: '#E0E0E0',
    'secondary-darken-1': '#BDBDBD',
    error: '#CF6679',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
});
