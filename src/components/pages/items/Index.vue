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
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in items">
                        <td>{{ items.indexOf(item) + 1 }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.category }}</td>
                        <td>{{ item.stock }}</td>
                        <td>{{ item.units }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import QuickLinks from '../../QuickLinks.vue';

    export default {
        name: 'Items',

        components: { QuickLinks },

        computed: {
            ...mapState(['items']),
        },

        data(){
            return {

            }
        }
    }
</script>
