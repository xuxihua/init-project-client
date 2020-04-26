/*
 * @Description: login页请求接口调用源
 * @Version: 1.0
 * @Autor: xuxihua
 * @Date: 2020-04-02 16:36:00
 * @LastEditors: xuxihua
 * @LastEditTime: 2020-04-23 14:08:03
 */
import Api from '@/utils/request'
import requestConfig from '@/config/requestConfig'

export const getData = () => {
  return Api(requestConfig.getData)
}

export const userLogin = (data: any) => {
  return Api(requestConfig.userLogin, data)
}

export const userRegister = (data: any) => {
  return Api(requestConfig.userRegister, data)
}