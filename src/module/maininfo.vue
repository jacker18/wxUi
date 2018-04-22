<template>
  <div class="chat-info">
    <el-header height="45px">{{chat_title}}</el-header>
    <el-main id="chat-info-body">
      <ul>
        <li v-for="item in chat_info" :class="[{lefttitle:item.isself},{righttitle:!item.isself}]"><p
          class="message-time">{{item.time}}</p>
          <div class="message-info">
            <img :src="item.icon" alt=""><span v-text="item.info"></span></div>
        </li>
      </ul>
    </el-main>
    <el-footer height="150px" class="publish_footer">
      <el-row>
        <el-col :span="24">
          <div class="message-option">
            <div><i class="icon iconfont icon-smile" id="icon-smile"></i></div>
           <el-upload :on-success="uploadPic"  action="../assets/save/"  :file-list="fileList"> <i class="icon iconfont icon-wenjian1"></i></el-upload>
            <i class="icon iconfont icon-jianqie"></i>
            <i class="icon iconfont icon-liaotian"></i>
            <i class="icon iconfont icon-18"></i>
            <i class="icon iconfont icon-weibiaoti-"></i>
          </div>
          <textarea @keydown.enter.prevent.stop="sendMsg($event)" id="chat_input" v-model="publish"></textarea></el-col>
      </el-row>
    </el-footer>
  </div>
</template>
<script>
  import Img from '../assets/img/timg.jpg'
  import iscroll from "iscroll"
  import * as ispass from "../assets/js/jjs/libjs/ispassive"
  import '../assets/font/iconfont.css'
  import {mapState} from 'vuex';
  import showDate from '../assets/js/jjs/libjs/date';
  export default {
    name: "main-info",
    data() {
      return {
        chat_title: "吉吉",
        fileList:[],
        chat_info: [{
          time: "20:20:20",
          icon: Img,
          info: "你好我是我自己1",
          isself: true
        }, {
          time: "20:20:20",
          icon: Img,
          info: "你好我是你的聊天对象1",
          isself: false
        }, {
          time: "20:20:20",
          icon: Img,
          info: "你好我是我自己",
          isself: true
        }, {
          time: "20:20:20",
          icon: Img,
          info: "你好我是你的聊天对象",
          isself: false
        }, {
          time: "20:20:20",
          icon: Img,
          info: "你好我是我自己",
          isself: true
        }, {
          time: "20:20:20",
          icon: Img,
          info: "你好我是你的聊天对象",
          isself: false
        }, {
          time: "20:20:20",
          icon: Img,
          info: "你好我是我自己",
          isself: true
        }, {
          time: "20:20:20",
          icon: Img,
          info: "你好我是你的聊天对象",
          isself: false
        }, {
          time: "20:20:20",
          icon: Img,
          info: "你好我是我自己",
          isself: true
        }, {
          time: "20:20:20",
          icon: Img,
          info: "你好我是你的聊天对象",
          isself: false
        }, {
          time: "20:20:20",
          icon: Img,
          info: "你好我是我自己",
          isself: true
        }, {
          time: "20:20:20",
          icon: Img,
          info: "你好我是你的聊天对象",
          isself: false
        }, {
          time: "20:20:20",
          icon: Img,
          info: "你好我是我自己",
          isself: true
        }, {
          time: "20:20:20",
          icon: Img,
          info: "你好我是你的聊天对象",
          isself: false
        }, {
          time: "20:20:20",
          icon: Img,
          info: "你好我是我自己",
          isself: true
        }, {
          time: "20:20:20",
          icon: Img,
          info: "你好我是你的聊天对象",
          isself: false
        }],
        publish: "2222",
        mainscroll: {}
      }
    }, watch: {
      toChater: function (newV, oldV) {
        console.log(newV, "jsjjsjs")
        this.chat_title = newV;
        this.chat_info = [];
      }, windowH: function (newV, oldV) {
        var H = newV;
        $('#chat-info-body').height(H - 200 - 45 + "px");
      }
    }, computed: {
      ...mapState(['toChater', 'windowH'])
    }, methods: {
      uploadPic(response, file, fileList){
        console.log(response,file,fileList,"jhjsjsllkkk")
      },
      sendMsg: function ($event) {
        if (this.publish.length == 0) {
          $.msg("不能为空");
        } else {
          var item = {
            time: showDate('h:m:s'),
            icon: Img,
            info: this.publish,
            isself: false
          }
          this.chat_info.push(item);
          this.publish = "";
          var self = this;
          this.$nextTick(function () {
            self.mainscroll.refresh();
            self.mainscroll.scrollTo(self.mainscroll.maxScrollX, self.mainscroll.maxScrollY)
          })
        }
      }
    }, mounted: function () {
         let self = this;
         let count = 0;
      setTimeout(function () {
        self.mainscroll = new iscroll("#chat-info-body", {
          scrollX: false,
          scrollY: true,
          mouseWheel: true
        })
        document.addEventListener('touchmove', function (e) {
          e.preventDefault();

        }, ispass.isPassive() ? {
          capture: false,
          passive: false
        } : false);
      }, 1000)
      $.fn.extend(window.jq.fn);
      $("#icon-smile").qqFace({
        id:'facebox',
        assign:'chat_input', //给输入框赋值
        path:'../../static/arclist/'    //表情图片存放的路径
      })
    }
  }
