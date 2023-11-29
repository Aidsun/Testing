<template>
	<view id="box">
		<view id="Login_form">
			<view id="name">
				<label for="#">账户：</label>
				<input type="text" placeholder="请输入您的账户或邮箱" v-model="user.username">
			</view>
			<view id="password">
				<label for="#">密码：</label>
				<input type="password" placeholder="请输入您的密码" v-model="user.password">
			</view>
		</view>
		<view id="Transform">
			<navigator url="#" open-type="switchTab">
				<button type="default" @click="_login">登录</button>
			</navigator>
			<navigator url="/pages/enroll/enroll">
				<button type="default">注册</button>
			</navigator>
		</view>
	</view>
</template>

<script setup>
	import {
		reactive
	} from 'vue';
	let user = reactive({
		"username": "",
		"password": ""
	});

	const _login = () => {
		uni.getStorage({
			key: 'user',
			success: function(res) {
				let _user = res.data;
				if (user.username == "" || user.password == "") {
					uni.showToast({
						title: '账号密码不能为空格',
						icon: 'error'
					})
				} else if (user.username !== _user.username || user.password !== _user.password) {
					uni.showToast({
						title: '账号或密码错误',
						icon: 'error'
					})
				} else {
					uni.showToast({
						title: '登录成功',
						icon: 'success'
					})
					uni.switchTab({
						url: '/pages/dianpu/dianpu'
					})
				}

			},
			fail:(err) =>{
				uni.showToast({
					title: '账号不存在',
					icon: 'error'
				})
			}
			

		})
	}
</script>

<style lang="scss">
	#Login_form {
		width: 100%;
		height: 400rpx;
		margin-top: 150rpx;
		display: inline-block;
		justify-content: center;

		#name,
		#password {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 70rpx 0rpx;
			font-size: 30rpx;
			font-family: "宋体";

			input {
				height: 50rpx;
				padding-left: 10rpx;
			}
		}
	}

	#Transform {
		width: 100%;
		// background-color: red;
		width: 100%;
		height: 200rpx;
		display: flex;
		justify-content: space-evenly;

		navigator {
			width: 200rpx;

			button {
				background-color: deepskyblue;
			}
		}
	}
</style>