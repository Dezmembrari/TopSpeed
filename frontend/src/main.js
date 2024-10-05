import '../src/assets/css/styles.scss';
import { createApp } from 'vue';
import { VueReCaptcha } from 'vue-recaptcha-v3';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.use(VueReCaptcha, {
    siteKey: '6LcBGFgqAAAAAByjRU_60UbV6VuQcxD4_oOS2iNE',
    loaderOptions: {
        useEnterprise: false,
        autoHideBadge: true,
    }
});

app.mount('#app');