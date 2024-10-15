<template>
  <view class="container">
    <!-- 搜索框 -->
    <view class="search-container">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="请输入搜索内容"
        class="search-input"
      />
      <button @click="handleSearch(searchQuery)" class="search-button">搜索</button>
    </view>

    <!-- 提示信息 -->
    <view v-if="showError" class="error-message">
      请输入有效的搜索内容
    </view>

    <!-- 底部文字说明 -->
    <view class="footer">
      <p>ai咨询大世界</p>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 搜索框的双向绑定数据
      searchQuery: '',
      // 控制错误提示信息的显示
      showError: false
    };
  },
  methods: {
    // 处理搜索逻辑
    handleSearch(item) {
      // 清除之前的错误提示
      this.showError = false;

      // 内容判断逻辑
      if (this.searchQuery.trim() === '') {
        // 如果搜索内容为空
        this.showError = true;
        return;
      }
      if (this.searchQuery.length < 1) {
        this.showError = true;
        return;
      }

	//todo请求接口：请求成功进行跳转，要求拿到关键词库的id，文章列表id
      uni.request({
      	url:"",
      	success:res=>{
      		console.log(res)
      		
      	}
      })
	  uni.navigateTo({
		url: `/pages/index/index?keyword=${item}`
	  })
	
	//请求后清空
	  console.log('搜索内容:', this.searchQuery);
	  this.searchQuery=''
    }
  }
};
</script>

<style scoped>
/* 容器样式 */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

/* 搜索框容器样式 */
.search-container {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border: 1px solid #ccc;
  border-radius: 25px;
  overflow: hidden;
  margin-bottom: 20px; /* 与底部文字说明之间留一些间距 */
}

/* 输入框样式 */
.search-input {
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 16px;
}

/* 搜索按钮样式 */
.search-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

/* 按钮激活状态样式 */
.search-button:active {
  background-color: #0056b3;
}

/* 错误提示信息样式 */
.error-message {
  color: red;
  margin-top: 10px;
}

/* 底部文字说明样式 */
.footer {
  text-align: center;
  margin-top: auto; /* 使底部文字说明始终在页面底部 */
}
</style>