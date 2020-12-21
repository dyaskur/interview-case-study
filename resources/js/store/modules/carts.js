import axios from 'axios'
import * as types from "../mutation-types";
import Cookies from "js-cookie";

// state
export const state = {
    carts: null,
}

// getters
export const getters = {
    carts: state => state.carts,
}

// mutations
export const mutations = {
    ['SAVE_CARTS'](state, {data}) {
        state.carts = data.data
    },
    ['ADD_CART'](state, {data}) {
        state.carts = data.data
    },
}


// actions
export const actions = {
    async fetchCarts({commit}) {
        try {
            const {data} = await axios.get('/api/carts')
            commit('SAVE_CARTS', {data: data})
        } catch (e) {
            console.log(e)
            // commit(types.FETCH_USER_FAILURE)
        }
    },
    async addCart({commit}, itemId) {
        try {
            const {data} = await axios.post('/api/carts', {product_id: itemId})
            commit('SAVE_CARTS', {data: data})
        } catch (e) {
            console.log(e)
            // commit(types.FETCH_USER_FAILURE)
        }
    },
}
