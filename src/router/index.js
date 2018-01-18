import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/pages/Home.vue'
import Categories from '../components/pages/categories/Index.vue'
import Items from '../components/pages/items/Index.vue'
import CreateCategory from '../components/pages/categories/Create.vue'

Vue.use(Router);

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
        },
        {
            path: '/items',
            name: 'Items',
            component: Items
        },
        {
            path: '/categories/create',
            name: 'CreateCategory',
            component: CreateCategory
        }
    ]
})
