import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    categories: [],
    items: [],
    cart: []
};

const mutations = {
    CREATE_CATEGORY (state, name) {
        const newCategory = {
            name: name
        }
        state.categories.push(newCategory)
    },

    EDIT_CATEGORY (state, category, newName) {
        state.categories[state.categories.indexOf(category)].name = newName;
    },

    DELETE_CATEGORY (state, category) {
        state.categories.splice(state.categories[state.categories.indexOf(category)], 1)
    },

    CREATE_ITEM (state, name, category, stock) {
        const newItem = {
            name: name,
            category: category,
            stock: stock
        }
        state.items.push(newItem)
    },

    EDIT_ITEM (state, item, newName, newCategory) {
        state.items[state.items.indexOf(item)].name = newName;
        state.items[state.items.indexOf(item)].category = newCategory;
    },

    DELETE_ITEM (state, item) {
        state.items.splice(state.items[state.items.indexOf(item)], 1)
    },

    ADD_ITEM_TO_CART (state, item, count) {
        const orderItem = {
            item: item,
            count: count
        }
        state.cart.push(orderItem)
    },

    REMOVE_ITEM_FROM_CART (state, cartItem) {
        state.cart.splice(state.cart.indexOf(cartItem), 1)
    },
};

const store = new Vuex.Store({
    state: state,
    mutations: mutations
});

export default store;
