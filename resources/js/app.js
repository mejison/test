require('./bootstrap');

window.Vue = require('vue');

import store from './store';
import router from './router';

import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'
Vue.use(VueToast)


import './plugins/validate.js';

import { ValidationProvider, ValidationObserver } from 'vee-validate';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

const app = new Vue({
    store,
    router,
    el: '#app',
});

export default app