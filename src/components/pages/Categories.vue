<template>
    <div class="grid-x">
        <div class="medium-offset-2 medium-8">
            <div class="callout main-callout">
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="category in categories">
                        <td>{{ categories.indexOf(category) + 1 }}</td>
                        <td>{{ category.name }}</td>
                        <td>{{ category.description }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
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
