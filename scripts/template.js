/*
 * @Description: 页面快速生成脚本
 * @Detail
 *    1. 定义vue 页面模板：src/views/name/name.vue
 *    2. 定义ts 模板：src/views/name/name.ts
 *    3. 定义scss 模版：src/views/name/name.scss
 *    4. 定义interface 模版：src/types/views/name.ts
 *    5. 定义vuex 模版：src/store/module/name.ts
 *    6. 定义api 接口模版：src/api/name.ts
 *    7. 使用process进行文件操作
 */
const fs = require('fs')
const path = require('path')
const basePath = path.resolve(__dirname, '../src')

const dirName = process.argv[2] // 获取需要生成当前的template名称
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1) // 首字母大写
if (!dirName) {
  console.log('文件夹名称不能为空！')
  console.log('示例：npm run tep ${capPirName}')
  process.exit(0)
}

/**
 * @msg: vue页面模版
 */
const VueTep = `<template>
  <div class="${dirName}-wrap">
    {{data.pageName}}
  </div>
</template>

<script lang="ts" src="./${dirName}.ts"></script>

<style lang="scss">
  @import './${dirName}.scss'
</style>

`

// ts 模版
const tsTep = `import { Component, Vue } from "vue-property-decorator"
import { Getter, Action, namespace } from "vuex-class"
import { ${capPirName}Data } from '@/types/views/${dirName}.interface'
// import {  } from "@/components" // 组件

// vuex module namespace
const ${dirName}Module = namespace('${capPirName}')

@Component({})
export default class About extends Vue {
  // Getter
  // @${dirName}Module.Getter('author') author
  
  // Action
  // @${dirName}Module.Action('UPDATE_STATE_ASYN') UPDATE_STATE_ASYN

  // data
  data: ${capPirName}Data = {
    pageName: '${dirName}'
  }

  created() {
    
  }
  
  activated() {
    
  }

  mounted() {
    
  }

  // 初始化函数
  init() {
    
  }

  // ==============页面行为================
    
}
`

// scss 模版
const scssTep = `@import "@/assets/scss/variables.scss";

.${dirName}-wrap {
  width: 100%;
}
`

// interface 模版
const interfaceTep = `// ${dirName}.Data 参数类型
export interface ${capPirName}Data {
  pageName: string
}

// VUEX ${dirName}.State 参数类型
export interface ${capPirName}State {
  author?: string
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

`

// vuex 模版
const vuexTep = `import { ${capPirName}State } from '@/types/views/${dirName}.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as ${capPirName}Api from '@/api/${dirName}'

// ==========state============
const state: ${capPirName}State = {
  author: ''
}

// =========getter============
const getters: GetterTree<${capPirName}State, any> = {
  // 强制使用getter获取state
  author: (state: ${capPirName}State) => state.author
}

// =========mutations==========
const mutations: MutationTree<${capPirName}State> = {
  // 更新state都用该方法
  UPDATE_STATE(state: ${capPirName}State, data: ${capPirName}State) {
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

// ==========actions===========
const actions: ActionTree<${capPirName}State, any> = {
  UPDATE_STATE_ASYN({ commit, state: ${capPirName}State }, data: ${capPirName}State) {
    commit('UPDATE_STATE', data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

`

// api 接口模版
const apiTep = `import Api from '@/utils/request'

export const getData = (data) => {
  return Api.getData(data)
}

`

fs.mkdirSync(`${basePath}/views/${dirName}`) // mkdir

process.chdir(`${basePath}/views/${dirName}`) // cd views
fs.writeFileSync(`${dirName}.vue`, VueTep) // vue 
fs.writeFileSync(`${dirName}.ts`, tsTep) // ts
fs.writeFileSync(`${dirName}.scss`, scssTep) // scss

process.chdir(`${basePath}/types/views`); // cd types
fs.writeFileSync(`${dirName}.interface.ts`, interfaceTep) // interface

process.chdir(`${basePath}/store/module`); // cd store
fs.writeFileSync(`${dirName}.ts`, vuexTep) // vuex

process.chdir(`${basePath}/api`); // cd api
fs.writeFileSync(`${dirName}.ts`, apiTep) // api

process.exit(0)