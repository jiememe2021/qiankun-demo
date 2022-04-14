/*
 * @Author: Ashley.Liu
 * @Date: 2022-04-11 10:11:12
 * @LastEditTime: 2022-04-11 11:23:54
 * @Description: desc
 */
import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps, start, setDefaultMountApp, initGlobalState } from 'qiankun'
import microApps from './plugins/micro-apps'
import 'nprogress/nprogress.css'
import VueRouter from 'vue-router'
import routes from './router'

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes
})

const instance = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 定义loader方法，loading改变时，将变量赋值给App.vue的data中的isLoading
function loader (loading) {
  if (instance && instance.$children) {
    // instance.$children[0] 是App.vue，此时直接改动App.vue的isLoading
    instance.$children[0].isLoading = loading
  }
}

// 给子应用配置加上loader方法
const apps = microApps.map(item => {
  return {
    ...item,
    loader
  }
})

registerMicroApps(apps, {
  beforeLoad: app => {
    console.log('before load app.name====>>>>>', app.name)
  },
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    }
  ],
  afterMount: [
    app => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
    }
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    }
  ]
})
setDefaultMountApp('/category-app')
// 初始化 state
let state = {
  testCommunication: '123'
}
const actions = initGlobalState(state);
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
Vue.prototype.$GlobalState.state = state
});

Vue.prototype.$GlobalState = {
  onGlobalStateChange: actions.onGlobalStateChange,
  setGlobalState: actions.setGlobalState,
  state
}
console.log('init GLOBAL STATE', Vue.prototype.$GlobalState)

start()