import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/pages/Home.vue'
import Categories from '../components/pages/categories/Index.vue'
import Items from '../components/pages/items/Index.vue'
import CreateCategory from '../components/pages/categories/Create.vue'
import CreateItem from '../components/pages/items/Create.vue'
import EditCategory from '../components/pages/categories/Edit.vue'
import EditItem from '../components/pages/items/Edit.vue'

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
        },
        {
            path: '/items/create',
            name: 'CreateItem',
            component: CreateItem
        },
        {
            path: '/categories/:category/edit',
            name: 'EditCategory',
            component: EditCategory
        },
        {
            path: '/items/:item/edit',
            name: 'EditItem',
            component: EditItem
        },
    ]
})
