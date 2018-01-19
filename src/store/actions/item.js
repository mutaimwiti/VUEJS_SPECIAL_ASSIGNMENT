export const itemActions = {
    createItem(store, item) {
        store.commit('CREATE_ITEM', item);
    },

    removeItem(store, item) {
        store.commit('REMOVE_ITEM', item);
    },

    editItem(store, item) {
        store.commit('EDIT_ITEM', item);
    },

    addItemToCart(store, item) {
        store.commit('ADD_ITEM_TO_CART', item);
    },

    clearCart(store) {
        store.commit('CLEAR_CART');
    },

    removeItemFromCart(store, item) {
        store.commit('REMOVE_ITEM_FROM_CART', item);
    },

    checkoutCart(store) {
        store.commit('CHECKOUT_CART');
    }
};
