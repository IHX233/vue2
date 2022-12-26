
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
            <!-- query参数字符串写法 -->
            <!-- <router-link :to='`/count1/num?title=${numTitle}`' >num</router-link> -->
            <!-- query参数对象写法 -->
            <router-link 
            :to="{
                path:'/count1/num',
                query:{
                    title:numTitle
                }
                }">num</router-link>
            <!-- params参数（只能用name不能用path） -->
            <router-link 
            :to="{
                name:'word',
                params:{
                    title:wordTitle
                }
                }">word</router-link>
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
            n:1,
            numTitle:'num',
            wordTitle:'word'
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
