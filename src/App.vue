<template>
    <div id="app">
        <div class="top-bar">
            <div class="top-bar-left">
                <ul class="dropdown menu" data-dropdown-menu>
                    <li class="menu-text">Store manager</li>
                    <li>
                        <router-link :to="{ name: 'Home' }">Home</router-link>
                    </li>
                    <li>
                        <ul class="menu vertical">
                            <li>
                                <router-link :to="{ name: 'Categories' }">Categories</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'CreateCategory' }">Create category</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Items' }">Items</router-link>
                    </li>
                </ul>
            </div>
            <div class="top-bar-right">
                <ul class="menu">
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>