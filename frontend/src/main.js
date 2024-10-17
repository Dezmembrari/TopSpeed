import '../src/assets/css/styles.scss';
import { createApp } from 'vue';
import { VueReCaptcha } from 'vue-recaptcha-v3';
import App from './App.vue';
import router from './router';
// Import the FontAwesome core
import { library } from '@fortawesome/fontawesome-svg-core';
// Import specific icon sets (solid, regular, brands)
import { faBars } from '@fortawesome/free-solid-svg-icons';
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';



// Add the imported icons to the library
library.add(faBars);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

app.use(VueReCaptcha, {
    siteKey: '6LcBGFgqAAAAAByjRU_60UbV6VuQcxD4_oOS2iNE',
    loaderOptions: {
        useEnterprise: false,
        autoHideBadge: true,
    }
});

app.mount('#app');