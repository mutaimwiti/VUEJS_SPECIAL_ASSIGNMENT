export const categoryActions = {
    createCategory(store, category) {
        store.commit('CREATE_CATEGORY', category);
    },

    removeCategory(store, category) {
        store.commit('REMOVE_CATEGORY', category);
    },

    editCategory(store, category) {
        store.commit('EDIT_CATEGORY', category);
    }
};
