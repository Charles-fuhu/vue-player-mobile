import { request } from "./request";
//获取歌单
export function getPlayList(cat = '流行', offset) {
  return request({
    url: '/top/playlist',
    params: {
      cat, offset,
      limit: 20
    }
  }).catch((err) => err.response)
}
//获取歌单歌曲
export function playlistDetail(id) {
  return request({
    url: "/playlist/detail",
    method: "get",
    params: {
      id
    }
  })
}