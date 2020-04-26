/*
 * @Description: 首页
 * @Version: 1.0
 * @Author: xuxihua
 * @Date: 2020-04-02 16:36:01
 * @LastEditors: xuxihua
 * @LastEditTime: 2020-04-25 14:12:35
 */
import { Component, Vue } from "vue-property-decorator"
import { Getter, Action, namespace } from "vuex-class"
import { IndexData } from '@/types/views/index.interface'
import * as indexApi from '@/api/index'
import router from '@/router/router'
// import {  } from "@/components" // 组件

// vuex module namespace
const IndexModule = namespace('Index')

@Component({})
export default class About extends Vue {
  // Getter
  @IndexModule.Getter('author') author

  // Action
  @IndexModule.Action('GET_DATA_ASYN') GET_DATA_ASYN

  // data
  data: IndexData = {
    pageName: '这是首页'
  }

  created() {
    // this.GET_DATA_ASYN()
    indexApi.getData().then((res) => {
      if (res.code === 0) {
        // 消息提示
        this.$message.success(res.data.msg)
      } else {
        // 消息提示
        this.$message.error(res.data.msg)
        this.$router.replace({name: 'login'})
      }
    })
  }

  activated() {
    // 
  }

  mounted() {
    //
  }

  // 初始化函数
  init() {
    //
  }

}
