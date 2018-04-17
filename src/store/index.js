import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex);
const state = {
  code: "",
  activeIndex: 0,
  file: {type: 1, title: "全部文件"},
  toChater: {},
  windowH:0
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
