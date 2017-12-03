import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    //initialize with a few examples
    categories: [
        {name: 'Cement', description: 'Construction cement'},
        {name: 'Paints', description: 'House paints'},
        {name: 'Nails', description: 'Construction nails'},
        {name: 'Metal bars', description: 'Construction bars'},
        {name: 'Masonry tools', description: 'Professional masonry tools'},
    ]
};

const mutations = {

};

const store = new Vuex.Store({
    state: state,
    mutations: mutations
});

export default store;

