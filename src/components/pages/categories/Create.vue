<template>
    <div>
        <div class="grid-x">
            <div class="medium-offset-3 medium-6">
                <div class="callout main-callout">
                    <alert message="Category created" v-on:close="success = false" v-show="success"></alert>
                    <form>
                        <div class="grid-container">
                            <div class="grid-x grid-padding-x">
                                <div class="grid-x grid-padding-x">
                                    <div class="medium-4 cell">
                                        <label for="name" class="text-right middle">Name</label>
                                    </div>
                                    <div class="medium-8 cell">
                                        <input id="name" type="text" v-model="catName" @focus="toggleNameWarnings"
                                               autofocus>
                                        <div data-abide-error class="alert callout" v-show="errors.nameEmpty">
                                            <span>The name cannot be empty!</span>
                                        </div>
                                        <div data-abide-error class="alert callout" v-show="errors.itemExists">
                                            <span>The category already exists!</span>
                                        </div>
                                    </div>

                                    <div class="medium-4 cell">
                                        <label for="description" class="text-right middle">Description</label>
                                    </div>
                                    <div class="medium-8 cell">
                                        <textarea id="description" v-model="catDescription"
                                                  @focus="toggleDescriptionEmpty"></textarea>
                                        <div data-abide-error class="alert callout" v-show="errors.descriptionEmpty">
                                            <span>The description cannot be empty!</span>
                                        </div>
                                    </div>

                                    <div class="medium-12 cell">
                                        <div class="float-right">
                                            <router-link :to="{ name: 'Categories' }" class="button">All</router-link>
                                            <input type="button" @click="clear" value="Clear" class="button warning">
                                            <input type="button" @click="add" value="Add category" class="button">
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
    import {mapState, mapActions} from 'vuex'
    import Alert from '../../Alert.vue'

    export default {
        components: {
            Alert
        },

        name: 'CreateCategory',

        data() {
            return {
                catName: '',
                catDescription: '',
                errors: {
                    nameEmpty: false,
                    descriptionEmpty: false,
                    itemExists: false,
                },
                success: false
            }
        },

        methods: {
            ...mapState(['categories']),

            ...mapActions(['createCategory']),

            exists() {
                let exists = this.categories().filter((category) => {
                    return category.name === this.catName;
                }).length;
                if (exists > 0) {
                    this.errors.itemExists = true;
                    return true;
                }
                else {
                    return false;
                }
            },

            anyFieldsEmpty() {
                let anyEmpty = false;
                if (this.catName.length < 1) {
                    this.errors.nameEmpty = true;
                    anyEmpty = true;
                }
                if (this.catDescription.length < 1) {
                    this.errors.descriptionEmpty = true;
                    anyEmpty = true;
                }
                return anyEmpty;
            },

            toggleNameWarnings() {
                this.errors.nameEmpty = false;
                this.errors.itemExists = false;
            },

            toggleDescriptionEmpty() {
                this.errors.descriptionEmpty = false;
            },

            add() {
                this.success = false;
                let exists = this.exists();
                let anyEmpty = this.anyFieldsEmpty();
                if (!exists && !anyEmpty) {
                    this.createCategory({
                        name: this.catName, description: this.catDescription
                    });
                    this.catName = '';
                    this.catDescription = '';
                    this.success = true;
                }
            },

            clear() {
                this.catName = '';
                this.catDescription = '';
                this.toggleNameWarnings();
                this.toggleDescriptionEmpty();
            }
        }
    }
</script>
