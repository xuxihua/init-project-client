/*
 * @Description: index页请求接口调用源
 * @Version: 1.0
 * @Author: xuxihua
 * @Date: 2020-04-02 16:36:00
 * @LastEditors: xuxihua
 * @LastEditTime: 2020-04-23 11:49:29
 */
import Api from '@/utils/request'
import requestConfig from '@/config/requestConfig'

export const getData = () => {
  return Api(requestConfig.getData)
}

