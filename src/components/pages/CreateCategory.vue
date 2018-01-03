<template>
    <div>
        <div class="grid-x">
            <div class="medium-offset-3 medium-6">
                <div class="callout main-callout">
                    <form class="sm-form-callout">
                        <div class="grid-container">
                            <div class="grid-x grid-padding-x">
                                <div class="grid-x grid-padding-x">
                                    <div class="medium-4 cell">
                                        <label for="name" class="text-right middle">Name</label>
                                    </div>
                                    <div class="medium-8 cell">
                                        <input id="name" type="text" v-model="catName" @keydown="toggleNameWarnings"
                                               autofocus>
                                        <div data-abide-error class="alert callout" v-show="nameEmpty">
                                            <span>The name cannot be empty!</span>
                                        </div>
                                        <div data-abide-error class="alert callout" v-show="itemExists">
                                            <span>The category already exists!</span>
                                        </div>
                                    </div>

                                    <div class="medium-4 cell">
                                        <label for="description" class="text-right middle">Description</label>
                                    </div>
                                    <div class="medium-8 cell">
                                        <textarea id="description" v-model="catDescription"
                                                  @keydown="toggleDescriptionEmpty"></textarea>
                                        <div data-abide-error class="alert callout" v-show="descriptionEmpty">
                                            <span>The description cannot be empty!</span>
                                        </div>
                                    </div>

                                    <div class="medium-12 cell">
                                        <div class="float-right">
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

    export default {
        name: 'CreateCategory',

        data() {
            return {
                catName: '',
                catDescription: '',
                nameEmpty: false,
                descriptionEmpty: false,
                itemExists: false
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
                    this.itemExists = true;
                    return true;
                }
                else {
                    return false;
                }
            },

            anyFieldsEmpty() {
                let anyEmpty = false;
                if (this.catName.length < 1) {
                    this.nameEmpty = true;
                    anyEmpty = true;
                }
                if (this.catDescription.length < 1) {
                    this.descriptionEmpty = true;
                    anyEmpty = true;
                }
                return anyEmpty;
            },

            toggleNameWarnings() {
                if (this.nameEmpty) {
                    this.nameEmpty = false;
                }
                if (this.itemExists) {
                    this.itemExists = false;
                }
            },

            toggleDescriptionEmpty() {
                if (this.descriptionEmpty) {
                    this.descriptionEmpty = false;
                }
            },

            add() {
                let exists = this.exists();
                let anyEmpty = this.anyFieldsEmpty();
                if (!exists && !anyEmpty) {
                    this.createCategory({
                        name: this.catName, description: this.catDescription
                    });
                    this.catName = '';
                    this.catDescription = '';
                }
            }
        }
    }
</script>