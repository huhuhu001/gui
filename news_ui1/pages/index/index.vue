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
					<text v-for="(keydata, index) in displayedKeywords" :key="index" class="keyword"
						@click="selectKeyword(keydata.keyword)">{{keydata.keyword }}</text>
				</view>

				<view class="dropdown" v-if="hiddenKeywords.length > 0">
					<button @click="toggleDropdown" class="dropdown-button">
						{{ dropdownButtonText }}
					</button>
					<view v-if="isDropdownOpen" class="dropdown-content">
						<text v-for="(keydata, index) in hiddenKeywords" :key="index" class="dropdown-keyword"
							@click="selectKeyword(keydata.keyword)">{{ keydata.keyword }}</text>
					</view>
				</view>
			</view>
			<!-- 			AI总结 -->
			<view class="aiSumup" v-if="fullText.length>0">
				<view class="typing-text" ref="typingText">
					<text user-select>{{ typedText }}</text>
				</view>
				<view v-if="noNewsArr.length!=0" class="readNums">
					<text>包含{{noNewsArr.length}}条新闻</text>
				</view>
				<view class="expand-collapse-button" @click="toggleExpand">
					<text>{{ isExpanded ? '收起' : '展开' }}</text>
				</view>
			</view>
		</view>


		<view class="content" :style="{ 'padding-top': contentPaddingTop + 'px' }">
			<!-- 			 :key="item.id" -->
			<view class="row" v-for="item in noNewsArr">
				<newsbox :item="item" @click.native="goDetail(item)"></newsbox>
			</view>
			<!-- 回到顶部按钮 -->
			<view v-if="showBackToTop">
				<button class="back-to-top" @click="scrollToTop">回到顶部</button>
			</view>

		</view>

		<view class="nodata" v-if="!noNewsArr.length">
			<image src="../../static/images/nodata.png" mode="widthFix"></image>
			<view class="text">搜一搜，即可快马加鞭中...</view>
		</view>

		<view class="loading" v-if="noNewsArr.length">
			<view v-if="loading==1">数据加载中...</view>
			<view v-if="loading==2">~没有更多了</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchQuery: '',
				showError: false,

				allKeywords: [],

				displayedKeywords: [],
				hiddenKeywords: [],

				isDropdownOpen: false,
				dropdownButtonText: '看看',

				navIndex: 0,
				navArr: [],

				noNewsArr: [],
				newsArr: [
					// {
					// 	title: "震惊我一百年的宇宙超级无敌无怨无语无敌的小机密",
					// 	author: "张三",
					// 	hits: 668,
					// 	picurl: "../../static/images/0.jpg",
					// 	time: "10月10日",
					// 	looktime: null, // 假设这个字段存在时显示浏览时间
					// 	summary: "这是一篇文章的简介.这是一篇文章的这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。简介.这是一篇文章的简介.这是一篇文章的简介.。"
					// }, {
					// 	title: "震惊我一百年的宇宙超级无敌无怨无语无敌的小机密",
					// 	author: "张三",
					// 	hits: 668,
					// 	picurl: "../../static/images/0.jpg",
					// 	time: "10月10日",
					// 	looktime: null, // 假设这个字段存在时显示浏览时间
					// 	summary: "这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介。"
					// }, {
					// 	title: "震惊我一百年的宇宙超级无敌无怨无语无敌的小机密",
					// 	author: "张三",
					// 	hits: 668,
					// 	picurl: "../../static/images/0.jpg",
					// 	time: "10月10日",
					// 	looktime: null,
					// 	summary: "这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介。"
					// },
					// {
					// 	title: "震惊我一百年的宇宙超级无敌无怨无语无敌的小机密",
					// 	author: "张三",
					// 	hits: 668,
					// 	picurl: "../../static/images/0.jpg",
					// 	time: "10月10日",
					// 	looktime: null,
					// 	summary: "这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介。"
					// }, {
					// 	title: "震惊我一百年的宇宙超级无敌无怨无语无敌的小机密",
					// 	author: "张三",
					// 	hits: 668,
					// 	picurl: "../../static/images/0.jpg",
					// 	time: "10月10日",
					// 	looktime: null,
					// 	summary: "这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介。"
					// }, {
					// 	title: "震惊我一百年的宇宙超级无敌无怨无语无敌的小机密",
					// 	author: "张三",
					// 	hits: 668,
					// 	picurl: "../../static/images/0.jpg",
					// 	time: "10月10日",
					// 	looktime: null,
					// 	summary: "这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介。"
					// },
				],
				currentPage: 1,
				currentId: 50,
				loading: 0, //0默认  1加载中  2没有更多了

				maxCharsPerLine: 0, // 一行最多能显示的字符数
				typedText: '', // 打印的ai总结
				fullText: '',
				readNums: 4,
				news_id_list: [],
				aisumupArr: [],
				buffer: [], // 用于累积流式数据

				aiSumupHeight: 0,
				heightCheckInterval: null, //aisumuph高度检测方法
				contentPaddingTop: 60,

				scrollCheckInterval: null,
				scrollTopH: 0,
				isApp: false, // 标记是否是小程序环境
				showBackToTop: false,
				isExpanded: true,
				typingCompleted: false, // 打字效果完成标志

				defalutSize: 10, //默认拉去数
				addSize: 10,
				addNewsCompleted: true,



			}
		},
		mounted() {

			//this.updateKeywords();
			// this.startTyping();
			this.initHeightCheck();
			this.initScrollCheck();

			// 检测是否是小程序环境
			if (typeof wx !== 'undefined' && typeof wx.onPageScroll === 'function') {
				this.isApp = true;
				console.log("小程序")
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

		onReachBottom() {
			console.log("到底部了")
			if (this.loading == 2) {
				return;
			}
			this.loading = 1;
			this.currentPage++;
			this.getNewsData();
		},

		methods: {
			//todo获取流式总结
			getAisumupData() {
				this.buffer = []; // 清空缓冲区
				uni.request({
					url: `http://192.168.50.140:8081/api/v1/news/summary_news?news_id_list=${encodeURIComponent(this.news_id_list)}`,
					responseType: 'text', // 确保响应类型为文本
					success: (res) => {
						console.log("ai总结返回");
						console.log(res.data);
						console.log("res.data的类型为:", typeof res.data);

						// 将当前数据片段添加到缓冲区
						const lines = res.data.split('\n');
						lines.forEach(line => {
							if (line.startsWith('data: ')) {
								// 去掉 'data: ' 前缀
								this.buffer.push(line.substring(6));
							} else if (line.startsWith(': ping')) {
								// 忽略以 ': ping' 开头的行
							}
							console.log("处理：" + this.buffer)
						});

						// 如果你需要在这里处理完整的数据
						const completeData = this.buffer.join('');
						console.log("完整的数据:", completeData);

						// todo打印ai总结
						this.fullText = completeData
						console.log("fulltext总结的完整数据" + this.fullText)

						this.startTyping();

					},
					fail: (err) => {
						console.error('请求失败：', err);
					}
				});
			},

			//todo获取新闻列表数据
			getNewsData() {


				if (this.noNewsArr.length === 0) {
					return
				}
				if (this.addNewsCompleted) {
					this.addSize += this.defalutSize
					console.log("请求增加" + this.addSize)
					this.addNewsCompleted = false
					uni.request({
						url: `http://192.168.50.140:8081/api/v1/news/user_ask?ask_str=${encodeURIComponent(this.searchQuery)}&page=1&page_size=${this.addSize}`,
						success: res => {
							console.log(res)
							if (res.data.data.length === 0) {
								this.loading = 2
							}
							this.noNewsArr = res.data.data
							this.addNewsCompleted = true

							this.news_id_list = res.data.data.map(item => item.id);
							console.log("加载新新闻id：" + this.news_id_list)
							this.getAisumupData()
							//累加
							//this.noNewsArr = [...this.noNewsArr, ...res.data.data]
						}
					})
				}
			},
			//1.搜索框请求文章-2.todo关键词更新
			handleSearch() {
				this.showError = false;
				if (this.searchQuery.trim() === '') {
					this.showError = true;
					return;
				}
				if (this.searchQuery.length < 1) {
					this.showError = true;
					return;
				}
				console.log('搜索内容:', this.searchQuery);
				this.scrollToTop()
				this.getKeyData()
				uni.request({
					url: `http://192.168.50.140:8081/api/v1/news/user_ask?ask_str=${encodeURIComponent(this.searchQuery)}&page=1&page_size=${this.defalutSize}`,
					success: res => {
						if (res.data.data.length == 0) {
							this.loading = 2
						}
						console.log("获取数据")
						console.log(res.data.data)
						this.noNewsArr = res.data.data
						console.log("请求成功，加载中" + this.noNewArr)
						this.news_id_list = res.data.data.map(item => item.id);
						console.log("新闻id：" + this.news_id_list)
						this.getAisumupData()


						//this.searchQuery = "";
						this.addSize = this.defalutSize
						this.loading = 1
					}
				});
				// this.typedText = ''
				// this.readNums = 0;
				// setTimeout(() => {
				// 	this.readNums = 2;
				// 	this.startTyping();
				// }, 4000);

			},
			//get新闻详情
			goDetail(item) {
				uni.navigateTo({
					url: `/pages/detail/detail?id=${item.id}`,
				})
			},

			//todo--getkeyarr
			getKeyData() {
				uni.request({
					url: "http://192.168.50.140:8081/api/v1/news/keyword_list?page=1&page_size=10",
					success: res => {
						console.log("获取key：" + res.data.data)
						this.allKeywords = res.data.data
						console.log("赋值key" + this.allKeywords)
						this.updateKeywords()
					}
				})
			},

			// 选择关键词
			selectKeyword(keyword) {
				this.searchQuery = keyword;
				this.handleSearch();
			},

			// 切换下拉菜单
			toggleDropdown() {
				this.isDropdownOpen = !this.isDropdownOpen;
			},

			// todo-PC端、移动端自适应处理；下拉菜单UI
			updateKeywords() {
				const containerWidth = document.querySelector('.keywords-container').offsetWidth;
				//console.log("长度测试"+containerWidth)
				const keywordWidth = 65; // 假每个关键词的宽度
				const maxKeywordsPerRow = Math.floor(containerWidth / keywordWidth);

				this.displayedKeywords = this.allKeywords.slice(0, maxKeywordsPerRow - 1);
				console.log("显示个数")
				console.log(this.displayedKeywords)
				this.hiddenKeywords = this.allKeywords.slice(maxKeywordsPerRow);
				console.log("隐藏个数")
				console.log(this.hiddenKeywords)
			},

			//切换收起/展开-ai总结todo
			toggleExpand() {
				if (this.typingCompleted) {
					const container = document.querySelector('.typing-text');
					//console.log("文本容器" + container.nodeName)
					const containerWidth = container.offsetWidth;
					//console.log("容器宽度" + containerWidth)
					if (container) {
						const context = document.createElement('canvas').getContext('2d');
						context.font = '16px Arial'; // 假设字体大小为 16px，根据实际情况调整
						const sampleText = 'A'; // 使用单个字符作为样本
						const textWidth = context.measureText(sampleText).width + 5;
						//console.log("字符宽度" + textWidth)
						//const containerWidth = container.offsetWidth - 10; 
						this.maxCharsPerLine = Math.floor(containerWidth / textWidth);
						//console.log("最大字符" + this.maxCharsPerLine)
					}
					if (this.isExpanded) {
						// todo收起时，只显示一行文本，并用省略号替代剩余部分
						//const trimmedText = this.fullText ? this.fullText.value.substring(0, this.maxCharsPerLine) : '';
						console.log("一行文本" + this.fullText.value)
						this.typedText = ""
					} else {
						// 展开时，显示全部文本
						this.typedText = this.fullText;
					}
					this.isExpanded = !this.isExpanded;
				}
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
			//h5滚动
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

			startTyping() {
				let index = 0;
				const interval = 100;
				const typing = () => {
					if (index < this.fullText.length) {
						this.typedText += this.fullText.charAt(index);
						index++;
						setTimeout(typing, interval);
						this.typingCompleted = false;
					} else {
						this.typingCompleted = true;
					}
				};

				typing();
			},
			initHeightCheck() {

				this.$nextTick(() => {
					this.checkAiSumupHeight();
					this.heightCheckInterval = setInterval(() => {
						this.checkAiSumupHeight();
					}, 100);
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
					//console.log('.aiSumup 未找到');
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
		// border-radius: 0px 0px 20px 20px;
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
			background-color: #225074;
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
				text-align: center;
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
		border-radius: 10px;
		color: #545454;
		font-size: 10px;
		//transition: height 0.3s ease;

		.typing-text {
			margin-top: 0px;
			font-size: 15px;
			color: #000000;
			text-align: left;
		}

		.expand-collapse-button {
			margin-top: 10px;
			text-align: right;
			cursor: pointer;
			font-size: 14px;
			color: white;
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
		transition: padding-top 0.1s ease;

		/* 0.3秒的平滑过渡 */
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