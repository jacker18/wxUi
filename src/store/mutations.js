import {CHAT,LOGIN,ACTIVE,FILE,CHATER,HEIGHT} from "./motations-type.js";
import api from "../assets/api/api"
export default {
    [CHAT](state,code){
       state.code=code.code;
    },
    [ACTIVE](state,active){
        state.activeIndex=active;
    },
  [FILE](state,file){
      state.file=file;
  },
[CHAT](state,user){
    state.toChater=user;
    // console.log("发送成功")
},[HEIGHT](state,height){
      state.windowH=height;
  }
}
