<template>
    <form method="post"  class="login">
        <p>
            <label >username:</label>
            <input type="text"  v-model="username" id="login" placeholder="Username">
        </p>

        <p>
            <label>Password:</label>
            <input type="password"  v-model="password" id="password" placeholder="password">
        </p>
        <p class="sender">
            <label >code:</label>
            <input type="text"  v-model="Code" id="code" placeholder="code">
            <button class="send_code" v-text="codehtml" @click="getcode">验证码</button>
        </p>
        <p class="login-submit">
            <router-link class="login-button" :to="{ path: '/chat'}"></router-link>
        </p>
    </form>
</template>

<script>
    import '../assets/css/login.css'
    import $ from 'jquery'
    import api from '../assets/api/api'
    import {mapState,mapActions} from 'vuex'
    export default {
        name: "loginIn",
        data(){
            return {username:"",password:"",Code:"",codehtml:"验证码"}
        },
        mounted(){

        },watch:{
            code:function(newV,oldV){
                console.log(newV,"jfff")
        },computed:{
                ...mapState(['code'])
            }
        },
        methods:{
            ...mapActions(['changeChat']),
            getcode:function($event){
                $event.preventDefault();
                var self=this;
                // this.$store.commit('changeCHAT').then(()=>{
                //     console.log(self.code,"hjsjjsjsjs")
                // });
               this.changeChat().then(()=>{
                   this.Code=this.$store.state.code;
               });

         // console.log(this.Code,"jjsjsjjs")

            },
            alertinfo:function($event){
                $event.preventDefault();
               console.log($event)
            }
        }
    }
</script>

<style scoped>

</style>