import '../src/assets/css/styles.scss';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVueReCaptcha } from 'vue-recaptcha-v3';

const app = createApp(App);

app.use(router);

app.use(createVueReCaptcha({
    siteKey: '6LcBGFgqAAAAAByjRU_60UbV6VuQcxD4_oOS2iNE'  // Replace with your site key
  }));

app.mount('#app');
