<template>
    <div id="app">
        <div class="top-bar">
            <div class="top-bar-left">
                <ul id="dropdown-menu" class="dropdown menu" data-dropdown-menu>
                    <li class="menu-text">Store manager</li>
                    <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
                    <li>
                        <a>Categories</a>
                        <ul class="menu">
                            <li><router-link :to="{ name: 'Categories' }">Categories</router-link></li>
                            <li><router-link :to="{ name: 'CreateCategory' }">Create category</router-link></li>
                        </ul>
                    </li>
                    <li>
                        <a>Items</a>
                        <ul class="menu">
                            <li><router-link :to="{ name: 'Items' }">Items</router-link></li>
                        </ul>
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
        name: 'app',

        mounted() {
            this.dropdownMenu = new Foundation.DropdownMenu($('#dropdown-menu'), {
                // These options can be declarative using the data attributes
                hoverDelay: 300,
            });
        },

        destroyed() {
            this.dropdownMenu.destroy();
        }

    }
</script>
