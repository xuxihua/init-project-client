/*
 * @Description: vuex中login状态管理
 * @Version: 1.0
 * @Author: xuxihua
 * @Date: 2020-04-02 16:36:01
 * @LastEditors: xuxihua
 * @LastEditTime: 2020-04-24 16:51:29
 */
import { LoginState } from '@/types/views/login.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'

const namespaced: boolean = true

// =========state==========
const state: LoginState = {
  uid: '',
  username: ''
}

// ==========getter=========
const getters: GetterTree<LoginState, any> = {
  // 强制使用getter获取state
  uid: (state: LoginState) => state.uid,
  username: (state: LoginState) => state.username
}

// ========mutations========
const mutations: MutationTree<LoginState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: LoginState, data: LoginState) {
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
const actions: ActionTree<LoginState, any> = {
  UPDATE_STATE_ASYN({ commit, state: LoginState }, data: LoginState) {
    commit('UPDATE_STATE', data)
  }
}

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
}

