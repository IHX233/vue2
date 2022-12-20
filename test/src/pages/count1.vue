
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
        <button @click='waitAdd(n)'>+</button>
        <button @click='waitReduce(n)'>-</button>
        <div>
            <router-link to='/count1/num'>num</router-link>
            <router-link to='/count1/word'>word</router-link>
        </div>
        
        <router-view></router-view>
    </div>
    
</template>
<script>
//不用map简写方式的写法
export default {
    name:'CountOne',
    data(){
        return {
            n:1
        }
    },
    computed:{
        sum(){
            return this.$store.state.sumOption.sum
        },
        address(){
            return this.$store.state.workOption.address
        },
        work(){
            return this.$store.state.workOption.work
        },
        bigSum(){
            return this.$store.getters['sumOption/bigSum']
        }
    },
    methods:{
        waitAdd(n){
            this.$store.dispatch('sumOption/waitAdd',n)
        },
        waitReduce(n){
            this.$store.dispatch('sumOption/waitReduce',n)
        }
    }
}
</script>
