<template>
  <div class="user_detail">
    <template v-for="item in info">
      <div class="icon_detail">
        <div class="nick_detail"><p><big>{{item.name}}</big><i class="icon iconfont"
                                                               :class="[{'icon-nan':item.sex==0?true:false},{'icon-nv':item.sex==1?true:false}]"></i>
        </p>
          <p class="state">{{item.discuss}}</p></div>
        <img src="../assets/img/timg.jpg" alt="">
      </div>
      <div class="user_detail">
        <ul>
          <li><span>备注名：</span><span><input type="text" v-model="item.cname" placeholder="添加备注名"></span></li>
          <li><span>地区：</span><span>浙江 杭州</span></li>
          <li><span>wx号：</span><span>wx_123456</span></li>
          <li><span>来源：</span><span>通过手机号添加</span></li>
          <li>
            <button @click="sendMsg(item)">发送消息</button>
          </li>
        </ul>
      </div>
    </template>
  </div>

</template>

<script>
  import {mapState, mapMutations} from 'vuex';

  export default {
    name: "rightuser",
    methods: {
    ...mapMutations(['CHAT', 'ACTIVE']),
      sendMsg: function (item) {
        this.$store.commit('ACTIVE', 0);
        var self=this;
        setTimeout(function(){
          self.$store.commit('CHAT', item.name);
        },10)

      }
    }, computed: {
      ...mapState(['toChater', 'activeIndex'])
    }, data() {
      return {
        info: [{
          name: '清风不过山海关',
          sex: 0,
          discuss: '你若安好就是晴天',
          cname: ''
        }]
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/font/iconfont.css';

  .user_detail {
    margin: 50px auto;
    min-width: 400px;
    width: 400px;
    /*padding-left: 30px;*/
    ul {
      padding: 0;
      margin: 0;
      li {
        width: 100%;
        list-style: none;
        text-align: left;
        padding-left: 20px;
        /*text-indent: 20px;*/
        span:first-child {
          display: inline-block;
          width: 70px;
          margin: 10px;

        }
        span {
          input {
            display: inline-block;
            height: 24px;
            padding-left: 8px;
            border-radius: 5px;
            outline: none;
            border: 0;
            background: #dddddd;
          }
        }
        button {
          display: block;
          margin-left: 90px;
          width: 80px;
          height: 30px;
          color: #ffffff;
          text-align: center;
          font-size: 16px;
          border-radius: 5px;
          background: #28cc14;
        }
        button:hover {
          cursor: pointer;
        }
      }
    }
    .icon_detail {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 1px solid #dddddd;
      padding: 15px 0;
      .nick_detail {
        width: 240px;
        text-align: left;
        overflow: hidden;
        padding-left: 30px;
        p {
          display: flex;
          justify-content: flex-start;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          big {
            display: inline-block;
            margin-right: 10px;
            font-size: 18px;
            width: 200px;
            font-weight: 600;
            height: 50px;
            line-height: 50px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          i {
            display: inline-block;
            width: 50px;
            height: 50px;
            font-size: 28px;
            line-height: 50px;
            text-align: center;
            margin-left: 10px;
          }
        }

      }
      img {
        display: inline-block;
        width: 100px;
        height: 100px;
      }
    }
  }
</style>
