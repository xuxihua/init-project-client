/*
 * @Description: vuex状态管理
 * @Version: 1.0
 * @Author: xuxihua
 * @Date: 2020-04-02 16:36:01
 * @LastEditors: xuxihua
 * @LastEditTime: 2020-04-24 17:20:39
 */
import Vue from 'vue'
import Vuex from 'vuex'

// modules
import Login from './module/login'
import Index from './module/index'

Vue.use(Vuex)

export default new Vuex.Store({
  // =========state===========
  state: {
    
  },

  // =========mutations===========
  mutations: {

  },

  // =========actions===========
  actions: {

  },

  // =========modules===========
  modules: {
    Login,
    Index
  }
})
