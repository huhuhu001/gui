<template>
	<view class="home">
		<view class="fixed-top">
			<view class="search-row">
				<text class="left-text">AI知天下</text>
				<view class="input-wrapper">
					<input v-model="searchQuery" type="text" placeholder="搜一搜" class="search-input" />
		<!-- 			<icon type="search" size="20" color="#363636"></icon> -->
					<button @click="handleSearch" class="search-button">
						搜索
					</button>
				</view>
				<text class="right-text">天气</text>
			</view>

			<view class="keywords-container">
				<view class="keywords">
					<text v-for="(keyword, index) in displayedKeywords" :key="index" class="keyword"
						@click="selectKeyword(keyword)">{{ keyword }}</text>
				</view>

				<view class="dropdown" v-if="hiddenKeywords.length > 0">
					<button @click="toggleDropdown" class="dropdown-button">
					{{ dropdownButtonText }}
					</button>
					<view v-if="isDropdownOpen" class="dropdown-content">
						<text v-for="(keyword, index) in hiddenKeywords" :key="index" class="dropdown-keyword"
							@click="selectKeyword(keyword)">{{ keyword }}</text>
					</view>
				</view>
			</view>
			<!-- 			AI总结 -->
			<view class="aiSumup" v-if="readNums/5>1">
				<view class="typing-text" ref="typingText">
					<text user-select>{{ typedText }}</text>
				</view>
				<view v-if="readNums!=0" class="readNums">
					<text>包含{{readNums}}条新闻</text>
				</view>
			</view>
		</view>2


		<view class="content" :style="{ 'padding-top': contentPaddingTop + 'px' }">
			<view class="row" v-for="item in newsArr" :key="item.id">
				<newsbox :item="item" @click.native="goDetail(item)"></newsbox>
			</view>
			<!-- 回到顶部按钮 -->
			<view v-if="showBackToTop">
				<button class="back-to-top" @click="scrollToTop">回到顶部</button>
			</view>

		</view>

		<view class="nodata" v-if="!newsArr.length">
			<image src="../../static/images/nodata.png" mode="widthFix"></image>
			<view class="text">快马加鞭中...</view>
		</view>

		<view class="loading" v-if="newsArr.length">
			<view v-if="loading==1">数据加载中...</view>
			<view v-if="loading==2">没有更多了~~</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchQuery: '',
				showError: false,

				allKeywords: ['自动生成', '自动生成', '新闻', 'GC','AI', '自动生成', '新闻', 'GC'],

				displayedKeywords: [],
				hiddenKeywords: [],

				isDropdownOpen: false,
				dropdownButtonText: '更多',

				navIndex: 0,
				navArr: [],
				/* 关键词数组 */
				newsArr: [{
						title: "震惊我一百年的宇宙超级无敌无怨无语无敌的小机密",
						author: "张三",
						hits: 668,
						picurl: "../../static/images/0.jpg",
						time: "10月10日",
						looktime: null, // 假设这个字段存在时显示浏览时间
						summary: "这是一篇文章的简介.这是一篇文章的这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。简介.这是一篇文章的简介.这是一篇文章的简介.。"
					}, {
						title: "震惊我一百年的宇宙超级无敌无怨无语无敌的小机密",
						author: "张三",
						hits: 668,
						picurl: "../../static/images/0.jpg",
						time: "10月10日",
						looktime: null, // 假设这个字段存在时显示浏览时间
						summary: "这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介。"
					}, {
						title: "震惊我一百年的宇宙超级无敌无怨无语无敌的小机密",
						author: "张三",
						hits: 668,
						picurl: "../../static/images/0.jpg",
						time: "10月10日",
						looktime: null,
						summary: "这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介。"
					},
					{
						title: "震惊我一百年的宇宙超级无敌无怨无语无敌的小机密",
						author: "张三",
						hits: 668,
						picurl: "../../static/images/0.jpg",
						time: "10月10日",
						looktime: null,
						summary: "这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介。"
					}, {
						title: "震惊我一百年的宇宙超级无敌无怨无语无敌的小机密",
						author: "张三",
						hits: 668,
						picurl: "../../static/images/0.jpg",
						time: "10月10日",
						looktime: null,
						summary: "这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介。"
					}, {
						title: "震惊我一百年的宇宙超级无敌无怨无语无敌的小机密",
						author: "张三",
						hits: 668,
						picurl: "../../static/images/0.jpg",
						time: "10月10日",
						looktime: null,
						summary: "这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介。"
					},
				],
				currentPage: 1,
				currentId: 50,
				loading: 0, //0默认  1加载中  2没有更多了

				typedText: '', // ai总结
				fullText: '欢迎来，获取最新资讯欢迎来，获取最新资讯！欢迎来，获取最新资讯！欢迎来，获取最新资讯！欢迎来，获取最新资讯！欢迎来，获取最新资讯！欢迎来，获取最新资讯！欢迎来，获取最新资讯！！',
				readNums: 4,
				topOffset: 0,

				aiSumupHeight: 0,
				heightCheckInterval: null,
				contentPaddingTop: 40,

				scrollCheckInterval: null,
				scrollTopH: 0,
				isApp: false, // 标记是否是小程序环境
				showBackToTop: false,

			}
		},
		mounted() {
			this.updateKeywords();
			this.startTyping();
			this.initHeightCheck();
			this.initScrollCheck();
			// 检测是否是小程序环境
			if (typeof wx !== 'undefined' && typeof wx.onPageScroll === 'function') {
				this.isApp = true;
				console.log("小程序")
				// 在小程序中监听页面滚动事件
				wx.onPageScroll(this.handlePageScroll);
			}

		},
		beforeDestroy() {
			clearInterval(this.heightCheckInterval);

			// 移除小程序滚动事件监听
			if (this.isApp) {
				wx.offPageScroll(this.handlePageScroll);
			}
		},
		onLoad() {
			this.getNavData();
			this.getNewsData();
		},
		onReachBottom() {
			console.log("到底部了")
			if (this.loading == 2) {
				return;
			}
			this.currentPage++;
			this.loading = 1;
			this.getNewsData();
		},

		methods: {
			//搜索框
			handleSearch() {
				this.showError = false;

				if (this.searchQuery.trim() === '') {
					this.showError = true;
					return;
				}
				if (this.searchQuery.length < 3) {
					this.showError = true;
					return;
				}

				//todo-1根据搜索词，发送请求
				console.log('搜索内容:', this.searchQuery);

				// todo1根据搜索词，更新列表内容
				// uni.request({
				// 	url: `/pages/searchResults/searchResults?query=${encodeURIComponent(this.searchQuery)}`,
				// 	success: res => {
				// 		console.log(res)
				// 		this.navArr = res.data
				// 	}
				// });
			},

			//todo-2获取关键词
			// todo1根据搜索词，更新关键词
			// uni.request({
			// 	url: `/pages/searchResults/searchResults?query=${encodeURIComponent(this.searchQuery)}`,
			// 	success: res => {
			// 		console.log(res)
			// 		this.allKeywords = res.data
			// 	}
			// });

			// 选择关键词
			selectKeyword(keyword) {
				this.searchQuery = keyword;
				this.handleSearch();
			},

			// 切换下拉菜单
			toggleDropdown() {
				this.isDropdownOpen = !this.isDropdownOpen;
			},

			// todo更新显示的关键词,实时计算所有关键词长
			updateKeywords() {
				const containerWidth = document.querySelector('.keywords-container').offsetWidth;
				//console.log("长度测试"+containerWidth)
				const keywordWidth = 65; // 假每个关键词的宽度
				const maxKeywordsPerRow = Math.floor(containerWidth / keywordWidth);

				this.displayedKeywords = this.allKeywords.slice(0, maxKeywordsPerRow-1);
				this.hiddenKeywords = this.allKeywords.slice(maxKeywordsPerRow);
			},

			//todo点击关机词，更新内容
			clickNav(index, id) {
				this.navIndex = index;
				this.currentPage = 1;
				this.currentId = id;
				this.newsArr = [{
					title: "组件内默认的标题",
					author: "张三",
					hits: 668,
					picurl: "../../static/images/0.jpg",
					time: "10月10日",
					looktime: null,
					summary: "这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。"
				}]
				this.loading = 0;
				this.getNewsData(id);
			},

			//跳转到详情页（类别id+文章id）
			goDetail(item) {
				uni.navigateTo({
					url: `/pages/detail/detail?cid=${item.classid}&id=${item.id}`
				})
			},

			//todo获取关键词导航表数据
			getNavData() {
				uni.request({
					url: "https://ku.qingnian8.com/dataApi/news/navlist.php",
					success: res => {
						console.log(res)
						this.navArr = res.data
					}
				})
			},

			//todo获取新闻列表数据
			getNewsData() {
				uni.request({
					url: "https://ku.qingnian8.com/dataApi/news/newslist.php",
					data: {
						cid: this.currentId,
						page: this.currentPage
					},
					success: res => {
						console.log(res)
						if (res.data.length == 0) {
							this.loading = 2
						}
						this.newsArr = [...this.newsArr, ...res.data]
					}
				})
			},

			// 滚动到页面顶部
			scrollToTop() {
				if (this.isApp) {
					wx.pageScrollTo({
						scrollTop: 0,
						duration: 300
					});
				} else {
					window.scrollTo({
						top: 0,
						behavior: 'smooth'
					});
				}
			},
			//h5滚动检测
			initScrollCheck() {
				this.scrollCheckInterval = setInterval(() => {
					this.scrollTopH = window.scrollY || window.pageYOffset;
					//console.log(`h5当前滚动条的位置为: ${this.scrollTopH}px`);
					this.showBackToTop = this.scrollTopH >= 600;
					//console.log('是否显示按钮' + this.showBackToTop)
				}, 4000);
			},
			//wx滚动
			handlePageScroll(e) {
				this.scrollTopH = e.scrollTop;
				//console.log(`wx当前滚动条的位置为: ${this.scrollTopH}px`);
				this.showBackToTop = this.scrollTopH >= 600;
			},

			// 打字机效果
			startTyping() {
				let index = 0;
				const interval = 100;

				const typing = () => {
					if (index < this.fullText.length) {
						this.typedText += this.fullText.charAt(index);
						index++;
						setTimeout(typing, interval);
					}
				};

				typing();
			},

			//contentTop长度
			initHeightCheck() {
				this.$nextTick(() => {
					this.checkAiSumupHeight();
					this.heightCheckInterval = setInterval(() => {
						this.checkAiSumupHeight();
					}, 1500);
				});
			},

			checkAiSumupHeight() {
				const aiSumup = document.querySelector('.aiSumup');
				if (aiSumup) {
					const newHeight = aiSumup.offsetHeight;
					if (newHeight !== this.aiSumupHeight) {
						this.aiSumupHeight = newHeight - 20;
						this.contentPaddingTop = 80
						const newContentPaddingTop = this.aiSumupHeight + this.contentPaddingTop;
						this.contentPaddingTop = newContentPaddingTop;
					}
				} else {
					this.aiSumupHeight = 0;
					console.log('.aiSumup 未找到');
				}
				// console.log(`.aiSumup 的高度为: ${this.aiSumupHeight}px`);
				// console.log(` content的高度为: ${this.contentPaddingTop}px`);
			},


		}
	}
