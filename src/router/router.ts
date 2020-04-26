/*
 * @Description: 路由跳转
 * @Version: 1.0
 * @Author: xuxihua
 * @Date: 2020-04-02 16:36:01
 * @LastEditors: xuxihua
 * @LastEditTime: 2020-04-23 11:03:02
 */
/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
export default [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: '登录注册页'
    }
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index/index.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: '首页'
    }
  }
]
