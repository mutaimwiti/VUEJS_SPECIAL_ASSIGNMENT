<template>
    <div>
        <div class="grid-x">
            <div class="medium-offset-3 medium-6">
                <div class="callout main-callout">
                    <alert message="Item created" v-on:close="success = false" v-show="success"></alert>
                    <form>
                        <div class="grid-container">
                            <div class="grid-x grid-padding-x">
                                <div class="grid-x grid-padding-x">
                                    <div class="medium-4 cell">
                                        <label for="name" class="text-right middle">Name</label>
                                    </div>
                                    <div class="medium-8 cell">
                                        <input id="name" type="text" v-model="itemName"
                                               @focus="toggleNameWarnings(); toggleCategoryNull()"
                                               autofocus>
                                        <div data-abide-error class="alert callout" v-show="errors.nameEmpty">
                                            <span>The name cannot be empty!</span>
                                        </div>
                                        <div data-abide-error class="alert callout" v-show="errors.itemExists">
                                            <span>The item already exists in the {{ itemCategory }} category!</span>
                                        </div>
                                    </div>

                                    <div class="medium-4 cell">
                                        <label for="category" class="text-right middle">Category</label>
                                    </div>
                                    <div class="medium-8 cell">
                                        <select id="category" v-model="itemCategory" @change="toggleCategoryNull">
                                            <option v-for="category in categories" :value=category.name>
                                                {{ category.name }}
                                            </option>
                                        </select>
                                        <div data-abide-error class="alert callout" v-show="errors.categoryNull">
                                            <span>A category must be selected!</span>
                                        </div>
                                    </div>

                                    <div class="medium-4 cell">
                                        <label for="stock" class="text-right middle">Stock</label>
                                    </div>
                                    <div class="medium-8 cell">
                                        <input id="stock" type="number" min="0" step="any" v-model="itemStock"
                                               @focus="toggleStockEmpty()"
                                               autofocus>
                                        <div data-abide-error class="alert callout" v-show="errors.stockEmpty">
                                            <span>The stock cannot be empty!</span>
                                        </div>
                                    </div>

                                    <div class="medium-4 cell">
                                        <label for="description" class="text-right middle">Units</label>
                                    </div>
                                    <div class="medium-8 cell">
                                        <textarea id="description" v-model="itemUnits"
                                                  @focus="toggleUnitsEmpty"></textarea>
                                        <div data-abide-error class="alert callout" v-show="errors.unitsEmpty">
                                            <span>The units cannot be empty!</span>
                                        </div>
                                    </div>

                                    <div class="medium-12 cell">
                                        <div class="float-right">
                                            <router-link :to="{ name: 'Items' }" class="button">All</router-link>
                                            <input type="button" @click="clear" value="Clear" class="button warning">
                                            <input type="button" @click="add" value="Add item" class="button">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mixin from '../../../mixins/itemForm'
    import {mapActions} from 'vuex'
    import Alert from '../../Alert.vue'

    export default {
        mixins: [mixin],

        name: 'CreateItem',

        data() {
            return {
                itemName: '',
                itemCategory: null,
                itemStock: '',
                itemUnits: '',
                errors: {
                    nameEmpty: false,
                    categoryNull: false,
                    stockEmpty: false,
                    unitsEmpty: false,
                    itemExists: false,
                },
                success: false
            }
        },

        methods: {
            ...mapActions(['createItem']),

            exists() {
                let exists = this.items.filter((item) => {
                    return item.category === this.itemCategory && item.name === this.itemName;
                }).length;

                if (exists > 0) {
                    this.errors.itemExists = true;
                    return true;
                }
                else {
                    return false;
                }
            },

            add() {
                this.success = false;
                let exists = this.exists();
                let anyEmpty = this.anyFieldsEmpty();

                if (!exists && !anyEmpty) {
                    this.createItem({
                        name: this.itemName,
                        category: this.itemCategory,
                        stock: this.itemStock,
                        units: this.itemUnits
                    });

                    this.itemName = '';
                    this.itemCategory = null;
                    this.itemStock = '';
                    this.itemUnits = '';

                    this.success = true;
                }
            },

            clear() {
                this.itemName = '';
                this.itemCategory = null;
                this.itemStock = '';
                this.itemUnits = '';

                this.toggleNameWarnings();
                this.toggleCategoryNull();
                this.toggleStockEmpty();
                this.toggleUnitsEmpty();
            }
        }
    }
</script>
