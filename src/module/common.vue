<template>
  <div class="option_list">
    <div class="screen_option"><span @click="taboption(item)" v-for="item in screenOption" :style="'background:'+item.color+';'"><i
      class="icon iconfont" :class="item.icon"></i></span></div>
    <div class="option"><span class="icon"><img src="../assets/img/timg.jpg" alt="头像"></span>
      <template v-for="(item,index) in optionsList"><span @click="changeActive(item,index)"><i class="icon iconfont" :class="[item.icon,{active:item.active}]"></i></span>
      </template>
    </div>
    <span class="setting"><i class="icon iconfont icon-setting"></i></span>
  </div>
</template>
<script>
  import '../assets/font/iconfont.css';
  import {mapState, mapMutations} from 'vuex'
  export default {
    name: "common",
    props:['Option'],
    data() {
      return {
        screenOption: [{option: 'close', color: "#c31818", icon: "icon-icon_close"}, {
          option: 'original',
          color: "#dddddd",
          icon: "icon-zuixiaohua"
        }, {option: 'fullscreen', color: "#2fca42", icon: "icon-weibiaoti11"}],
        optionsList: [{icon: "icon-liaotianjilu", active: true}, {
          icon: "icon-yonghuliebiao",
          active: false
        }, {icon: "icon-lifangti2", active: false}]

      }
    }, methods: {
      ...mapMutations(['ACTIVE']),
      changeActive(item, index) {
        var self = this;
        for (var i = 0; i < this.optionsList.length; i++) {
          this.optionsList[i].active = false;
          if (i == this.optionsList.length - 1) {
            item.active = true;
            this.$store.commit("ACTIVE", index)
          }
        }


      },taboption:function(item){
        this.$emit("update:Option",item.option)
      }
    },watch:{
      activeIndex:function(newV,oldV){
        for(var i=0;i<this.optionsList.length;i++){
          this.optionsList[i].active=false;
        }
        this.optionsList[newV].active=true;
      }
    },
    computed: {
      ...mapState(['activeIndex'])
    },
    mounted:function(){
    }
  }
</script>

<style lang="scss" scoped>
  .option_list {
    background: rgba(0, 0, 0, 0.8);
    position: relative;
    width: 70px;
    .screen_option {
      width: 100%;
      padding: 15px 0;
      display: flex;
      justify-content: space-around;
      width: 70px;
      span {
        display: inline-block;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        cursor: pointer;
        text-align: center;
        i{display:none;font-size: 12px;}
      }
      &:hover{
        span{
          display: inline-block;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          cursor: pointer;
          text-align: center;
          i{font-size: 12px;display:block;width:15px;height:15px;line-height: 15px;}
        }
      }
    }
    .option {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      flex-direction: column;
      span {
        display: block;
        width: 40px;
        height: 40px;
        color: #ffffff;
        margin: 10px auto;

        img {
          display: block;
          width: 100%;
          hieght: 100%;
          magrin: auto;
          border-radius: 6px;
          cursor: pointer;
        }
        i {
          display: block;
          width: 100%;
          height: 100%;
          margin: auto;
          font-size: 30px;
          cursor: pointer;
          line-height: 40px;
        }
        i.active {
          color: #28cc14;
        }
      }
      span:first-child {
        margin-top: 20px;
      }
    }
    & > span {
      display: block;
      width: 60px;
      height: 60px;
      color: #ffffff;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      bottom: 20px;
      line-height: 40px;
      cursor: pointer;
      i {
        display: block;
        width: 100%;
        hieght: 100%;
        margin: auto;
        font-size: 30px;
        line-height: 40px;
      }
    }
  }

</style>
