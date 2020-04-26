/*
 * @Description: api请求接口配置
 * @Version: 1.0
 * @Author: xuxihua
 * @Date: 2020-04-02 16:36:01
 * @LastEditors: xuxihua
 * @LastEditTime: 2020-04-25 14:24:25
 */
import { LOCALSERVER } from "@/config/index"

export default {
  // 测试get请求接口
  getData: { 
    baseURL: LOCALSERVER,
    url: '/home',
    method: 'GET'
  },
  // 用户登录
  userLogin: {
    baseURL: LOCALSERVER,
    url: '/user/login',
    method: 'POST'
  }, 
  // 用户注册
  userRegister: {
    baseURL: LOCALSERVER,
    url: '/user/register',
    method: 'POST'
  },
}