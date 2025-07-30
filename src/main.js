import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
// Import all themes
import { originalLight, originalDark, minorityReport, westworld } from './styles/vuetifyStyle';

const app = createApp(App);

app.use(createPinia());
app.use(router);

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'originalLight', 
    themes: {
      originalLight,
      originalDark,
      minorityReport,
      westworld, // Register the new theme
    },
  },
  icons: {
    defaultSet: 'mdi',
  },
});
app.use(vuetify);

app.mount('#app');
