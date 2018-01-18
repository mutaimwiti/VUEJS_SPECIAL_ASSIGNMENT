<template>
    <div>
        <div class="grid-x">
            <div class="medium-offset-3 medium-6">
                <div class="callout main-callout">
                    <alert message="Category updated" v-on:close="success = false" v-show="success"></alert>
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
                                            <input type="button" @click="cancel" value="Cancel" class="button warning">
                                            <input type="button" @click="save" value="Save" class="button">
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
    import {mapActions} from 'vuex'
    import mixin from '../../../mixins/categoryForm';

    export default{
        mixins: [mixin],

        name: 'EditCategory',

        data() {
            return {
                oldCategory: null,
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

        mounted() {
            this.initCategory();
        },

        methods: {
            ...mapActions(['editCategory']),

            initCategory() {
                this.oldCategory = this.categories.filter((category) => {
                    return category.name === this.$route.params.category;
                })[0];

                this.catName = this.oldCategory.name;
                this.catDescription = this.oldCategory.description;
            },

            exists() {
                let exists = this.categories.filter((category) => {
                    return category.name === this.catName;
                }).length;

                //only evaluates to true if the category exists and the
                // category name is not equal to the category being edited
                if (exists > 0 && !(this.catName === this.oldCategory.name)) {
                    this.errors.itemExists = true;
                    return true;
                }
                else {
                    return false;
                }
            },

            save() {
                this.success = false;
                let exists = this.exists();
                let anyEmpty = this.anyFieldsEmpty();
                if (!exists && !anyEmpty) {
                    this.editCategory({ old: this.oldCategory, name: this.catName, description: this.catDescription });
                    this.success = true;
                }
            },

            cancel() {
                this.catName = this.oldCategory.name;
                this.catDescription = this.oldCategory.description;
                this.toggleNameWarnings();
                this.toggleDescriptionEmpty();
            }
        }
    }
</script>
