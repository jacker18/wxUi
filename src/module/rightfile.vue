<template>
  <div class="file_list">
    <!--<div class="title_name" v-text="Title"></div>-->
   <template v-for="item in files">
     <div class="file_one">
       <p><span v-text="item.title"></span><span v-text="item.time"></span></p>
        <p v-text="item.file"></p>
     </div>
   </template>

  </div>
</template>

<script>
  import showDate from "../assets/js/jjs/libjs/date";
import {mapState} from 'vuex'
  export default {
    name: "rightfile",
    data() {
      return {
        filelist: [{
          type: 1,
          time:showDate("Y-M-D h:m:s",new Date()),
          file:"这是一个笔记",
          ismark:true,
          title:"你好我是笔记"

        },
          {type: 2,
            time:showDate("Y-M-D h:m:s",new Date()-1000),
            file:"这是一个文件",
            ismark:false,
            title:"你好我是文件"
        },
          {type: 3,
            time:showDate("Y-M-D h:m:s",new Date()-2000),
            file:"这是一个相册",
            ismark:true,
            title:"你好我是相册"

        },
          {type: 4,
            time:showDate("Y-M-D h:m:s",new Date()-3000),
            file:"这是一个链接",
            ismark:false,
            title:"你好我是链接"
        }
        ]
      }
    },mounted:function(){

    },computed:{
      ...mapState(['file']),
      files:function(){
        var type=this.file.type;
        if(type!=0&&type!=6){
          return this.filelist.filter(function(item){
            return item.type==type
          })
        }else if(type==0){
          return this.filelist;
        }else if(type==6){
          return this.filelist.filter(function(item){
            return item.ismark==true;
          })
        }
      }
    }

  }
</script>

<style scoped>

</style>
