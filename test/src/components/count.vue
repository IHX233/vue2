<template>
    <div>
        <div>{{$store.state.sum}}</div>
        <select v-model.number='n'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        
        <button @click='add'>+</button>
        <button @click='reduce'>-</button>
    </div>
    
</template>
<script>

export default {
    name:'One',
    data(){
        return {
            n:1
        }
    },
    methods:{
      add(){
        this.$store.commit('ADD',this.n)
      },  
      reduce(){
        this.$store.commit('REDUCE',this.n)
      }
    }
}
</script>
