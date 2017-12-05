<template>
    <div>
        <div class="grid-container">
            <div class="callout">
                <form>
                    <div class="grid-container">
                        <div class="grid-x grid-padding-x">
                            <div class="medium-6 cell">
                                <label>Name
                                    <input type="text" v-model="catName" @keydown="toggleNameWarnings">
                                </label>
                                <small v-show="itemExists" class="alert">The category already exists!</small>
                                <small v-show="nameEmpty" class="alert">The name cannot be empty!</small>
                            </div>
                        </div>
                        <div class="grid-x grid-padding-x">
                            <div class="medium-6 cell">
                                <label>
                                    Description
                                    <textarea v-model="catDescription" @keydown="toggleDescriptionEmpty"></textarea>
                                </label>
                                <small v-show="descriptionEmpty" class="alert">The description cannot be empty!</small>
                            </div>
                        </div>
                        <input type="button" @click="add" value="Add category" class="button">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        name: 'CreateCategory',

        data(){
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

            exists(){
                let exists = this.categories().filter((category)=> {
                    return category.name === this.catName;
                }).length;
                if ( exists > 0 ){
                    this.itemExists = true;
                    return true;
                }
                else{
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

            toggleNameWarnings(){
                if (this.nameEmpty){
                    this.nameEmpty = false;
                }
                if (this.itemExists){
                    this.itemExists = false;
                }
            },

            toggleDescriptionEmpty(){
                if (this.descriptionEmpty){
                    this.descriptionEmpty = false;
                }
            },

            add(){
                let exists = this.exists();
                let anyEmpty = this.anyFieldsEmpty();
                if (!exists && !anyEmpty){
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