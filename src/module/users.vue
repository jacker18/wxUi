<template>
    <div class="concat_list" > <el-col :span="12" id="chat_list">
        <el-menu id="userList" :default-active="defaultActive" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <template v-for="item in List">
            <el-submenu :index="item.Index">
                <template slot="title">
                    <!--<i class="el-icon-location"></i>-->
                    <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
                    <span>{{item.title}} </span>
                    <b>5</b>
                </template>
                <el-menu-item-group class="group-title">
                    <template slot="title" >分组一</template>
                    <template v-for="item2 in item.list">
                    <el-menu-item :index="item.Index+'-'+item2.Index"><img class="one_icon" :src="item2.icon" alt=""><span>{{item2.title}}</span></el-menu-item>
                        </template>

                </el-menu-item-group>
                <el-menu-item-group class="group-title">
                    <template slot="title" >分组二</template>
                    <template v-for="item2 in item.list">
                        <el-menu-item :index="item.Index+'-'+item2.Index"><img class="one_icon" :src="item2.icon" alt=""><span>{{item2.title}}</span></el-menu-item>
                    </template>

                </el-menu-item-group>
                <el-menu-item-group class="group-title">
                    <template slot="title" >分组三</template>
                    <template v-for="item2 in item.list">
                        <el-menu-item :index="item.Index+'-'+item2.Index"><img class="one_icon" :src="item2.icon" alt=""><span>{{item2.title}}</span></el-menu-item>
                    </template>

                </el-menu-item-group>
                <el-menu-item-group class="group-title">
                    <template slot="title" >分组四</template>
                    <template v-for="item2 in item.list">
                        <el-menu-item :index="item.Index+'-'+item2.Index"><img class="one_icon" :src="item2.icon" alt=""><span>{{item2.title}}</span></el-menu-item>
                    </template>
                </el-menu-item-group>
              </el-submenu>
            </template>
        </el-menu>
    </el-col>
    </div>
</template>

<script>
    // import'element-ui/lib/theme-chalk/index.css'
    import IScroll from 'iscroll'
    import Img from '../assets/img/timg.jpg'
    import * as ispass from "../assets/js/jjs/libjs/ispassive"
    import {mapState} from 'vuex'
var listScroll={};
    export default {
        name: "users",methods: {
            handleOpen(key, keyPath) {
               var Active=''+key+"-1";
               this.changeActive=key;
               console.log(Active,"88282");
                this.defaultActive=Active;
                setTimeout(function(){
                    listScroll.refresh()
                },500)

            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
                setTimeout(function(){
                    listScroll.refresh()
                },500)
            }
        },data(){
            return {
               List:[{
                   title:'群聊',
                   Index:'1',
                   list:[{icon:Img,title:"张三1",Index:'1'},{icon:Img,title:'李四',Index:'2'},{icon:Img,title:'王二',Index:'3'}]

               },{
                   title:'公众号',
                   Index:'2',
                   list:[{icon:Img,title:"张三1",Index:'1'},{icon:Img,title:'李四',Index:'2'},{icon:Img,title:'王二',Index:'3'}]

               },{
                   title:'联系人',
                   Index:'3',
                   list:[{icon:Img,title:"张三1",Index:'1'},{icon:Img,title:'李四',Index:'2'},{icon:Img,title:'王二',Index:'3'}]

               }],
                defaultActive:"1-1",
                changeActive:"1"
            }
        },watch:{
          windowH:function(newV,oldV){
            var H=newV;
            $('.main-info .el-col-12').height(H-140+"px");
            setTimeout(function(){
              listScroll.refresh()
            },100)

          }
      },computed:{...mapState(['windowH'])},mounted:function(){
          var self=this;
            setTimeout(function () {
              var H=self.windowH;
              $('.main-info .el-col-12').height(H-140+"px")
               listScroll = new IScroll('#chat_list', {
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

        }

    }
</script>

<style lang="scss" scoped>

    /*.el-menu-item-group__title{color:#000000!important;}*/
</style>
<style>
    .concat_list{overflow: hidden;}
    .main-info .el-col-12{width:100%;position:relative;overflow: hidden;overflow: hidden;height:100%;padding-top: 70px;}
    .main-info ul{border:0;width:100%;overflow: hidden;}
    .main-info .el-submenu{width:100%;border-bottom:1px solid #dddddd;}
    .el-menu-item-group__title{
        color: #dddddd;
        padding: 10px 10px!important;
        text-align: left;
        font-size: 16px;
        text-indent: 8px;
        border-bottom: 1px solid #dddddd;
        width: 80%;
        margin: auto;
        margin-bottom: 20px;
        float: right;

    }
    .el-menu-item{display: flex;justify-content: flex-start;align-items: center;}
    .el-menu-item img{display:inline-block;width:35px;height:35px;border-radius: 6px;margin-left: 20px;}
    .el-menu-item span{display:inline-block;margin-left: 10px;}
    .el-submenu__icon-arrow{left:20px;font-size: 18px;right:initial;}
    .el-submenu__title{height:36px;line-height:36px;}
    .el-submenu__title b{float: right;margin-right:20px;font-size:16px;color:#909399;}
</style>
