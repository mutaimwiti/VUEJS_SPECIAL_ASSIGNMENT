<template>
    <div class="grid-container">
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="category in categories">
                <td>{{ category.name }}</td>
                <td>{{ category.description }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapState } from 'vuex'


    export default {
        name: 'Categories',

        computed: {
            ...mapState(['categories']),
        },

        data(){
            return {

            }
        }
    }
</script>

<style scoped>
    table {
        border-collapse: collapse;
    }

    table, th, td {
        border: 1px solid black;
    }
</style>