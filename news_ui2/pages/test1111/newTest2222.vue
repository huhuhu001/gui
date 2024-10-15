<template>
  <view class="container">
    <!-- 固定在顶部的搜索框和关键词 -->
    <view class="fixed-top">
      <!-- 搜索框和相关文字 -->
      <view class="search-row">
        <text class="left-text">AI知天下</text>
        <view class="input-wrapper">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="请输入搜索内容"
            class="search-input"
          />
          <button @click="handleSearch" class="search-button">搜索</button>
        </view>
        <text class="right-text">天气</text>
      </view>

      <!-- 关键词和下拉菜单 -->
      <view class="keywords-container">
        <view class="keywords">
          <text
            v-for="(keyword, index) in displayedKeywords"
            :key="index"
            class="keyword"
            @click="selectKeyword(keyword)"
          >{{ keyword }}</text>
        </view>
        <view class="dropdown" v-if="hiddenKeywords.length > 0">
          <button @click="toggleDropdown" class="dropdown-button">{{ dropdownButtonText }}</button>
          <view v-if="isDropdownOpen" class="dropdown-content">
            <text
              v-for="(keyword, index) in hiddenKeywords"
              :key="index"
              class="dropdown-keyword"
              @click="selectKeyword(keyword)"
            >{{ keyword }}</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 页面主要内容 -->
    <view class="content">
      <p>这里是页面的主要内容...</p>
      <p>您可以在这里添加更多的内容。</p>
      <p>页面会随着滚动条滚动，但顶部的搜索框和关键词会保持固定。</p>
      <!-- 可以添加更多内容 -->
    </view>

    <!-- 底部文字说明 -->
    <view class="footer">
      <p>版权所有 © 2024 你的公司名称</p>
      <p>联系我们: example@example.com</p>
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
      showError: false,
      // 所有搜索关键词
      allKeywords: ['关键词1', '关键词2', '关键词3', '关键词4', '关键词5', '关键词6', '关键词7', '关键词8'],
      // 显示在主行的关键词
      displayedKeywords: [],
      // 隐藏在下拉菜单中的关键词
      hiddenKeywords: [],
      // 下拉菜单是否打开
      isDropdownOpen: false,
      // 下拉菜单按钮文本
      dropdownButtonText: '更多'
    };
  },
  mounted() {
    this.updateKeywords();
  },
  methods: {
    // 处理搜索逻辑
    handleSearch() {
      // 清除之前的错误提示
      this.showError = false;

      // 内容判断逻辑
      if (this.searchQuery.trim() === '') {
        // 如果搜索内容为空
        this.showError = true;
        return;
      }

      // 其他条件判断（例如：长度限制、特殊字符等）
      if (this.searchQuery.length < 3) {
        this.showError = true;
        return;
      }

      // 搜索内容有效，执行搜索逻辑
      console.log('搜索内容:', this.searchQuery);

      // 跳转到 searchResults 页面，并传递搜索内容
      uni.navigateTo({
        url: `/pages/searchResults/searchResults?query=${encodeURIComponent(this.searchQuery)}`
      });
    },

    // 选择关键词
    selectKeyword(keyword) {
      // 将选中的关键词设置为搜索查询内容
      this.searchQuery = keyword;
      // 执行搜索逻辑
      this.handleSearch();
    },

    // 切换下拉菜单
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },

    // 更新显示的关键词
    updateKeywords() {
      const containerWidth = document.querySelector('.keywords-container').offsetWidth;
      const keywordWidth = 100; // 假设每个关键词的宽度
      const maxKeywordsPerRow = Math.floor(containerWidth / keywordWidth);

      this.displayedKeywords = this.allKeywords.slice(0, maxKeywordsPerRow);
      this.hiddenKeywords = this.allKeywords.slice(maxKeywordsPerRow);
    }
  }
};
</script>

<style scoped>
/* 容器样式 */
.container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* 设置容器高度为视口高度 */
  padding: 20px; /* 添加内边距 */
  box-sizing: border-box; /* 确保内边距和边框不会增加元素的总宽度和高度 */
}

/* 固定在顶部的搜索框和关键词样式 */
.fixed-top {
  position: fixed; /* 固定定位 */
  top: 0; /* 顶部对齐 */
  left: 0; /* 左侧对齐 */
  right: 0; /* 右侧对齐 */
  background-color: white; /* 背景颜色 */
  z-index: 1000; /* 确保固定部分在最上层 */
  padding: 10px 20px; /* 添加内边距 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  display: flex; /* 使用 Flexbox 布局 */
  flex-direction: column; /* 子元素垂直排列 */
  align-items: center; /* 水平居中对齐 */
}

