/*
 * @Description: 
 * @Version: 1.0
 * @Autor: xuxihua
 * @Date: 2020-04-02 16:36:01
 * @LastEditors: xuxihua
 * @LastEditTime: 2020-04-24 15:34:42
 */
// login.Data 参数类型
export interface LoginData {
  pageName: string,
  pageStatus: string,
  loginForm: {
    username: string,
    password: string
  },
  loginRules: {
    username: any[],
    password: any[]
  },
  registerForm: {
    username: string,
    password: string,
    checkPass: string
  },
  registerRules: {
    username: any[],
    password: any[],
    checkPass: any[]
  }
}

// VUEX login.State 参数类型
export interface LoginState {
  uid: string,
  username: string
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

