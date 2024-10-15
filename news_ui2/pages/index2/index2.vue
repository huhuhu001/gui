<template>
	<view class="home">
		<view class="fixed-top">
			<view class="left-text">AI知天下</view>
			<view class="input-wrapper">
				<input v-model="searchQuery" type="text" placeholder="搜一搜" class="search-input" />
				<!-- 				<icon type="search" size="20" color="#363636"></icon> -->
				<button @click="handleSearch" class="search-button">
					<image src="../../static/images/搜索.png" mode="aspectFill\"></image>
				</button>
			</view>
		</view>
	</view>
</template>

<script setup>

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
</style>