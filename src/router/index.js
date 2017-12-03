import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/pages/Home.vue'
import Categories from '../components/pages/Categories.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/categories',
            name: 'Categories',
            component: Categories
        }
    ]
})
