import Vue from 'vue'
import Vuex from 'vuex'
import { songUrl, getLyc, getSongDetail } from '../api/songs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playInfo:'' ,
    playerList: []
  },
  mutations: {
    playMusic(state, obj) {
      state.playInfo= obj
      
      // state.playerList.push(obj)
    }
  },
  actions: {
    async setPlayer({ commit }, payload) {
      const { data: { data: song } } = await songUrl(payload.id)
      const { data: res } = await getSongDetail(payload.id)
      const { data: lyric } = await getLyc(payload.id)
      const obj = {}
      obj.name = res.songs[0].name
      obj.artist = res.songs[0].ar[0].name
      obj.cover = res.songs[0].al.picUrl
      obj.id = payload.id
      obj.lrc = lyric.lrc.lyric
      
      obj.url = song[0].url
      commit("playMusic", obj)
    }

  },

})
