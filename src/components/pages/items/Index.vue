<template>
    <div class="grid-x">
        <div class="medium-offset-2 medium-8">
            <div class="callout main-callout">
                <quick-links :components="[{'name': 'CreateItem', 'caption': 'Add Item'}]"></quick-links>

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
                            <button type="button" class="button tiny action-btn" @click="showModal(item)">
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
                    <div id="cartModal" class="reveal small" data-reveal>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import QuickLinks from '../../QuickLinks.vue';

    export default {
        name: 'Items',

        components: {QuickLinks},

        computed: {
            ...mapState(['items']),
        },

        data() {
            return {
                availableStock: 0,
                toAdd: '',
                empty: false,
                exceeds: false,
                currentItem: null
            }
        },

        mounted() {
            this.cartModal = new Foundation.Reveal($('#cartModal'));
        },

        created() {
            this.cartModal = new Foundation.Reveal($('#cartModal'));
        },

        destroyed() {
            this.cartModal.destroy();
        },

        watch: {
            toAdd: function (newValue) {
                newValue > this.availableStock ? (this.exceeds = true) : (this.exceeds = false);
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
                        this.addItemToCart({
                            item: this.currentItem,
                            qty: this.toAdd
                        });

                        this.closeModal();
                    }
                }
            },

            showModal(item) {
                let modal = $('#cartModal');

                this.currentItem = item;
                this.availableStock = item.stock;

                modal.foundation('open');
            },

            closeModal() {
                $('#cartModal').foundation('close');
            }
        }
    }
</script>
