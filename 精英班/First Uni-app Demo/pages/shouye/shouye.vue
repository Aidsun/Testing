<template>
	<view id="box">
		<view class="Events">
			<swiper :autoplay="true" :interval="3000" :duration="1000" circular="true">
				<swiper-item v-for="img in eventImages" :key="img">
					<image :src="img" mode='scaleToFill'></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="content">
			<uni-card v-for="card in cardList" :key="card.id" :title="card.title" :extra="card.extra"
				:sub-title="card.sub_title" :thumbnail="card.thumbnail" :cover="card.cover" :is-shadow="card.is_shadow"
				:border="card.border">
				<text class="uni-body">{{card.content}}</text>
			</uni-card>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				eventImages: [
					"../../static/image/event1.webp",
					"../../static/image/event2.png",
					"../../static/image/event3.png",
					"../../static/image/event4.png",
					"../../static/image/event5.webp"
				],
				cardList: [{
						id: 1,
						title: '周嘉俊夺下LOL总冠军！',
						extra: '腾讯新闻',
						sub_title: '12小时前',
						// thumbnail: '缩略图',
						cover: "../../static/image/winer.jpg",
						content: '2023年英雄联盟总决赛由赣州师专毕业生周嘉俊获得，全校欢庆7天！',
						is_shadow: false,
						border: true
					},
					{
						id: 2,
						title: '周嘉俊的天赋竟是这样练成的？',
						extra: '澎湃新闻',
						sub_title: '4分钟前',
						// thumbnail: '缩略图',
						cover: "../../static/image/练习抓拍.jpg",
						content: '',
						is_shadow: false,
						border: true
					},
					{
						id: 5,
						title: 'LOL总冠军也会有这样的一面',
						extra: '拉狗快讯',
						sub_title: '3分钟',
						thumbnail: '../../static/image/药品.webp',
						// cover: "../../static/image/恋爱史.jpg",
						content: '周嘉俊大学时期每个星期去两次医院，这是为什么……',
						is_shadow: false,
						border: true
					},
					{
						id: 3,
						title: '周嘉俊小学时期是学霸被狗仔扒出',
						extra: '澎湃新闻',
						sub_title: '8小时前',
						// thumbnail: '缩略图',
						cover: "../../static/image/学霸.jpg",
						content: '',
						is_shadow: false,
						border: true
					},
					{
						id: 4,
						title: '电竞大神周嘉俊的大学青春恋爱史',
						extra: '搜狐新闻',
						sub_title: '2小时前',
						// thumbnail: '缩略图',
						cover: "../../static/image/恋爱史.jpg",
						content: '',
						is_shadow: false,
						border: true
					},

				]
			};
		}
	}
</script>

<style>
	.Events {
		swiper {
			swiper-item {}

		}
	}
</style>