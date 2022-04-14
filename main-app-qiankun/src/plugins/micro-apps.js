/*
 * @Author: Ashley.Liu
 * @Date: 2022-04-11 10:11:12
 * @LastEditTime: 2022-04-11 11:02:30
 * @Description: desc
 */
// 微应用管理
import store from '../store'

const microApps = [
  {
    name: 'category-app',
    entry: '//localhost:7777/subapp/category-app/',
    activeRule: '/category-app'
  }
]

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#micro-app', // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  }
})

export default apps