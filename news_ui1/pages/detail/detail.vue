<template>
	<view>
		<view class="container">
			<view class="detail">
				<view class="title">{{detailObj.news_title}}</view>
				<view class="info">
					<view class="author" v-if="detailObj.news_author">来源：{{detailObj.news_author}}</view>
					<view class="author" v-else>来源：AI知天下</view>
					<view class="time">{{detailObj.news_time}}</view>
				</view>
				<view class="content">

					<rich-text :nodes="detailObj.news_body"></rich-text>
				</view>
				<view class="state">
					注意：内部测试内部测试内部测试内部测试内部测试
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import {
		parseTime
	} from '@/utils/tool.js';

	export default {
		data() {
			return {
				detailObj: {
					news_title: "AI知天下",
					news_author: "AI知天下",
					news_time: "10月10日",
					// news_body: '<img src="../../static/images/0.jpg"/><p>这是一篇文章的简介.这是一篇文章的这是一篇文章的简介</p><img src="http://qingnian8.oss-cn-qingdao.aliyuncs.com/images/20231112/1699777442.jpg"/><p>这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。简介.这是一篇文章的简介.这是一篇文章的简介.。</p>'
				}
			};
		},
		onLoad(options) {
			console.log("传递数据" + options.id)
			this.getDetail(options.id);
		},
		methods: {
			// 获取详情
			getDetail(id) {
				uni.request({
					url: `http://192.168.50.140:8081/api/v1/news/get?news_id=${id}`,
					success: (res) => {
						// 时间戳转换，图片标签的替换
						// res.data.posttime = parseTime(res.data.posttime);
						// res.data.content = res.data.content.replace(/<img/gi, '<img style="max-width:100%;"');
						this.detailObj = res.data.data;
						console.log("详情对象")
						console.log(this.detailObj)
						uni.setNavigationBarTitle({
							title: this.detailObj.title
						});

						//本地缓存处理
						// let historyArr = uni.getStorageSync("historyArr") || [];
						// let oneData = {
						// 	id: this.detailObj.id,
						// 	classid: this.detailObj.classid,
						// 	picurl: this.detailObj.picurl,
						// 	title: this.detailObj.title,
						// 	looktime: parseTime(Date.now())
						// };

						// let index = historyArr.findIndex(item => item.id === oneData.id);
						// if (index >= 0) {
						// 	historyArr.splice(index, 1);
						// }

						// historyArr.unshift(oneData);
						// historyArr = historyArr.slice(0, 10);

						// uni.setStorageSync("historyArr", historyArr);
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.container {
		max-width: 750rpx;
		width: 100%;
		border-radius: 20px;
		margin: 0 auto;
		padding: 10rpx;
		box-sizing: border-box;
		background-color: white;
		border: 5rpx solid #9c9c9c;

	}

	.detail {
		background-color: #ccc;
		border-radius: 20px;
		padding: 10px;


		.title {
			font-size: 50rpx;
			line-height: 1.6em;

		}

		.info {
			padding: 0 30rpx;
			margin: 20rpx 0;
			height: 80rpx;
			background: #f6f6f6;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 22rpx;
			color: #888;
			border-radius: 10px;
		}

		.content {
			padding-top: 20rpx;
			padding-bottom: 50rpx;
		}

		.state {
			background: #FEF0F0;
			font-size: 26rpx;
			padding: 10rpx;
			color: #F89898;
			line-height: 1.8em;
			border-radius: 10px;
		}

		img {
			max-width: 100%;
			height: auto;
			display: block;
			border-radius: 10px;
			border: 2px solid #ddd;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		}

		p {
			margin: 20rpx 0;
			text-indent: 2em;
			word-break: break-all;
			overflow-wrap: break-word;

		}
	}

	// 响应式媒体查询
	@media (min-width: 1200rpx) {
		.container {
			max-width: 1200rpx;

		}

		.detail {
			padding: 20px 20px 10px 20px;

			.title {
				font-size: 2rem;
			}

			.info {
				font-size: 1rem;
			}

			.state {
				font-size: 1rem;
			}
		}
	}
</style>