</script>

<style lang="scss" scoped>

  #chat-info-body {
    position: relative;
    /*height: 600px;*/
    padding: 0;
    /*padding-bottom:200px;*/
  }

  #chat-info-body ul {
    padding: 0;
    margin: 0;
    overflow: hidden;
    position: absolute;
    width: 100%;
  }

  #chat-info-body li {
    width: 100%;
    list-style: none;
  }

  .lefttitle {
    text-align: left;
    list-style: none;
    p {
      text-align: center;
      color: #dddddd;
    }
    .message-info {
      width: 100%;
      text-align: left;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        display: inline-block;
        float: left;
        margin-left: 20px;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }
      span {
        display: inline-block;
        margin-left: 15px;
        width: auto;
        float: left;
        background: #dddddd;
        color: #ffffff;
        height: auto;
        border-radius: 5px;
        padding: 8px;
        position: relative;
        &:after {
          content: "";
          width: 0;
          height: 0;
          position: absolute;
          border-right: 6px solid #dddddd;
          border-left: 6px solid transparent;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          top: 12px;
          left: -12px;
        }

      }
    }

  }

  .righttitle {
    text-align: right;
    list-style: none;
    p {
      text-align: center;
      color: #dddddd;
    }
    .message-info {
      width: 100%;
      text-align: right;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row-reverse;
      img {
        display: inline-block;
        float: right;
        margin-right: 15px;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }
      span {
        display: inline-block;
        margin-right: 15px;
        width: auto;
        float: right;
        background: #28cc14;
        color: #ddd;
        position: relative;
        height: auto;
        border-radius: 5px;
        padding: 8px;
        &:after {
          content: "";
          width: 0;
          height: 0;
          position: absolute;
          border-right: 6px solid transparent;
          border-left: 6px solid #28cc14;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          top: 12px;
          right: -12px;
        }
      }
    }
  }

  .el-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    width: 100%;
    /*overflow: hidden;*/
    clear:both;
    border-top: 1px solid #dddddd;
    background: #ffffff;
    .el-row {
      height: 100%;
      .el-col-16 {
        height: 56px;
        textarea {
          display: block;
          width: 100%;
          text-indent: 8px;
          border-radius: 5px;
          height: 300px;
          outline: none;
        }

      }
      .el-col-4 {
        height: 56px;
        .chat-submit {
          margin-bottom: 10px;
          border-radius: 5px;
          width: 80%;
          height: 100%;
          font-size: 2rem;
          background: #3494fa;
          color: #ffffff;
          border: 1px solid #3494fa;
          cursor: pointer;
          text-align: center;
          line-height: 56px;
        }
      }
    }

  }

  .message-option {
    width: 100%;
    /*overflow: hidden;*/
    position: relative;
    display: flex;
    justify-content: flex-start;

  }
  .message-option>div{
    display: block;
    width: 35px;
    height: 35px;
    line-height: 35px;
    margin-left: 10px;
    font-size: 24px;
    float: left;
    color: #000;position:relative;background: #ffffff;}
  .message-option .qqFace{background: #ffffff;}
  .message-option i {
    display: block;
    width: 35px;
    height: 35px;
    line-height: 35px;
    margin-left: 10px;
    font-size: 24px;
    float: left;
    color: #000;
  }
  .message-option div i{margin-left:0;}
  .message-option .icon-18, .message-option .icon-weibiaoti- {
    float: right;
  }

  .publish_footer textarea {
    width: 98%;
    padding: 6px;
    height: 300px;
    border: 0;
    outline: none;
    resize: none;
    background: #dddddd;
    border-radius: 5px;
  }
</style>
