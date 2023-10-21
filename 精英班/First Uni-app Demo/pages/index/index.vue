<template>
	<view class="content">
		<view class="top">
			视频栏
		</view>
		<view class="bottom">
			<view><img src="/static/shouye-zhihui.png" alt="首页-未点击"></view>
			<view><img src="/static/dianpu.png" alt="店铺-未点击"></view>
			<view><img src="/static/shequhuodong.png" alt="社区活动-未点击"></view>
			<view><img src="/static/xiaoxi-zhihui.png" alt="消息-未点击"></view>
			<view><img src="/static/gerenzhongxin-zhihui.png" alt="个人中心-未点击"></view>
		</view>
		<view>
			<scroll-view scroll-x scroll-with-animation>
				<view class="items">New1</view>
				<view class="items">New2</view>
				<view class="items">New3</view>
				<view class="items">New4</view>
				<view class="items">New5</view>
				<view class="items">New6</view>
				<view class="items">New7</view>
				<view class="items">New8</view>
			</scroll-view>
		</view>
		<view>
			<swiper circular indicator-dots autoplay interval=3000 duration=1000>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/pic1.jpg" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/pic2.jpg" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/pic3.jpg" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/pic4.jpg" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/pic5.jpg" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello World!'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
.top{
	width: 750rpx;
	height: 280rpx;
	background-color: skyblue;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2em;
	font-family: '楷体';
	color:white;
}
.bottom{
	width: 750rpx;
	height: 100rpx;
	background-color: ghostwhite;
	position: absolute;
	bottom: 0rpx;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

}
.bottom view img{
	width: 40rpx;
	height: 40rpx;
}
.bottom view img:nth-child(1):hover{
	background-color: pink;
}
scroll-view{
	width: 750rpx;
	height: 250rpx;
	border: 2px solid black;
	background-color: bisque;
	display: flex;
	white-space: nowrap;
}
scroll-view .items{
		width: 360rpx;
		height: 250rpx;
		background-color: darkturquoise;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		margin:0rpx 5rpx;
	}
swiper swiper-item .swiper-item image{
		width: 750rpx;
		height: 600rpx;
}
</style>
