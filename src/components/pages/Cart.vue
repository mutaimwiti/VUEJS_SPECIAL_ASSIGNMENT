<template>
    <div class="grid-x">
        <div class="medium-offset-2 medium-8">
            <div class="callout main-callout">
                <quick-links :components="[{'name': 'Items', 'caption': 'Go to items'}]"></quick-links>

                <table class="table hover">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Units</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in cart">
                        <td>{{ cart.indexOf(item) + 1 }}</td>
                        <td>{{ items[item.item].name }}</td>
                        <td>{{ item.qty }}</td>
                        <td>{{ items[item.item].units }}</td>
                        <td>
                            <button type="button" class="button tiny action-btn" @click="removeItemFromCart(item)">
                                Remove
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    import QuickLinks from '../QuickLinks.vue';

    export default {
        components: { QuickLinks },

        data() {
            return {}
        },

        computed: {
            ...mapState(['cart', 'items']),
        },

        methods: {
            ...mapActions(['removeItemFromCart'])
        }
    }
</script>