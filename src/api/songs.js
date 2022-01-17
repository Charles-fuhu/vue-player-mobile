import { request } from "./request";
//获取歌曲播放链接
export function songUrl(id) {
    return request({
        url: '/song/url',
        params: { id }
    })
}
//推荐新音乐
export function newSong(limit) {
    return request({
        url: '/personalized/newsong',
        limit
    })
}
//获取歌曲信息
export function getSongDetail(ids) {
    return request({
        url: '/song/detail',
        params: {
            ids
        }
   })
}
//获取歌词
export function getLyc(id) {
    return request({
        url: '/lyric',
        params: {
            id
        }
    })
}
