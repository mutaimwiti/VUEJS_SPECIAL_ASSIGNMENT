import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './foundation';
import './assets/sass/app.scss';

new Vue ({
    store: store,
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});