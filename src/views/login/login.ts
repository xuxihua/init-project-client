/*
 * @Description: 登录页面
 * @Version: 1.0
 * @Author: xuxihua
 * @Date: 2020-04-02 16:36:01
 * @LastEditors: xuxihua
 * @LastEditTime: 2020-04-24 17:38:24
 */
import { Component, Vue } from "vue-property-decorator"
import { Getter, Action, namespace } from "vuex-class"
import { LoginData } from '@/types/views/login.interface'
import { Test } from "@/components" // 组件
import * as loginApi from '@/api/login'
import { setToken } from '@/utils/common'
import { mapActions } from 'vuex'

// vuex module namespace
const loginModule = namespace('Login')

@Component({
    components: {
        // Test
    }
})
export default class About extends Vue {
    public $refs!: {
        resetFields: HTMLFormElement,
        validate: HTMLFormElement
    }

    // Getter
    @loginModule.Getter('uid') uid

    // Action
    @loginModule.Action('UPDATE_STATE_ASYN') UPDATE_STATE_ASYN

    // data
    data: LoginData = {
        pageName: 'login',
        pageStatus: 'login',
        loginForm: {
            username: '',
            password: ''
        },
        loginRules: {
            username: [
                { required: true, trigger: 'blur', message: '请输入用户名' },
                { min: 4, max: 16, message: '长度在 4 到 16 个字符', trigger: 'blur' }
            ],
            password: [
                { required: true, trigger: 'blur', message: '请输入密码' },
                { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
            ]
        },
        registerForm: {
            username: '',
            password: '',
            checkPass: ''
        },
        registerRules: {
            username: [
                { required: true, trigger: 'blur', message: '请输入用户名' },
                { min: 4, max: 16, message: '长度在 4 到 16 个字符', trigger: 'blur' }
            ],
            password: [
                { required: true, trigger: 'blur', message: '请输入密码' },
                { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
            ],
            checkPass: [
                { validator: this.validatePass, trigger: 'blur' }
            ]
        }
    }

    created() {
        //
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

    // ===========页面行为============
    /**
     * @description: 表单校验
     * @param {rule: any, value: string, callback: function} 
     * @return: none
     * @author: xuxihua
     */
    private validatePass(rule: any, value: string, callback: (res?: any) => {}): void {
        if (value === '') {
            callback(new Error('请再次输入密码'));
        } else if (value !== this.data.registerForm.password) {
            callback(new Error('两次输入密码不一致'))
        } else {
            callback();
        }
    }

    /**
     * @description: 切换页面状态
     * @param {} 
     * @return: none
     * @author: xuxihua
     */    
    private changePageStatus(): void {
        this.data.pageStatus === 'login' ? this.data.pageStatus = 'register' : this.data.pageStatus = 'login';
    }

    /**
     * @description: 重置输入信息
     * @param {formName: string} 
     * @return: none
     * @author: xuxihua
     */
    private resetForm(formName: string): void {
        this.$refs[formName].resetFields();
    }

    /**
     * @description: 登录/注册表单提交
     * @param {formName: string} 
     * @return: none
     * @author: xuxihua
     */
    private submitForm(formName: string): void {
        if (formName === 'loginForm') {
            this.$refs[formName].validate((valid: any) => {
                if (valid) {
                    loginApi.userLogin(this.data.loginForm).then((res: any) => {
                        console.log(res)
                        if (res.code === 0) {
                            // 更新state
                            this.UPDATE_STATE_ASYN(res.data.data)
                            // 存储用户信息，username和uid存到localStore，token存到cookie
                            localStorage.setItem('username', 'res.data.data.username')
                            localStorage.setItem('uid', 'res.data.data._id')
                            setToken(res.data.data.token)
                            // 消息提示
                            this.$message.success(res.data.msg)
                            // 路由跳转到首页
                            this.$router.push({name: 'index'})
                            console.log(this.$store.state)
                            console.log(this.uid)
                        } else if (res.code === -1) {
                            this.data.pageStatus = 'register'
                            this.$message.error(res.data.msg)
                        } else {
                            this.$message.error(res.data.msg)
                        }
                    }).catch((error: Error) => {
                        console.log(error)
                    })
                } else {
                    this.$message.error('请按照正确的格式输入信息！')
                    return false;
                }
            })
        } else {
            this.$refs[formName].validate((valid: any) => {
                if (valid) {
                    loginApi.userRegister(this.data.registerForm).then((res: any) => {
                        console.log(res)
                        if (res.code === 0) {
                            // 更新state
                            this.UPDATE_STATE_ASYN(res.data.data)
                            // 存储用户信息，username和uid存到localStore，token存到cookie
                            localStorage.setItem('username', 'res.data.data.username')
                            localStorage.setItem('uid', 'res.data.data._id')
                            setToken(res.data.data.token)
                            // 消息提示
                            this.$message.success(res.data.msg)
                            // 路由跳转到首页
                            this.$router.push({name: 'index'})
                            console.log(this.$store.state)
                            console.log(this.uid)
                        } else {
                            this.$message.error(res.data.msg)
                        }
                    }).catch((error: Error) => {
                        console.log(error)
                    })
                } else {
                    this.$message.error('请按照正确的格式输入信息！')
                    return false;
                }
            })
        }
    }
}
