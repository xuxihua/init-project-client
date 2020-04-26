<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xuxihua
 * @Date: 2020-04-02 16:36:01
 * @LastEditors: xuxihua
 * @LastEditTime: 2020-04-21 17:21:07
 -->
<template>
	<div class="login-wrap">
		<el-form status-icon class="demo-ruleForm"
			:model="data.pageStatus === 'login' ? data.loginForm : data.registerForm"
			:rules="data.pageStatus === 'login' ? data.loginRules : data.registerRules" 
			:ref="data.pageStatus === 'login' ? 'loginForm' : 'registerForm'">
			<h1>{{ data.pageStatus === 'login' ? '登录' : '注册' }}</h1>
			<template v-if="data.pageStatus === 'login'">
				<el-form-item label="账号" prop="username">
					<el-input type="text" v-model="data.loginForm.username" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password" ref="loginPass">
					<el-input type="password" v-model="data.loginForm.password" autocomplete="off"></el-input>
				</el-form-item>
			</template>
			<template v-else>
				<el-form-item label="账号" prop="username">
					<el-input type="text" v-model="data.registerForm.username" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input type="password" v-model="data.registerForm.password" autocomplete="off"></el-input>
				</el-form-item>
			</template>
			<el-form-item v-if="data.pageStatus === 'register'" label="再次输入密码" prop="checkPass">
				<el-input type="password" v-model="data.registerForm.checkPass" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm(data.pageStatus === 'login' ? 'loginForm' : 'registerForm')">提交</el-button>
				<el-button type="warning" @click="resetForm(data.pageStatus === 'login' ? 'loginForm' : 'registerForm')">重置</el-button>
			</el-form-item>
			<a href="javascript:;" @click="changePageStatus()">{{ data.pageStatus === 'login' ? '未有账号，去注册' : '已有账号，去登录' }}</a>
		</el-form>
	</div>
</template>

<script lang="ts" src="./login.ts"></script>

<style lang="scss">
	@import "./login.scss";
</style>

