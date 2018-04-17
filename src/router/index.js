import Vue from 'vue'
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
// import HelloWorld from '@/components/main'
// // // import map from '@/components/map'
// // // import chat from '@/components/chat'//直接引入组建会比较慢。打包也会很慢。应该按需加载好
const login = r => require.ensure([], () => r(require('@/components/main')), 'login')//按需加载组件
const chat = r => require.ensure([], () => r(require('@/components/chat')), 'chat')
const map = r => require.ensure([], () => r(require('@/components/map')), 'map')
Vue.use(ECharts)
export default [
    {path: '/', component: login},
    {path: "/chat", component: chat},
    {path: "/map", component: map}
]
