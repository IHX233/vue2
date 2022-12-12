<template>
    <div>
        <div>{{$store.state.sum}}</div>
        <select v-model.number='n'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click='waitAdd'>+</button>
        <button @click='waitReduce'>-</button>
    </div>
    
</template>
<script>

export default {
    name:'Two',
    data(){
        return {
            n:1
        }
    },
    methods:{
      waitAdd(){
        this.$store.dispatch('waitAdd',this.n)
      },  
      waitReduce(){
        this.$store.dispatch('waitReduce',this.n)
      }
    }
}
</script>
