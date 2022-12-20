<template>
    <div>
        <div>{{sum}}</div>
        <div>{{bigSum}}</div>
        <div>我在{{address}}做{{work}}</div>
        <select v-model.number='n'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        
        <button @click='ADD(n)'>+</button>
        <button @click='REDUCE(n)'>-</button>
    </div>
    
</template>
<script>
//用map简写方式的写法
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
    name:'Count',
    data(){
        return {
            n:1
        }
    },
    computed:{
        //...mapState({sum:'sum',address:'address',work:'work',bigSum:'bigSum'})对象写法，组件中计算属性名与vuex中state中名字不一样时这样写
        ...mapState('sumOption',['sum']), 
        ...mapState('workOption',['address','work']),//数组写法，当组件中计算属性名与vuex中state中名字一样时这样写
        ...mapGetters('sumOption',['bigSum'])
    },
    methods:{
        //...mapMutations({add:'ADD',reduce:'REDUCE'})对象写法，组件中触发的方法名与vuex中mutations中方法名不同时这样写
        ...mapMutations('sumOption',['ADD','REDUCE']) //数组写法，组件中触发的方法名与vuex中mutations中方法名相同时这样写
    }
}
</script>
