<template>
	<view id="swiper">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="img in list" :key="img">
				<img :src="img.img" mode='scaleToFill' />
			</swiper-item>
		</swiper>
	</view>
	<!-- 列表部分 -->
	<view class="_list">
		<ul class="list_wrap">
			<li>
				<img src="../../static/image/苹果汁.png" alt="" />
				<label>饮料</label>
			</li>
			<li>
				<img src="../../static/image/菠菜.png" alt="" />
				<label>蔬菜</label>
			</li>
			<li>
				<img src="../../static/image/烤肉.png" alt="" />
				<label>肉类</label>
			</li>
			<li>
				<img src="../../static/image/零食.png" alt="" />
				<label>零食</label>
			</li>
			<li>
				<img src="../../static/image/苹果.png" alt="" />
				<label>水果</label>
			</li>
		</ul>
	</view>
	<view class="messages">
		<view class="message left">
			<img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.WaON72rYgJf0_ua-LdTuDQHaFj?pid=ImgDet&rs=1" />
			<p>赣南新鲜水果低价清仓大甩卖</p>
			<p>￥56 <span>已卖出400+件</span></p>
		</view>
		<view class="message right"></view>
	</view>
	<!-- tab切换部分 -->
	<view class="tab">
		<view class="tab_btn">
			<view :class="['tab_btn_con',_index == index ? 'active':'']" v-for="(item,index) in tab_btn"
				@click="_index = index">
				<text>{{item.title1}}</text>
				<text>{{item.title2}}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from "vue";
	let list = ref([])
	uni.request({
		url: 'https://mock.presstime.cn/mock/654cc94b484bd4c55e4cdaa9/example_copy/Aidsun_552',
		success: (res) => {
			console.log(res.data.data.lbt);
			let _data = res.data.data.lbt;
			list.value = _data;
		},
		fail(err) {
			uni.showToast({
				title: "请检查网络",
				icon: 'fail'
			})
		}
	});
	// 定义索引
	let _index = ref(0);
	// 定义tab切换的标题
	let tab_btn = ref([{
			"title1": "清凉一夏",
			"title2": "冷饮雪糕"
		},
		{
			"title1": "儿童最爱",
			"title2": "大白兔奶糖"
		},
		{
			"title1": "水上乐园",
			"title2": "游泳池"
		},
		{
			"title1": "时令上新",
			"title2": "冬暖新衣"
		}
	])
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	#swiper {
		width: 100%;
		height: calc(100vw/3);
		background-color: lawngreen;

		swiper {
			width: 75vw;
			height: 20vh;
			position: relative;
			top: 4vh;
			left: 12vw;

			swiper-item {
				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
	}

	._list {
		width: 100%;
		height: 15vh;
		margin-top: 8vh;
		border: none;

		.list_wrap {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-evenly;
			align-items: center;

			li {
				width: 15vw;
				height: 15vw;
				border: none;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;

				label {
					width: 100%;
					height: 10%;
					font-size: 12px;
					font-weight: 500;
					text-align: center;
				}

				img {
					width: 100%;
					height: 90%;
				}
			}
		}
	}

	.messages {
		width: 100vw;
		height: 30vh;
		border: none;
		display: flex;
		justify-content: space-evenly;

		.message {
			width: 45%;
			height: 28vh;
			margin: auto;
			border: 1px solid darkgray;
			border-radius: 9px;

			img {
				width: 100%;
				height: 75%;
				object-fit: cover;
			}

			p:nth-child(2) {
				font-size: 15px;
				font-family: "宋体", '楷体';
				font-weight: bolder;
				overflow: hidden;
				white-space: nowrap;
			}

			p:nth-child(3) {
				margin: 0 auto;
				color: red;
				font-size: 20px;

				span {
					font-size: 14px;
					color: darkgray;
				}
			}
		}

		.left {
			background-color: -webkit-linear-gradient(bottom, pink, darkgray);
		}

		.right {
			background: -webkit-linear-gradient(top, lawngreen, white);
		}
	}

	.tab {
		width: 100%;
		margin-top: 2rem;
	}

	.tab_btn {
		width: 100%;
		height: 4rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.tab_btn>.tab_btn_con {
		width: calc((100% - 20px)/4);
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: cneter;
		text-align: center;
	}

	.tab_btn>.tab_btn_con>text:first-child {
		font-size: 16px;
	}

	.tab_btn>.tab_btn_con>text:last-child {
		font-size: 12px;
		color: rgba(0, 0, 0, 0.5);
		width: 60px;
		height: 20px;
		border: none;
		line-height: 20px;
		background-color: transparent;
		border-radius: 15px;
	}

	.tab_btn>.active>text:first-child {
		color: rgb(91, 197, 130)
	}

	.tab_btn>.active>text:last-child {
		background-color: #5ac555
	}
</style>