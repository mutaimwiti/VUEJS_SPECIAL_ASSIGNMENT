import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

new Vue ({
    store: store,
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});