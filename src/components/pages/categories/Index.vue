<template>
    <div class="grid-x">
        <div class="medium-offset-2 medium-8">
            <div class="callout main-callout">
                <quick-links :components="[{'name': 'CreateCategory', 'caption': 'Add category'}]"></quick-links>
                <alert color="alert"
                       v-show="catHasItems"
                       v-on:close="catHasItems = false"
                       :message="message()"></alert>
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="category in categories">
                        <td>{{ categories.indexOf(category) + 1 }}</td>
                        <td>{{ category.name }}</td>
                        <td>{{ category.description }}</td>
                        <td>
                            <router-link :to="{ name: 'EditCategory', params: { category: category.name } }"
                                         class="button tiny action-btn">Edit
                            </router-link>
                            <button type="button" class="button tiny action-btn" @click="removeCat(category)">Remove
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import QuickLinks from '../../QuickLinks.vue'
    import Alert from '../../Alert.vue'

    export default {
        name: 'Categories',

        components: {QuickLinks, Alert},

        data() {
            return {
                lastActive: null,
                catHasItems: false
            }
        },

        computed: {
            ...mapState(['categories']),

            ...mapState(['items']),
        },

        methods: {
            ...mapActions(['removeCategory']),

            hasItems(category) {
                return this.items.filter((item) => {
                    return item.category === category.name;
                }).length;
            },

            removeCat(category) {
                this.lastActive = category.name;

                this.catHasItems = this.hasItems(category);

                if (!this.catHasItems) {
                    this.removeCategory(category);
                }
            },

            message() {
                return 'Category ' + this.lastActive + ' cannot be removed because it has items!';
            }
        }
    }
</script>
