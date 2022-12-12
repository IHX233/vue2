import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const actions = {
    waitAdd(context, value) {
        setTimeout(() => {
            context.commit('ADD', value)
        }, 1000)

    },
    waitReduce(context, value) {
        setTimeout(() => {
            context.commit('REDUCE', value)
        }, 1000)

    }
}
const mutations = {
    ADD(state, value) {
        state.sum += value
    },
    REDUCE(state, value) {
        state.sum -= value
    }
}
const state = {
    sum: 0
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})