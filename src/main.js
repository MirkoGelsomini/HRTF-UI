import './assets/main.css';
import './assets/themes/foundation.css';
import './assets/themes/minority.css';
import './assets/themes/westworld.css';
import './assets/themes/original.css';
import './assets/themes/foundation-gold.css';

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
import { originalLight, originalDark, minorityReport, westworld, foundation, foundationGold } from './styles/vuetifyStyle';

const app = createApp(App);

app.use(createPinia());
app.use(router);

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'foundation', 
    themes: {
      originalLight,
      originalDark,
      minorityReport,
      westworld,
      foundation,
      foundationGold,
    },
  },
  icons: {
    defaultSet: 'mdi',
  },
});
app.use(vuetify);

app.mount('#app');
