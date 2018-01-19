<template>
    <div class="grid-x">
        <div class="medium-offset-2 medium-8">
            <div class="callout main-callout">
                <quick-links
                        :components="[
                            {'name': 'Cart', 'caption': 'View cart', 'hidden': (cart.length < 1)},
                            {'name': 'CreateItem', 'caption': 'Add Item'}]">
                </quick-links>

                <table class="table hover">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Stock</th>
                        <th>Units</th>
                        <th colspan="3">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in items">
                        <td>{{ items.indexOf(item) + 1 }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.category }}</td>
                        <td>{{ item.stock }}</td>
                        <td>{{ item.units }}</td>
                        <td>
                            <button type="button" class="button tiny action-btn" @click="showAddToCartModal(item)">
                                Add to cart
                            </button>
                        </td>
                        <td>
                            <router-link :to="{ name: 'EditItem', params: { item: item.name } }"
                                         class="button tiny action-btn">Edit
                            </router-link>
                        </td>
                        <td>
                            <button type="button" class="button tiny action-btn" @click="remove(item)">Remove
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div>
                    <div id="cartModal" class="reveal small">
                        <h5><b>Add to cart</b></h5>

                        <form>
                            <div class="grid-container">
                                <div class="grid-x grid-padding-x">
                                    <div class="medium-4 cell">
                                        <label for="available" class="text-right middle">Available stock</label>
                                    </div>
                                    <div class="medium-8 cell">
                                        <input id="available" type="number" disabled v-model="availableStock">
                                    </div>

                                    <div class="medium-4 cell">
                                        <label for="name" class="text-right middle">Quantity to add</label>
                                    </div>
                                    <div class="medium-8 cell">
                                        <input id="name" type="number" min="0" step="any" v-model="toAdd"
                                               @focus="empty = false" autofocus>
                                        <div data-abide-error class="alert callout" v-show="empty">
                                            <span>The stock cannot be empty!</span>
                                        </div>
                                        <div data-abide-error class="alert callout" v-show="exceeds">
                                            <span>Quantity to add exceeds the available stock!</span>
                                        </div>
                                        <div data-abide-error class="alert callout" v-show="zero">
                                            <span>Quantity to add cannot be zero!</span>
                                        </div>
                                    </div>
                                    <div class="medium-12 cell">
                                        <div class="float-right">
                                            <input type="button" @click="toAdd = ''" value="Clear"
                                                   class="button warning">
                                            <input type="button" @click="addToCart" value="Add" class="button">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <button class="close-button" data-close aria-label="Close modal" type="button">
                            <span @click="closeModal()">&times;</span>
                        </button>
                    </div>

                    <div id="inCartModal" class="reveal small alert" data-reveal>
                        <alert message="The item already exists in the cart!" color="alert"
                               not-dismissible="true"></alert>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import QuickLinks from '../../QuickLinks.vue';
    import Alert from '../../Alert.vue';

    export default {
        name: 'Items',

        components: {QuickLinks, Alert},

        computed: {
            ...mapState(['items', 'cart']),
        },

        data() {
            return {
                toAdd: '',
                zero: false,
                empty: false,
                exceeds: false,
                currentItem: null,
                availableStock: 0
            }
        },

        mounted() {
            this.cartModal = new Foundation.Reveal($('#cartModal'));
            this.inCartModal = new Foundation.Reveal($('#inCartModal'));
        },

        created() {
            this.cartModal = new Foundation.Reveal($('#cartModal'));
            this.inCartModal = new Foundation.Reveal($('#inCartModal'));
        },

        destroyed() {
            this.cartModal.destroy();
            this.inCartModal.destroy();
        },

        watch: {
            toAdd: function (newValue) {
                this.checkZero();
                this.checkExceeds(newValue);
            }
        },

        methods: {
            ...mapActions(['removeItem', 'addItemToCart']),

            remove(item) {
                this.removeItem(item);
            },

            addToCart() {
                if (!this.exceeds) {
                    if (this.toAdd === '') {
                        this.empty = true
                    } else {
                        this.empty = false;

                        if (this.checkZero() || this.checkExceeds(this.toAdd) ) {
                            return;
                        }

                        this.addItemToCart({
                            item: this.getIndexOfItem(this.currentItem),
                            qty: this.toAdd
                        });

                        this.closeModal();
                    }
                }
            },

            cartHasItem(itemIndex) {
                return this.cart.filter((itm) => {
                    return itm.item === itemIndex;
                }).length;
            },

            getIndexOfItem(item) {
                return this.items.indexOf(item)
            },

            checkExceeds(toAdd) {
                toAdd > this.availableStock ? this.exceeds = true: this.exceeds = false;

                return this.exceeds;
            },

            checkZero() {
                this.zero = (this.toAdd === '0');

                return this.zero;
            },

            showAddToCartModal(item) {
                if (this.cartHasItem(this.getIndexOfItem(item))) {
                    this.showItemExistsModal();
                } else {
                    this.cartModal.open();
                    this.currentItem = item;
                    this.availableStock = item.stock;
                    this.toAdd = '';
                }
            },

            showItemExistsModal() {
                this.inCartModal.open();

                let modal = this.inCartModal;

                setTimeout(function () {
                    modal.close();
                }, 2000, modal);
            },

            closeModal() {
                this.cartModal.close();
            }
        }
    }
</script>
