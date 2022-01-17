<template>
  <div id="global-container">
    <van-swipe class="swiper" :autoplay="3000">
      <van-swipe-item v-for="item in banner" :key="item.imageUrl">
        <img v-lazy="item.imageUrl" class="img" />
      </van-swipe-item>
    </van-swipe>
    <van-tabs v-model="active">
        <van-tab title="排行榜" to="/home/top"></van-tab>
        <van-tab title="最新单曲" to="/home/songs"></van-tab>
        <van-tab title="精选歌单" to="/home/playlist"></van-tab>
      </van-tabs>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { getBanner } from "../api/home"
export default {
  data() {
    return {
      banner: [],
      active: 1
    }
  },
  methods: {
    async getBanner() {
      const { data: res } = await getBanner(2)
      this.banner = res.banners
    },
  },
  created() {
    this.getBanner()
  }
}
</script>

<style lang="less" scoped>
#global-container {
  .swiper {
    height: 150px;
    .img {
      width: 375px;
      height: 146px;
      display: block;
    }
  }
}
</style>