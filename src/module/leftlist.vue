<template>
    <el-aside width="30%" class="left_list">
        <transition name="el-zoom-in-top">
            <el-container v-show="search">
                <el-main>
                    <div class="main-info">
                      <div class="search_container">
                        <div class="search_for" @click="showfalse">
                            <span>搜索</span><i class="el-icon-search"></i></div>
                      </div>
                      <users v-if="module==1"></users>
                      <chatlist v-else-if="module==0"></chatlist>
                      <Files v-else="module==2"></Files>
                    </div>
                </el-main>

            </el-container>
        </transition>
        <transition name="el-zoom-in-bottom">
            <el-container class="search_container" v-show="!search">
                <el-main class="search_message">
                    <div class="search_top"><input type="text" class="search_message_input"><span @click="showfalse" class="quit">取消</span>
                    </div>
                    <div class="search_key"><span v-for="item in key" v-text="item"></span></div>
                </el-main>
            </el-container>
        </transition>
        <!--<transition name="el-zoom-in-top"><div class="search_for" v-show="!search" @click="showfalse">lkkkkk</div></transition>-->
    </el-aside>
</template>

<script>
    import {mapState} from 'vuex'
    import users from '../module/users';
    import Files from '../module/Files';
    import chatlist from '../module/chatlist';
    import offsetMove from '../assets/js/jjs/libjs/borderchange';
    // const userList={users}

    export default {
        name: "userlist",
        data() {
            return {
                search: true,
                key: ["你", "我", "他", "你", "我", "他", "你", "我", "他"],
                module: 0,
              currents:{}
            }
        },
        methods: {
            showfalse: function () {
                console.log("我被点击了")
                this.search = !this.search;
            }
        },
        watch: {
            active: function (newV, oldV) {
            },
            activeIndex: function (newV, oldV) {
              this.module=newV;
              if(newV==2){
             this.$store.commit('FILE',{type:0,title:"全部收藏"})
              }
            }
        },
        computed: {
            ...mapState(['activeIndex','file'])
        }, mounted: function () {


        },
        components: {
             users,
          Files,
          chatlist
        },
        mounted() {
            this.active = this.activeIndex;
            this.module=this.activeIndex;
        }
    }
</script>

<style lang="scss" scoped>
    .search_message {
        background: #ffffff;
        height: 600px;
        padding: 30px 0;
        overflow: hidden;
    }

    .search_key {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        span {
            cursor: pointer;
            display: block;
            width: auto;
            margin: 10px 46px;
            color: #0fe03d;
        }
    }

    .quit {
        display: inline-block;
        margin-left: 10px;
        color: #dddddd;
        cursor: pointer;
    }

    .el-aside .el-footer {
        width: 100%;
        border-top: 1px solid #c5c4c4;
        padding: 0;
        height: 36px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: #ffffff;
    }

    .el-aside .el-footer .el-col {
        height: 36px;
        line-height: 36px;
        cursor: pointer;
        text-align: center;
    }

    .el-aside .el-footer .icon {
        display: inline-block;
        width: 18px;
        height: 18px;
        font-size: 18px;
        line-height: 18px;
        color: #c5c4c4;
    }

    .el-aside .el-footer .el-col span {
        font-size: 12px;
        color: #c5c4c4;
        margin-left: 4px;
        vertical-align: bottom;
    }

    .el-aside .el-footer .el-col.active .icon {
        color: #0fe03d;
    }

    .el-aside .el-footer .el-col.active span {
        color: #0fe03d;
    }

    .el-aside .el-footer .el-col:hover .icon {
        color: #0fe03d;
    }

    .el-aside .el-footer .el-col:hover span {
        color: #0fe03d;
    }

    .el-zoom-in-top-enter-active, .el-zoom-in-top-leaver-active, .el-zoom-in-bottom-enter-active, .el-zoom-in-bottom-leaver-active {
        transition: all 1s;
    }

</style>
