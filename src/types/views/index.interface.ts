/*
 * @Description: index页类型定义
 * @Version: 1.0
 * @Author: xuxihua
 * @Date: 2020-04-02 16:36:01
 * @LastEditors: xuxihua
 * @LastEditTime: 2020-04-24 16:45:11
 */
// index.Data 参数类型
export interface IndexData {
  pageName: string
}

// VUEX index.State 参数类型
export interface IndexState {
  author?: string,
  uid?: string
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

