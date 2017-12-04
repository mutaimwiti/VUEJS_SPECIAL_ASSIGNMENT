<template>
    <div class="grid-container">
        <form>
            <label for="name">Name</label>
            <input id="name" type="text" v-model="catName" @keydown="toggleNameWarnings">
            <label v-show="itemExists">The category already exists!</label>
            <label v-show="nameEmpty">The name cannot be empty!</label>
            <label for="description">Description</label>
            <textarea id="description" v-model="catDescription" @keydown="toggleDescriptionEmpty"></textarea>
            <label v-show="descriptionEmpty">The description cannot be empty!</label><br>
            <input type="button" @click="add" value="Add category" class="button">
        </form>
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