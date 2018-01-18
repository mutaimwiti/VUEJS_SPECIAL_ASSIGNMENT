import { mapState } from 'vuex'
import Alert from '../components/Alert.vue'

export default {
    components: { Alert },

    computed: {
        ...mapState(['categories'])
    },

    methods: {
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
        }
    }
}
