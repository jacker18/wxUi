<template>
  <el-container class="container"
                :class="[{isclose:screenoption==0?true:false},{fullscreen:screenoption==2?true:false},{original:screenoption==1?true:false}]">
    <component :is="module3" :Option.sync="option"></component>
    <!--最左侧边栏-->
    <component :is="module" class="show_list"></component>
    <!--切换侧边栏-->
    <el-container class="show_info">
      <component :is="module2"></component>
    </el-container>
  </el-container>
</template>

<style lang="scss">
  body {
    height: 100%;
  }

  .container {
    border: 1px solid #c5c4c4;
    position: absolute;
    overflow: hidden;
    transition: all 1s;
  }

  /*//做侧边栏*/
  .search_container {
    width: 100%;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    padding: 15px 0;
    background: #ffffff;
  }

  .search_for {
    background: #dddddd;
    width: 90%;
    height: 36px;
    cursor: pointer;
    text-align: center;
    border-radius: 5px;
    overflow: hidden;
    line-height: 36px;
    font-size: 14px;
    margin: auto;
  }

  .search_for i {
    display: inline-block;
    float: right;
    margin-right: 8px;
    font-size: 14px;
    line-height: 36px;
  }

  #chat_body {
    border: 1px solid #c5c4c4;
    height: 100%;
  }

  .el-aside .el-main {
    overflow: hidden;
    padding: 0;
    margin: 0;
    height: auto;
    position: relative;
  }

  .chat-info {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .chat-info .el-header {
    width: 100%;
    height: 45px;
    background: #312f2f;
    font-size: 24px;
    line-height: 45px;
    text-align: center;
    color: #ffffff;
  }

  .show_list.el-aside {
    border-right: 1px solid #c5c4c4;
    position: relative;
    overflow: hidden;
    min-width: 260px;
  }

  .show_info {
    min-width: 400px;
  }

  .show_list .el-aside .el-main {
    min-width: 260px;
  }

  .isclose {
    display: none;
  }

  .fullscreen {
    width: 100%;
    height:98%;
    left: 0;
    top: 0;
    animation: a1 0.5s linear;
  }

  .original {
    height: 600px;
    width: 800px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: a2 0.5s linear;
  }

  @keyframes a1 {
    0% {
      height: 600px;
      width: 800px;
    }
    100% {
      height: 98%;
      width: 100%;
    }
  }

  @-khtml-keyframes a1 {
    0% {
      height: 600px;
      width: 800px;
    }
    100% {
      height: 98%;
      width: 100%;
    }

  }

  @-moz-keyframes a1 {
    0% {
      height: 600px;
      width: 800px;
    }
    100% {
      height: 98%;
      width: 100%;
    }
  }

  @-ms-keyframes a1 {
    0% {
      height: 600px;
      width: 800px;
    }
    100% {
      height: 100%;
      width: 100%;
    }
  }

  @-o-keyframes a1 {
    0% {
      height: 600px;
      width: 800px;
    }
    100% {
      height: 98%;
      width: 100%;
    }
  }

  @-webkit-keyframes a1 {
    0% {
      height: 600px;
      width: 800px;
    }
    100% {
      height: 98%;
      width: 100%;
    }
  }

  @keyframes a2 {
    0% {
      height: 98%;
      width: 100%;
    }
    100% {
      height: 600px;
      width: 800px;
    }
  }

  @-khtml-keyframes a2 {
    0% {
      height: 98%;
      width: 100%;
    }
    100% {
      height: 600px;
      width: 800px;
    }

  }

  @-moz-keyframes a2 {
    0% {
      height: 98%;
      width: 100%;
    }
    100% {
      height: 600px;
      width: 800px;
    }
  }

  @-ms-keyframes a2 {
    0% {
      height: 98%;
      width: 100%;
    }
    100% {
      height: 600px;
      width: 800px;
    }
  }

  @-o-keyframes a2 {
    0% {
      height: 98%;
      width: 100%;
    }
    100% {
      height: 600px;
      width: 800px;
    }
  }

  @-webkit-keyframes a2 {
    0% {
      height: 98%;
      width: 100%;
    }
    100% {
      height: 600px;
      width: 800px;
    }
  }
</style>

<script>
  import '../assets/font/iconfont.css';
  import userlist from '../module/leftlist';
  import maininfo from '../module/rightmain';
  import common from "../module/common"
  import offsetMove from '../assets/js/jjs/libjs/borderchange'
  import moveDrag from '../assets/js/jjs/libjs/drag';
  import {mapState, mapMutations} from 'vuex';

  export default {
    name: 'chat',
    watch: {
      option: function (newV, oldV) {
        if (newV == "close") {
          this.screenoption = 0;
        } else if (newV == "fullscreen") {
          this.screenoption = 2;
          var H = $(window).height();
        } else {
          this.screenoption = 1;
          var H = 600;
        }
        this.$store.commit('HEIGHT', H);
      }
    }, computed: {
      ...mapState(['windowH'])
    }, data() {
      return {
        module: "view-a",
        module2: 'view-b',
        module3: "view-c",
        option: "fullscreen",
        screenoption: 2
      };
    },
    components: {
      "view-a": userlist,
      'view-b': maininfo,
      'view-c': common
    },
    methods: {
      ...mapMutations(['HEIGHT'])
    },
    mounted: function () {
      var bor = new offsetMove(document.getElementsByClassName("show_list")[0], {minwidth: 150, minheight: 600});
      var drager = new moveDrag(document.getElementsByClassName("search_container")[0], document.getElementsByClassName("container")[0])
      document.getElementsByClassName("search_for")[0].onmousedown = function (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      if(this.screenoption==1){
        this.$store.commit('HEIGHT',600)
      }else if(this.screenoption==2){
        var H=$(window).height();
        this.$store.commit('HEIGHT',H)
      }else{
        this.$store.commit('HEIGHT',0)
      }
    }
  }

</script>
