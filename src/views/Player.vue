<template>
  <div id="player">
    <aplayer :audio="audio" :lrcType="1" ref="aplayer" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      audio: {
        name: '',
        artist: '',
        url: '',
        cover: '',
        lrc: `.`,
      },
    };
  },
  computed: {
    ...mapState(['playInfo'])
  },
  watch: {
    playInfo: {
      handler(newsong, oldsong) {
        this.audio = newsong
        this.$refs.aplayer.play()
      }
    }
  }
};
</script>

<style>
#player {
  flex: 0 0 auto;
}
</style>