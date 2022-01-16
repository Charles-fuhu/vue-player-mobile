<template>
  <div id="global-container">
    <van-nav-bar title="Fun音乐" left-text="首页">
      <template #right>
        <van-icon name="search" size="25" to="/search"></van-icon>
      </template>
    </van-nav-bar>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banner" :key="item.imageUrl">
        <img v-lazy="item.imageUrl" width height="150px" />
      </van-swipe-item>
    </van-swipe>
    <div id="grid">
      <van-grid :border="false" :column-num="3">
        <van-grid-item to="/info/playlist" text="精选歌单" class="active" />
        <van-grid-item to="/info/songs" text="最新单曲" />
        <van-grid-item to="/info/mv" text="最新MV" />
      </van-grid>
    </div>
  </div>
</template>

<script>
import { getBanner } from "../api/home"
export default {
  data() {
    return {
      banner: []
    }
  },
  methods: {
    async getBanner() {
      const { data: res } = await getBanner(2)
      this.banner = res.banners
    }
  },
  created() {
    this.getBanner()
  }
}
</script>

<style lang="less" scoped>
#global-container {
  flex: 0 0;
}
</style>