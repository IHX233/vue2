import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import workOption from './work'
import sumOption from './sum'
export default new Vuex.Store({
    modules: {
        workOption,
        sumOption
    }
})