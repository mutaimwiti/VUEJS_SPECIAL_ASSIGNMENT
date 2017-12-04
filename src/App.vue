<template>
    <div id="app">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Categories' }">Categories</router-link>
        <router-link :to="{ name: 'CreateCategory' }">Create category</router-link>
        <router-link :to="{ name: 'Items' }">Items</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>