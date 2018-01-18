import { mapState } from 'vuex'
import Alert from '../components/Alert.vue'

export default {
    components: { Alert },

    computed: {
        ...mapState(['items']),

        ...mapState(['categories']),
    },

    methods: {
        anyFieldsEmpty() {
            let anyEmpty = false;

            if (this.itemName.length < 1) {
                this.errors.nameEmpty = true;
                anyEmpty = true;
            }

            if (this.itemCategory === null) {
                this.errors.categoryNull = true;
                anyEmpty = true;
            }

            if (this.itemUnits.length < 1) {
                this.errors.unitsEmpty = true;
                anyEmpty = true;
            }

            return anyEmpty;
        },

        toggleNameWarnings() {
            this.errors.nameEmpty = false;
            this.errors.itemExists = false;
        },

        toggleCategoryNull() {
            this.errors.categoryNull = false;
        },

        toggleUnitsEmpty() {
            this.errors.unitsEmpty = false;
        },
    }
}
