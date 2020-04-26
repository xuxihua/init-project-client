/*
 * @Description: vuex的index模块
 * @Version: 1.0
 * @Author: xuxihua
 * @Date: 2020-04-02 16:36:01
 * @LastEditors: xuxihua
 * @LastEditTime: 2020-04-24 16:51:20
 */
import { IndexState } from '@/types/views/index.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as IndexApi from '@/api/index'

const namespaced: boolean = true

// =========state==========
const state: IndexState = {
  author: '',
  uid: ''
}

// ==========getter=========
const getters: GetterTree<IndexState, any> = {
  // 强制使用getter获取state
  author: (state: IndexState) => state.author
}

// ========mutations========
const mutations: MutationTree<IndexState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: IndexState, data: IndexState) {
    for (const key in state) {
      for (const key2 in data) {
        if (key === key2) {
          state[key] = data[key2]
        } else if (key === 'uid') {
          state[key] = data['_id']
        }
      }
    }
  }
}

// =========actions===========
const actions: ActionTree<IndexState, any> = {
  UPDATE_STATE_ASYN({ commit }, data: IndexState) {
    commit('UPDATE_STATE', data)
  },
  GET_DATA_ASYN() { // 测试调用接口
    IndexApi.getData()
  }
}

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
}

