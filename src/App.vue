<template>
    <div id="app">
        <div class="top-bar sticky sticky-topbar" id="app-vav" data-animate="hinge-in-from-top spin-out">
            <div class="top-bar-left">
                <ul id="dropdown-menu" class="dropdown menu" data-dropdown-menu>
                    <li class="menu-text" id="app-name">
                        <a>Store manager</a>
                    </li>
                    <li>
                        <a>Items</a>
                        <ul class="menu">
                            <li><router-link :to="{ name: 'Items' }">All</router-link></li>
                            <li><router-link :to="{ name: 'CreateItem' }">Add</router-link></li>
                        </ul>
                    </li>
                    <li>
                        <a>Categories</a>
                        <ul class="menu">
                            <li><router-link :to="{ name: 'Categories' }">All</router-link></li>
                            <li><router-link :to="{ name: 'CreateCategory' }">Add</router-link></li>
                        </ul>
                    </li>
                    <li>
                        <a>Cart {{ cart.length ? '( ' + cart.length + ' )': '' }}</a>
                        <ul class="menu">
                            <li><router-link :to="{ name: 'Categories' }">View</router-link></li>
                            <li><a @click="clearCart">Clear</a></li>
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
        <div class="grid-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'

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
        },

        computed: {
            ...mapState(['cart']),
        },

        methods: {
            ...mapActions(['clearCart'])
        }
    }
</script>
