import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    categories: [],
    items: []
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
};

const store = new Vuex.Store({
    state: state,
    mutations: mutations
});

export default store;
