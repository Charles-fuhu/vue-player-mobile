<template>
  <div id="app">
    <home />
    <info />
    <player />
  </div>
</template>

<script>
import Home from './views/Home.vue'
import Player from './views/Player.vue'
import Info from './views/Info.vue'
export default {
  components: {
    Home,
    Player,
    Info
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>