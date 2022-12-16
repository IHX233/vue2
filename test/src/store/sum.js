export default ({
    namespaced: true,
    actions: {

        waitReduce(context, value) {
            setTimeout(() => {
                context.commit('REDUCE', value)
            }, 1000)

        },
        waitAdd(context, value) {
            setTimeout(() => {
                context.commit('ADD', value)
            }, 1000)

        },
    },
    mutations: {
        ADD(state, value) {
            state.sum += value
        },
        REDUCE(state, value) {
            state.sum -= value
        }
    },
    state: {
        sum: 0
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
})