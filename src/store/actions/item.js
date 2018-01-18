export const itemActions = {
    createItem(store, item) {
        store.commit('CREATE_ITEM', item);
    },

    removeItem(store, item) {
        store.commit('REMOVE_ITEM', item);
    },

    editItem(store, item) {
        store.commit('EDIT_ITEM', item);
    }
};
