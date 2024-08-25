<template>
	<view class="detail">
		<view class="title">{{detail.title}}</view>
		<view class="info">
			<view class="author">编辑：{{detail.author}}</view>
			<view class="time">发布日期：{{detail.time}}</view>
		</view>
		<view class="content">
			<rich-text :nodes="detail.summary"></rich-text>			
		</view>
		<view class="description">
			声明：内部测试
		</view>
	</view>
</template>

<script>
	import {parseTime} from "@/utils/tool.js"

	export default {
		data() {
			return {
				options:null,
				detail:{
					title: "组件内默认的标题",
					author: "张三",
					hits: 668,
					picurl: "../../static/images/0.jpg",
					time: "10月10日",
					looktime: null, // 假设这个字段存在时显示浏览时间
					summary: "这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。"}
			};
		},
		onLoad(e){			
			this.options=e;
			console.log("操作数")
			console.log(e)
			this.getDetail();
		},
		//todo获取详细文章数据
		methods:{
			getDetail(){
				uni.request({
					url:"https://ku.qingnian8.com/dataApi/news/detail.php",
					data:this.options,
					success:res=>{
						console.log(res)
						//
						res.data.posttime=parseTime(res.data.posttime)
						res.data.content=res.data.content.replace(/<img/gi,'<img style="max-width:100%"')						
						this.detail=res.data
						
						this.saveHistory()
						
						uni.setNavigationBarTitle({
							title:this.detail.title
						})
					}
				})
			},
			
			//缓存记录
			saveHistory(){
				let historyArr=uni.getStorageSync("historyArr") || []
				let item={
					id:this.detail.id,
					classid:this.detail.classid,
					picurl:this.detail.picurl,
					title:this.detail.title,
					looktime:parseTime(Date.now())
				}
				// 缓存数组内容去重
				let index=historyArr.findIndex(i=>{
					return i.id==this.detail.id
				})
				
				if(index>=0){
					historyArr.splice(index,1)
				}
								
				historyArr.unshift(item)	
				historyArr=historyArr.slice(0,10)		
				uni.setStorageSync("historyArr",historyArr)
			}
		}
	}
</script>

<style lang="scss">
.detail{
	padding:30rpx;
	.title{
		font-size: 46rpx;
		color:#333;
	}
	.info{
		background: #F6F6F6;
		padding:20rpx;
		font-size: 25rpx;
		color:#666;
		display: flex;
		justify-content: space-between;
		margin:40rpx 0;
	}
	.content{
		padding-bottom:50rpx;		
	}
	.description{
		background: #FEF0F0;
		font-size: 26rpx;
		padding:20rpx;
		color:#F89898;
		line-height: 1.8em;
	}
}
</style>