</script>

<style lang="scss" scoped>
	.home {
		display: flex;
		flex-direction: column;
		height: 100vh;
		padding: 0px;
		box-sizing: border-box;

	}

	.fixed-top {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		//max-width: 750rpx;
		background-color: #e7e7e7;
		z-index: 1000;
		padding: 10px 15px 10px 15px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		/* 子元素垂直排列 */
		align-items: center;
		border-radius: 0px 0px 20px 20px;
	}

	.search-row {
		display: flex;
		align-items: center;
		width: 100%;
		max-width: 600px;

		.left-text {
			font-size: 15px;
			color: #000000;
			margin-right: 10px;
			font-weight: bolder;
		}

		.right-text {
			font-size: 16px;
			color: #666;
			margin-left: 10px;
		}

		.input-wrapper {
			display: flex;
			height: 70rpx;
			align-items: center;
			border: 1px solid #ccc;
			border-radius: 50px;
			overflow: hidden;
			flex: 1;
			/* 占据剩余空间 */
		}

		.search-input {
			flex: 1;
			padding: 10px;
			border: none;
			outline: none;
			font-size: 16px;
		}

		.search-button {
			padding: 10px 8px;
			background-color: #225074 ;
			color: white;
			border: none;
			cursor: pointer;
			font-size: 14px;
			

		}

		.search-button:active {
			background-color: #00438b;
		}
	}


	.keywords-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		/* 主轴两端对齐 */
		width: 100%;
		max-width: 600px;
		margin-top: 0px;

		.keywords {
			display: flex;
			flex-wrap: wrap;
		}

		.keywords :active {
			background-color: #00438b;
			color: white;
		}

		.keyword {
			background-color: #f0f0f0;
			padding: 5px 10px;
			margin: 5px;
			border-radius: 50px;
			font-size: 14px;
			cursor: pointer;
		}
	}


	.dropdown {
		position: relative;

		.dropdown-button {
			padding: 0px 10px;
			background-color: #225074;
			color: white;
			border: none;
			cursor: pointer;
			font-size: 10px;
			border-radius: 15px;
			.dropdown-button:active {
				background-color: #00438b;
			}
		}
		.dropdown-content {
			position: absolute;
			top: 100%;
			right: 0;
			background-color: rgba(0, 0, 0, 0);
			z-index: 1002;
			width: 150rpx;
			.dropdown-keyword {
				//flex-wrap: nowrap;
				text-align:center;
				display: block;
				margin-bottom: 5rpx;
				border-radius: 20rpx;
				padding: 5px 5px;
				background-color: #225074;
				color: white;
				text-decoration: none;
				font-size: 14px;
				cursor: pointer;
				
			}
			
			.dropdown-keyword:hover {
				background-color: #00438b;
			}
		}
	}

	.aiSumup {
		margin-top: 3px;
		background-color: #acacac;
		font-weight: bolder;
		z-index: 1000;
		padding: 5px 7px;
		// box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		/* 主轴两端对齐 */
		width: 100%;
		max-width: 600px;
		align-items: center;
		border-radius: 15px;
		color: #545454;
		font-size: 10px;

		.typing-text {
			margin-top: 0px;
			font-size: 15px;
			color: #000000;
			text-align: left;
		}

	}

	.content {
		padding: 30rpx;
		padding-top: 80rpx;
		background: #ccc;
		max-width: 750rpx;
		min-width: 320rpx;
		margin: 0 auto;
		width: 100%;
		box-sizing: border-box;
		border-radius: 20px;

		.row {
			border: 1px solid #efefef;
			padding: 20rpx 10px;
			background: #ffffff;
			border-radius: 20px;
			margin-bottom: 10px;
		}
	}

	@media (min-width: 1200rpx) {
		.content {
			max-width: 1200rpx;
		}
	}

	.nodata {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		image {
			width: 360rpx;
		}

		.text {
			color: #999;
			font-size: 20rpx;
		}
	}

	.loading {
		text-align: center;
		font-size: 26rpx;
		color: #888;
		line-height: 2em;
	}

	.back-to-top {
		position: fixed;
		bottom: 50rpx;
		right: 20rpx;
		padding: 5rpx 20rpx;
		background-color: rgba(0, 80, 116, 0.9);
		color: white;
		font-weight: bolder;
		border: none;
		cursor: pointer;
		font-size: 16px;
		border-radius: 50px;
		z-index: 1001;
		/* 确保按钮在最上层 */
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

		&:active {
			background-color: #0052ab;
		}
	}
</style>