/* 搜索框和相关文字所在的行 */
.search-row {
  display: flex; /* 使用 Flexbox 布局 */
  align-items: center; /* 垂直居中对齐 */
  width: 100%; /* 宽度为 100% */
  max-width: 600px; /* 最大宽度为 600px */
}

/* 输入框左侧的文字 */
.left-text {
  font-size: 16px; /* 字体大小 */
  color: #000000; /* 文字颜色 */
  margin-right: 10px; /* 右侧间距 */
  font-weight: bolder;
}

/* 输入框右侧的文字 */
.right-text {
  font-size: 16px; /* 字体大小 */
  color: #666; /* 文字颜色 */
  margin-left: 10px; /* 左侧间距 */
}

/* 输入框包裹容器 */
.input-wrapper {
  display: flex; /* 使用 Flexbox 布局 */
  height: 80rpx;
  align-items: center; /* 垂直居中对齐 */
  border: 1px solid #ccc; /* 边框 */
  border-radius: 50px; /* 圆角 */
  overflow: hidden; /* 防止内容溢出 */
  flex: 1; /* 占据剩余空间 */
}

/* 输入框样式 */
.search-input {
  flex: 1; /* 占据剩余空间 */
  padding: 10px; /* 添加内边距 */
  border: none; /* 移除默认边框 */
  outline: none; /* 移除默认轮廓 */
  font-size: 16px; /* 字体大小 */
}

/* 搜索按钮样式 */
.search-button {
  padding: 10px 20px; /* 添加内边距 */
  background-color: #007bff; /* 背景颜色 */
  color: white; /* 文字颜色 */
  border: none; /* 移除默认边框 */
  cursor: pointer; /* 鼠标指针样式 */
  font-size: 16px; /* 字体大小 */
}

/* 按钮激活状态样式 */
.search-button:active {
  background-color: #0056b3; /* 激活状态背景颜色 */
}

/* 关键词和下拉菜单容器 */
.keywords-container {
  display: flex; /* 使用 Flexbox 布局 */
  align-items: center; /* 垂直居中对齐 */
  justify-content: space-between; /* 主轴两端对齐 */
  width: 100%; /* 宽度为 100% */
  max-width: 600px; /* 最大宽度为 600px */
  margin-top: 10px; /* 与搜索框之间留一些间距 */
}

/* 搜索关键词样式 */
.keywords {
  display: flex; /* 使用 Flexbox 布局 */
  flex-wrap: wrap; /* 允许换行 */
}

.keyword {
  background-color: #f0f0f0; /* 背景颜色 */
  padding: 5px 10px; /* 添加内边距 */
  margin: 5px; /* 添加外边距 */
  border-radius: 50px; /* 圆角 */
  font-size: 14px; /* 字体大小 */
  cursor: pointer; /* 鼠标指针样式 */
}

/* 下拉菜单 */
.dropdown {
  position: relative; /* 相对定位 */
}

.dropdown-button {
  padding: 5px 10px; /* 添加内边距 */
  background-color: #007bff; /* 背景颜色 */
  color: white; /* 文字颜色 */
  border: none; /* 移除默认边框 */
  cursor: pointer; /* 鼠标指针样式 */
  font-size: 14px; /* 字体大小 */
  border-radius: 50px; /* 圆角 */
}

.dropdown-button:active {
  background-color: #0056b3; /* 激活状态背景颜色 */
}

.dropdown-content {
  position: absolute; /* 绝对定位 */
  top: 100%; /* 在按钮下方 */
  left: 0; /* 左对齐 */
  background-color: white; /* 背景颜色 */
  border: 1px solid #ccc; /* 边框 */
  border-radius: 5px; /* 圆角 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  min-width: 100px; /* 最小宽度 */
  z-index: 1; /* 确保在最上层 */
}

.dropdown-keyword {
  display: block; /* 块级元素 */
  padding: 5px 10px; /* 添加内边距 */
  background-color: #f0f0f0; /* 背景颜色 */
  color: #333; /* 文字颜色 */
  text-decoration: none; /* 无下划线 */
  font-size: 14px; /* 字体大小 */
  cursor: pointer; /* 鼠标指针样式 */
}

.dropdown-keyword:hover {
  background-color: #ddd; /* 悬停时背景颜色 */
}

/* 页面主要内容样式 */
.content {
  margin-top: 80px; /* 确保内容在固定部分下方 */
  flex: 1; /* 占据剩余空间 */
  overflow-y: auto; /* 使内容区域可以滚动 */
}

/* 底部文字说明样式 */
.footer {
  text-align: center; /* 文本居中对齐 */
  margin-top: auto; /* 使底部文字说明始终在页面底部 */
}

.footer p {
  margin: 5px 0; /* 为每个 p 标签添加一些间距 */
}
</style>