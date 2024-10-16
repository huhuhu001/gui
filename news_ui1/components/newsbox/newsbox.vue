<template>
	<view class="newsbox">
		<!-- 第一行：文章标题 -->
		<view class="title">
			{{ item.news_title }}
		</view>

		<!-- 第二行：来源信息 -->
		<view class="source" v-if="!item.news_time">
			<text>{{ item.news_author }}</text>
			<text> - {{ item.news_time }}</text>
		</view>
		<view class="source" v-else>
			<text>发布时间：{{ item.news_time }}</text>
		</view>

		<!-- 第三行：文章图片 -->
		<view class="pic" v-if="item.news_img">
			<image :src="item.news_img" mode="aspectFill"></image>
		</view>
		<view class="pic" v-else="item.news_img">
			<image src="../../static/images/nohis.png" mode="aspectFill"></image>
		</view>

		<!-- 第四行：文章简介 -->
		<view class="summary" v-if="item.news_summary">
			<p>{{ item.news_summary }}</p>
		</view>
		<view class="summary" v-else>
			<p>在写了在写了，AIbox笔杆子冒烟中...</p>
		</view>
	</view>
</template>

<script>
	export default {
		name: "newsbox",
		props: {
			item: {
				type: Object,
				default () {
					return {
						news_id: "",
						news_title: "AI知天下",
						news_author: "AI知天下",
						news_img: "../../static/images/0.jpg",
						news_time: "10月10日",
						news_summary: "这是一篇文章的简介.这是一篇文章的这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。简介.这是一篇文章的简介.这是一篇文章的简介.。"
					};
				}
			}
		},
		data() {
			return {};
		}
	};
</script>

<style lang="scss" scoped>
	.newsbox {

		display: flex;
		flex-direction: column;

		.title {
			padding-left: 10rpx;
			font-size: 30rpx;
			font-weight: bolder;
			color: #333;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap; // 确保单行文本
		}

		.source {
			padding-left: 10rpx;
			font-size: 26rpx;
			color: #b3b3b3;
			margin-bottom: 10rpx;
		}

		.pic {
			width: 100%;
			height: 350rpx;

			image {
				width: 100%;
				height: 100%;
				border-radius: 30rpx;
			}
		}

		.summary {
			font-size: 25rpx;
			color: #848484;
			line-height: 1.5;
			margin-top: 10rpx;

			p {
				text-overflow: ellipsis;
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp: 3; // 显示的行数
				-webkit-box-orient: vertical;
			}
		}
	}
</style>