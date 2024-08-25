<template>
  <view class="newsbox">
    <!-- 第一行：文章标题 -->
    <view class="title">
      {{ item.title }}
    </view>

    <!-- 第二行：来源信息 -->
    <view class="source" v-if="!item.looktime">
      <text>{{ item.author }}</text>
	  <text> - {{ item.time }}</text>
      <text> - {{ item.hits }}浏览</text>
    </view>
    <view class="source" v-else>
      <text>浏览时间：{{ item.looktime }}</text>
    </view>

    <!-- 第三行：文章图片 -->
    <view class="pic">
      <image :src="item.picurl" mode="aspectFill"></image>
    </view>

    <!-- 第四行：文章简介 -->
    <view class="summary">
      <p>{{ item.summary }}</p>
    </view>
  </view>
</template>

<script>
export default {
  name: "newsbox",
  props: {
    item: {
      type: Object,
      default() {
        return {
          title: "组件内默认的标题",
          author: "张三",
          hits: 668,
          picurl: "../../static/images/0.jpg",
          time: "10月10日",
          looktime: null, // 假设这个字段存在时显示浏览时间
          summary: "这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。"
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
    font-size: 36rpx;
    color: #333;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap; // 确保单行文本
  }
  .source {
    font-size: 26rpx;
    color: #999;
    margin-bottom: 10rpx; // 添加一些间距
  }
  .pic {
    width: 100%;
    height: 320rpx;
    // aspect-ratio: 1 / 1; // 图片保持正方形比例，你可以按需调整
    image {
      width: 100%;
      height: 100%;
    }
  }
  .summary {
    font-size: 28rpx;
    color: #555;
    line-height: 1.5;
    margin-top: 10rpx; // 添加一些间距
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