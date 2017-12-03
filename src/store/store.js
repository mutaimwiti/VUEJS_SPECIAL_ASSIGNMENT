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
    ],

    items: [
        {name: 'Blue triangle', category: 'Cement', stock: 15, units: 'bags'},
        {name: 'Simba cement', category: 'Cement', stock: 5, units: 'bags'},
        {name: 'Savannah cement', category: 'Cement', stock: 0, units: 'bags'},
        {name: 'Roofing nails', category: 'Nails', stock: 40, units: 'kgs'},
        {name: 'Hammer', category: 'Masonry tools', stock: 3, units: 'pcs'},
        {name: 'Chisel', category: 'Masonry tools', stock: 1,units: 'pcs'}
    ]
};

const mutations = {

};

const store = new Vuex.Store({
    state: state,
    mutations: mutations
});

export default store;

