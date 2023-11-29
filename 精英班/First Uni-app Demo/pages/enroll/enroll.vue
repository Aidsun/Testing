<template>
	<view id="box">
		<view id="enroll_form">
			<view id="name">
				<label for="#">手机号：</label>
				<input type="text" placeholder="请输入您的联系方式" v-model="user.username">
			</view>
			<view id="password">
				<view>
					<label for="#">密码：</label>
					<input id="newpassword" type="password" placeholder="请输入您的密码" v-model="user.password">
				</view>
				<view>
					<label for="#">确认密码：</label>
					<input id="repeatpassword" type="password" placeholder="请再次输入您的密码" v-model="user.password">
				</view>
			</view>
			<view id="yzm">
				<!-- 输入框 -->
				<input type="text" id="ipt" placeholder="请输入验证码" v-model="iptValue">
				<!-- 验证码画布 -->
				<view>
					<canvas canvas-id="captcha" :style="{width:canvasW+'px',height:canvasH+'px'}"></canvas>
					<a href="javascript:;" @click="clearCode">看不清？换一张</a>
				</view>
			</view>


		</view>
		<view id="Transform">
			<navigator url="/pages/login/login" >
				<button type="default" @click="_register">注册</button>
			</navigator>
		</view>
	</view>
</template>

<script setup>
	import {
		onMounted,
		reactive,
		ref
	} from "vue"
	// 画布的宽度
	let canvasW = ref(100);
	//画布的高度
	let canvasH = ref(50);
	// 验证码答案
	let code = ref('');
	// 封装验证码函数
	const clearCode = () => {
		// 生成随机数
		const randomNum = (min, max) => {
			return Math.floor(Math.random() * (max - min + 1) + min)
		}
		// 生成随机颜色
		const randomColor = (min, max) => {
			let r = randomNum(min, max);
			let g = randomNum(min, max);
			let b = randomNum(min, max);
			return `rgb(${r},${g},${b})`
		}
		// 创建画笔
		const ctx = uni.createCanvasContext('captcha');
		// 设置绘制属性，填充颜色
		ctx.fillStyle = randomColor(10, 100);
		// 绘制矩形
		ctx.fillRect(0, 0, canvasW.value, canvasH.value);
		// 将之前在绘图上下午的描述（样式，路径）绘制出来
		// 验证码内容
		let codeArr = [
			0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
			'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
			'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
		];
		// 将验证码答案清空(初始化)
		code.value = '';
		// 生成验证码内容
		for (let i = 0; i < 4; i++) {
			// 在内容中随机取样
			let c = codeArr[randomNum(0, codeArr.length - 1)];
			// 随机字体大小
			let _fontSize = randomNum(18, 32);
			// 随机旋转角度
			let _fontDeg = randomNum(-30, 30);
			// 设置绘制字体
			ctx.font = _fontSize + 'px Arial';
			// 顶部对齐
			ctx.textBaseline = 'top';
			// 字体颜色随机
			ctx.fillStyle = randomColor(110, 200);
			// 保存画布当前的状态
			ctx.save();
			// 偏移量
			ctx.translate(20 * i + 9, 25);
			// 旋转量
			ctx.rotate(_fontDeg * Math.PI / 180);
			// 开始落笔绘制文本
			ctx.fillText(c, 5, -10);
			// 恢复之前保存的绘制环境状态
			ctx.restore();
			// 填充答案
			code.value += c;
		}
		// 生成干扰线
		for (let i = 0; i < 3; i++) {
			//开始绘画
			ctx.beginPath();
			// 第一个点
			ctx.moveTo(randomNum(0, canvasW.value), randomNum(0, canvasH.value));
			// 第二个点
			ctx.lineTo(randomNum(0, canvasW.value), randomNum(0, canvasH.value));
			// 描边的样式
			ctx.strokeStyle = randomColor(180, 230);
			// 停止绘画
			ctx.closePath();
			// 绘制定义好的路径
			ctx.stroke();
		}
		// 干扰点
		for (let i = 0; i < 10; i++) {
			// 开始绘画
			ctx.beginPath();
			// 绘制填充圆
			ctx.arc(randomNum(0, canvasW.value), randomNum(0, canvasW.value), randomNum(1, 3), 0, 2 * Math.PI);
			ctx.fillStyle = randomColor(150, 222);
			ctx.fill()
		}
		ctx.draw()
	}
	onMounted(() => {
		clearCode();
	})
	// 定义一个存放注册的账号和密码的对象
	const user = reactive({
		'username': "",
		'password': ""
	})
	// 定义一个变量，存放输入框的验证码答案
	let iptValue = ref("");
	const a = () => {

	}
	const _register = () => {
		console.log(code.value);
		if (iptValue.value != code.value) {
			uni.showToast({
				title:'验证码错误！',
				icon:'error'
			})
			clearCode()
			iptValue.value='';
		}
		else if(iptValue.value.length <= 0){
			uni.showToast({
				title:'请输入验证码！',
				icon:'error'
			})
			clearCode()
			iptValue.value='';
		}
		else{
			if(user.username == '' || user.password == ''){
				uni.showToast({
					title:'账号密码不能为空格',
					icon:'error'
				})
			}
			else{
				uni.setStorage({
					key: 'user',
					data:user,
					success:function(){
						uni.showToast({
							title:'注册成功',
							icon:'success'
						})
						uni.switchTab({
							url:'/pages/login/login'
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	#enroll_form {
		width: 100%;
		height: 400rpx;
		margin-top: 150rpx;
		display: inline-block;
		justify-content: center;

		#name {
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

		#yzm {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			#ipt {
				width: 250rpx;
				height: 50rpx;
				padding-left: 10rpx;
				margin: 0;
			}

			a {
				style: none;
				font-size: 24rpx;
			}
		}

		#password {
			width: 100%;
			display: block;

			view {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 70rpx 0rpx;
				font-size: 30rpx;
				font-family: "宋体";
			}
		}
	}

	#Transform {
		width: 100%;
		height: 200rpx;
		margin-top: 70rpx;
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