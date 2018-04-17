<template>
  <div class="right_part">
  <chat-info v-if="active==0"></chat-info>
    <user-info v-else-if="active==1"></user-info>
    <right-file v-else="active==2" :title="title"></right-file>
  </div>
</template>

<script>
  import chatInfo from './maininfo'
  import userInfo from './rightuser'
  import rightFile from './rightfile'
  import {mapState} from 'vuex'

  export default {
    name: "rightmain",
    data() {
      return {
        active:0,
        title:"你好"
      }
    }, computed: {
      ...mapState(['activeIndex'])
    },
    watch: {
      activeIndex: function (newV, oldV) {
        this.active=newV

      }
    },components:{

     chatInfo,userInfo,rightFile
    },mounted:function(){
      this.active=this.activeIndex
    }
  }
</script>

<style scoped>
  .right_part {
    width: 100%;
  }
</style>
