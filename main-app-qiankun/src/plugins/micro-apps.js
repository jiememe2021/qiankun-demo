// 微应用管理
import store from '../store'

const microApps = [
  {
    name: 'category-app',
    entry: '//localhost:7777/subapp/category-app/',
    activeRule: '/category-app'
  },
  {
    name: 'vue3-app',
    entry: '//localhost:7779/subapp/vue3-app/',
    activeRule: '/vue3-app'
  }
]

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#category-app', // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  }
})

export default apps