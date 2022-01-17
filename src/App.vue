<template>
  <div id="app">
    <van-nav-bar title="fun音乐" @click-left="$router.go(-1)" class="topNav">
      <template #left>
        <van-icon name="arrow-left" size="1.4em" />
      </template>
      <template #right>
        <van-icon name="search" size="25" @click="$router.push('/search')"></van-icon>
      </template>
    </van-nav-bar>
    <router-view class="main"></router-view>
    <player class="player" />
  </div>
</template>

<script>
import Home from './views/Home.vue'
import Player from './views/Player.vue'

export default {
  components: {
    Home,
    Player,
  },
  mounted(){
    console.log('hello，这是一个基于vue2+Vant开发的移动端播放器，项目源码https://gitee.com/hou-mingjun/fun-music.git')
    console.log('需要你的star支持~')
  }
}
</script>

<style lang="less" scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .topNav {
    width: 100vw;
  }
  .main {
    flex: 1;
    overflow-y: scroll;
  }
  .player {
    width: 100vw;
  }
}
</style>