import { defineStore } from 'pinia';
import { useTheme } from 'vuetify';
import { ref, computed } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const vuetifyTheme = useTheme();

  const currentThemeName = ref('originalLight');
  const backgroundStyle = ref('animated'); // New state for background style: 'none', 'static', 'animated'

  function setTheme(themeName) {
    currentThemeName.value = themeName;
    vuetifyTheme.global.name.value = themeName;
    localStorage.setItem('theme', themeName);
  }

  function setBackgroundStyle(style) {
    backgroundStyle.value = style;
    localStorage.setItem('backgroundStyle', style); // Save background style choice
  }

  const themeCssClass = computed(() => {
    let themeClass = 'theme-original'; // Default theme class for originalLight/originalDark

    if (currentThemeName.value === 'minorityReport') {
      themeClass = 'theme-minority';
    } else if (currentThemeName.value === 'westworld') {
      themeClass = 'theme-westworld';
    }

    // Handle background style independently
    if (backgroundStyle.value === 'none') {
      themeClass += ' bg-none'; // Add new class to remove background
    } else if (backgroundStyle.value === 'animated') {
      if (currentThemeName.value === 'minorityReport') {
        themeClass += ' bg-animated-minority';
      } else if (currentThemeName.value === 'westworld') {
        themeClass += ' bg-animated-westworld';
      } else if (currentThemeName.value === 'originalDark') {
        themeClass += ' bg-animated-original-dark';
      }
      // originalLight by default has static, so no animated class for it here
    }
    // If backgroundStyle is 'static', no additional class is added here.
    // The default `body` background-color in main.css will provide the static color.

    return themeClass;
  });

  function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const savedBackgroundStyle = localStorage.getItem('backgroundStyle');

    if (savedTheme && ['originalLight', 'originalDark', 'minorityReport', 'westworld'].includes(savedTheme)) {
      setTheme(savedTheme);
    } else {
      setTheme('originalLight');
    }

    if (savedBackgroundStyle && ['none', 'static', 'animated'].includes(savedBackgroundStyle)) {
      setBackgroundStyle(savedBackgroundStyle);
    } else {
      setBackgroundStyle('animated'); // Default to animated for a dynamic start
    }
  }

  return { currentThemeName, backgroundStyle, setTheme, setBackgroundStyle, themeCssClass, initTheme };
});
