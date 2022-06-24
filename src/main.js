import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
const app = createApp(App);

library.add(faInstagram, faFacebook);

app.use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
