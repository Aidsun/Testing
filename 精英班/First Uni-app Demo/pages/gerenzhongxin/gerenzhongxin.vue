<template>
	<view>
		<h3>这是个人中心界面</h3>
		<navigator url="/pages/login/login" >
			<button type="default">跳转到登录页面</button>
		</navigator>
		<navigator url="/pages/enroll/enroll" >
			<button type="default">跳转到注册页面</button>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
h3{
	font-size: 50rpx;
	font-weight: 100;
	color: deepskyblue;
	text-align: center;
	margin-top: 200rpx;
	font-family: "楷体";
}
navigator{
	width: 350rpx;
	height: 60rpx;
	margin: 90rpx auto;
	button{
		color: skyblue;
		background-color:cornsilk;
	}	
}
</style>
