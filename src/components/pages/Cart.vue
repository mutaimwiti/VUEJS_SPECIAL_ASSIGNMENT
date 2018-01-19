<template>
    <div class="grid-x">
        <div class="medium-offset-2 medium-8">
            <div class="callout main-callout">
                <alert message="Checkout successful" color="success"  not-dismissible="true"
                       v-show="success"></alert>
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

                <div class="grid-x">
                    <div class="medium-12 ">
                        <div class="pull-right">
                            <button type="button" class="button" v-if="cart.length" @click="checkout">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Alert from '../Alert.vue';
    import {mapActions, mapState} from 'vuex'
    import QuickLinks from '../QuickLinks.vue';

    export default {
        components: {QuickLinks, Alert},

        data() {
            return {
                success: false
            }
        },

        computed: {
            ...mapState(['cart', 'items']),
        },

        methods: {
            ...mapActions(['removeItemFromCart', 'checkoutCart']),

            checkout() {
                this.checkoutCart();

                this.success = true;

                setTimeout(this.hideMessage, 1200);
            },

            hideMessage() {
                this.success = false;
            }
        }
    }
</script>