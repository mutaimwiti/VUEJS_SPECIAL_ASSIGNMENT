<template>
    <div class="grid-container">
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Units</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in items">
                <td>{{ item.name }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.stock }}</td>
                <td>{{ item.units }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapState } from 'vuex'


    export default {
        name: 'Items',

        computed: {
            ...mapState(['items']),
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