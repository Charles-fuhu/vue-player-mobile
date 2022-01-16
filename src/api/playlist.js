import { request } from "./request";

export function getPlayList(cat='流行',offset) {
    return request({
        url: '/top/playlist',
        params: {
            cat, offset,
            limit:20
        }
    }).catch((err)=>err.response)
}