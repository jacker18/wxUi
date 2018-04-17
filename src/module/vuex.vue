<template>
    <div>
        <button @click="Add"></button>
        <button @click="Reduce"></button>
    </div>

</template>

<script>
    export default {
        name: "vuex",data(){
            return {
                count:1
            }
        },methods:{
            Add:function(){
              this.count+=1
            },Reduce:function(){
                this.count-=1;
            }
        }
    }
</script>

<style scoped>

</style>