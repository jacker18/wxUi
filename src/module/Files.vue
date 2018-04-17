<template>
  <div class="files">
    <div class="add_note"><span>新增笔记</span></div>
    <div class="files_list">
      <template v-for="(item,index) in filename">

        <span @click="choosefile(item,index)"><i class="icon iconfont" :class="item.icon"></i><b
          v-text="item.title"></b></span>
      </template>

    </div>
    <div class="mask">
      <span @click="screen"><i class="icon iconfont icon-icon--"></i><b v-text="('标签')"></b></span>
    </div>
  </div>
</template>

<script>
  import Img from '../assets/img/timg.jpg'
  import '../assets/font/iconfont.css';
  import {mapState, mapMutations} from 'vuex';
  export default {
    name: "files",
    data() {
      return {
        filename: [{title: "全部收藏", icon: "icon-tianjia"}, {title: "笔记", icon: "icon-icon-"}, {
          title: "文件",
          icon: "icon-wenjian"
        }, {title: "相册", icon: "icon-xiangce"}, {title: "链接", icon: "icon-lianjie"}],
        data: [{type: 1, html: Img}, {type: 2, html: "movie"}, {type: 3, html: "jissjijijsj"}, {
          type: 4,
          html: "https://zhuanlan.zhihu.com/p/33642051?utm_source=wechat_session&utm_medium=social"
        }]
      }
    },
    computed: {
      ...mapState(['file'])

    }, methods: {
      choosefile(item, index) {
        var file = {};
        file.type = index;
        file.title = item.title;
        this.$store.commit("FILE", file)
      }, ...mapMutations(['FILE']),
      screen() {
        var file = {};
        file.type = 6;
        file.title = "标签";
        this.$store.commit("FILE", file)
      }, addFile: function () {

      }
    }
  }
</script>

<style lang="scss">
  .files {
    width: 100%;
    div {
      width: 100%;
      span {
        /*display: block;*/
        width: 100%;
        height: 36px;
        line-height: 36px;
        display: flex;
        justify-content: flex-start;
        i {
          display: inline-block;
          width: 35px;
          height: 35px;
          font-size: 24px;
          line-height: 35px;
          margin-left: 20px;
        }
        b {
          display: inline-block;
          font-weight: 400;
          margin-left: 10px;

        }
        &:hover {
          cursor: pointer;
          background: #dddddd;
          transition: all 0.5s;
        }
      }
    }
    .mask {
      border-top: 1px solid #dddddd;
      padding-top: 10px;
    }
    .add_note {
      padding-top: 70px;
      padding-bottom: 20px;
      text-align: center;
      font-size: 18px;
      span {
        display: block;
        width: 70%;
        margin: auto;
        border: 1px solid #dddddd;
        text-align: center;
        border-radius: 6px;
        color: #000;
        line-height: 38px;
      }
    }

  }

</style>
