<template>
	<view>
		<view class="container">
			<view class="detail">
				<view class="title">{{detailObj.title}}</view>
				<view class="info">
					<view class="author">来源：{{detailObj.author}}</view>
					<view class="time">时间：{{detailObj.posttime}}</view>
				</view>
				<view class="content">
					<!-- 富文本转换 -->
					<rich-text :nodes="detailObj.content"></rich-text>
				</view>
				<view class="state">
					内部测试内部测试内部测试内部测试
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
					title: "AI知天下",
					author: "AI知天下",
					posttime: "10月10日",
					content: '<img src="../../static/images/0.jpg"/><p>这是一篇文章的简介.这是一篇文章的这是一篇文章的简介</p><img src="http://qingnian8.oss-cn-qingdao.aliyuncs.com/images/20231112/1699777442.jpg"/><p>这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。简介.这是一篇文章的简介.这是一篇文章的简介.。</p>'
				}
			};
		},
		onLoad(options) {
			// 通过id获取新闻数据
			this.getDetail(options);
		},
		methods: {
			// 获取详情
			getDetail(options) {
				uni.request({
					url: "https://ku.qingnian8.com/dataApi/news/detail.php",
					data: options,
					success: (res) => {
						// 时间戳转换，图片标签的替换
						res.data.posttime = parseTime(res.data.posttime);
						res.data.content = res.data.content.replace(/<img/gi, '<img style="max-width:100%;"');

						this.detailObj = res.data;
						uni.setNavigationBarTitle({
							title: this.detailObj.title
						});

						let historyArr = uni.getStorageSync("historyArr") || [];
						let oneData = {
							id: this.detailObj.id,
							classid: this.detailObj.classid,
							picurl: this.detailObj.picurl,
							title: this.detailObj.title,
							looktime: parseTime(Date.now())
						};

						let index = historyArr.findIndex(item => item.id === oneData.id);
						if (index >= 0) {
							historyArr.splice(index, 1);
						}

						historyArr.unshift(oneData);
						historyArr = historyArr.slice(0, 10);

						uni.setStorageSync("historyArr", historyArr);
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	// 设置基础的容器限制和居中
	.container {
		max-width: 750rpx;
		width: 100%;
		border-radius: 10px;
		margin: 0 auto;
		padding: 10rpx;
		box-sizing: border-box;
		background-color: white;
		border: 5rpx solid #ccc;

	}

	.detail {
		// background-color: #E8F2F3;
		border-radius: 20px;
		padding: 10px;

		.title {
			font-size: 50rpx;
			line-height: 1.6em;
			color: #1F395B;
			font-weight: bolder;

		}

		.info {
			// padding: 0 30rpx;
			padding: 0px;
			// margin: 10rpx 0;
			height: 80rpx;
			// background: #f6f6f6;
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