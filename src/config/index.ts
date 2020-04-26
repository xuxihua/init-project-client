/*
 * @Description: 配置文件
 * @Version: 1.0
 * @Autor: xuxihua
 * @Date: 2020-04-02 16:36:01
 * @LastEditors: xuxihua
 * @LastEditTime: 2020-04-23 16:02:25
 */

/** 
 * 线上环境
 */
export const ONLINEHOST: string = 'https://xxx.com'

/** 
 * 本地服务端环境
 */
export const LOCALSERVER: string = 'http://localhost:3000'

/** 
 * 测试环境
 */
export const QAHOST: string = 'http://xxx.com'

/** 
 * 线上mock
 */
export const MOCKHOST: string = 'http://xxx.com'

/** 
 * 是否mock
 */
export const ISMOCK: boolean = true

/**
 * 当前的host  ONLINEHOST | QAHOST | MOCKHOST
 */
export const MAINHOST: string = ONLINEHOST

/**
 * 请求的公共参数
 */
export const conmomPrams: any = {}

/**
 * 忽略登录和注册请求需要token
 */
export const IGNORELINKS: any = {
    login: '/user/login',
    register: '/user/register'
}

/**
 * token在Cookie中存储的天数，默认1天
 */
export const cookieExpires: number = 1
