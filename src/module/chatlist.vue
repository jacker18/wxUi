<template>
    <div id="mainer">
        <ul class="user_form" id="user_form">
            <template v-for="item in userlist">
                <li @click="chatChange(item)"> <img :src="item.icon" alt="" >
                    <div class="userinfo"><p>
                        <span class="user-title" v-text="item.nick"></span><span
                            class="recent_time" v-text="item.time"></span></p>
                        <p><span class="recent_content" v-html="item.recent"></span><span class="user_status" v-show="item.isdisturb">
                                          <i class="icon iconfont icon-penyouquan"></i></span></p></div>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
    import Img from '../assets/img/timg.jpg'
    import '../assets/font/iconfont.css';
    import {mapMutations,mapState} from 'vuex'
    const IScroll = require('iscroll')
    import * as ispass from "../assets/js/jjs/libjs/ispassive"
    var chatScroll = {};
    export default {
        name: "chatlist",
        data(){
            return {
                userlist: [
                    {
                        icon: Img,
                        nick: "你真的很春2",
                        time: "21:29",
                        recent: "你好我欧式打赏比",
                        isdisturb: "false"
                    },
                    {
                        icon: Img,
                        nick: "你真的很春3",
                        time: "21:29",
                        recent: "你好我欧式打赏比",
                        isdisturb: "false"
                    },
                    {
                        icon: Img,
                        nick: "你真的很春5",
                        time: "21:29",
                        recent: "你好我欧式打赏比",
                        isdisturb: "true"
                    },
                    {
                        icon: Img,
                        nick: "你真的很春6",
                        time: "21:29",
                        recent: "你好我欧式打赏比",
                        isdisturb: "false"
                    },
                    {
                        icon: Img,
                        nick: "你真的很春7",
                        time: "21:29",
                        recent: "你好我欧式打赏比",
                        isdisturb: "false"
                    },
                    {
                        icon: Img,
                        nick: "你真的很春8",
                        time: "21:29",
                        recent: "你好我欧式打赏比",
                        isdisturb: "false"
                    },
                    {
                        icon: Img,
                        nick: "你真的很春9",
                        time: "21:29",
                        recent: "你好我欧式打赏比",
                        isdisturb: "false"
                    }, {
                        icon: Img,
                        nick: "你真的很春10",
                        time: "21:29",
                        recent: "你好我欧式打赏比11",
                        isdisturb: "false"
                    },
                    {
                        icon: Img,
                        nick: "你真的很春12",
                        time: "21:29",
                        recent: "你好我欧式打赏比13",
                        isdisturb: "true"
                    },
                    {
                        icon: Img,
                        nick: "你真的很春15",
                        time: "21:29",
                        recent: "你好我欧式打赏比",
                        isdisturb: "false"
                    },
                    {
                        icon: Img,
                        nick: "你真的很春",
                        time: "21:29",
                        recent: "你好我欧式打赏比",
                        isdisturb: "false"
                    },
                    {
                        icon: Img,
                        nick: "你真的很春",
                        time: "21:29",
                        recent: "你好我欧式打赏比",
                        isdisturb: "false"
                    },
                    {
                        icon: Img,
                        nick: "你真的很春",
                        time: "21:29",
                        recent: "你好我欧式打赏比",
                        isdisturb: "false"
                    }, {
                        icon: Img,
                        nick: "你真的很春",
                        time: "21:29",
                        recent: "你好我欧式打赏比",
                        isdisturb: "false"
                    },{
                        icon: Img,
                        nick: "你真的很春",
                        time: "21:29",
                        recent: "你好我欧式打赏比",
                        isdisturb: "false"
                    },
                    {
                        icon: Img,
                        nick: "你真的很春",
                        time: "21:29",
                        recent: "你好我欧式打赏比",
                        isdisturb: "false"
                    },
                    {
                        icon: Img,
                        nick: "你真的很春",
                        time: "21:29",
                        recent: "你好我欧式打赏比",
                        isdisturb: "true"
                    },
                    {
                        icon: Img,
                        nick: "你真的很春",
                        time: "21:29",
                        recent: "你好我欧式打赏比",
                        isdisturb: "false"
                    },
                    {
                        icon: Img,
                        nick: "你真的很春",
                        time: "21:29",
                        recent: "你好我欧式打赏比",
                        isdisturb: "false"
                    }
                ]
            }
        },watch:{
          windowH:function(newV,oldV){
            var H=newV;
            $('#mainer').height(H+"px");
            // chatScroll.refresh();
          }
      },computed:{...mapState(['windowH'])},mounted:function(){
            setTimeout(function () {
                chatScroll = new IScroll('#mainer', {
                    scrollX: false,
                    scrollY: true,
                    mouseWheel: true
                });
                document.addEventListener('touchmove', function (e) {
                    e.preventDefault();

                }, ispass.isPassive() ? {
                    capture: false,
                    passive: false
                } : false);
            }, 500);

        },methods:{
        ...mapMutations(['CHAT']),
          chatChange:function(item){
            this.$store.commit('CHAT',item.nick);
          }
      }
    }
</script>

<style scoped>
    #mainer {
        overflow: hidden;
        padding: 0;
        margin: 0;
        position: relative;
    }

    .user_form {
        width: 100%;
        padding: 0;
        margin: 0;
        position: relative;
        padding-top:66px;
    }

    .user_form li {
        list-style: none;
        width: 100%;
        display: flex;
        justify-content: space-around;
        height: 40px;
        align-items: center;
        padding: 8px 0;
        border-bottom: 1px solid #c5c4c4;
    }

    .user_form li .userinfo {
        min-width: 70%;
    }

    .user_form li img {
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 6px;
    }

    .user_form li p {
        margin: 0;
        display: flex;
        justify-content: space-between;
        padding: 4px 0;
    }

    .user_form li .user-title {
        font-size: 16px;
        color: #000000;
    }

    .user_form li .recent_time {
        font-size: 12px;
        color: #c5c4c4;
    }

    .user_form li .recent_content {
        font-size: 12px;
        color: #c5c4c4;
        text-align: left;
    }

    .user_form li .recent_content {
        white-space: nowrap;
        width: 70%;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
