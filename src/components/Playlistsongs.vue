<template>
    <div id="playlistdetail">
        <div class="songList">
            <div class="sl_content">
                <div
                    class="sl_item"
                    v-for="(song,index) in songList"
                    :key="song.id"
                    @click="setPlayer(song)"
                >
                    <div class="item_index">{{ index + 1 }}</div>
                    <div class="item_txt">
                        <div class="t_songname van-ellipsis">{{ song.name }}</div>
                        <div class="t_songby van-ellipsis">
                            <span>{{ song.ar[0].name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { playlistDetail } from "../api/playlist"
import { mapActions } from "vuex"
export default {
    data() {
        return {
            songList: []
        }
    },
    methods: {
        async getPlayList(id) {
            const { data: res } = await playlistDetail(id)
            this.songList = res.playlist.tracks;
        },
        ...mapActions(['setPlayer'])
    },
    mounted() {
        const { id } = this.$route.query
        this.getPlayList(id)
    }
}
</script>

<style lang="less" scoped>
#playlistdetail {
    .songList {
        padding-top: 1px;
        background-color: #fff;
        .sl_title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 40px;
            .t_text {
                font-size: 14px;
                display: flex;
                align-items: center;
                .icon {
                    margin: 0 8px 0 16px;
                    color: #1499ee;
                    font-size: 20px;
                }
                .length {
                    font-size: 12px;
                    color: #939393;
                    padding-left: 4px;
                }
            }
            .t_othericon {
                display: flex;
                font-size: 16px;
                height: 20px;
                line-height: 20px;
                > .oIcon {
                    margin: 0 6px;
                }
            }
        }
        .sl_content {
            .sl_item {
                display: flex;
                height: 50px;
                align-items: center;
                justify-content: space-evenly;
                .item_index {
                    text-align: center;
                    width: 30px;
                    font-size: 14px;
                    color: #939393;
                }
                .item_txt {
                    width: 270px;
                    .t_songname {
                        font-size: 14px;
                        .othername {
                            color: #939393;
                        }
                    }
                    .t_songby {
                        font-size: 12px;
                        margin-top: 3px;
                        color: #939393;
                    }
                }
                .item_icon {
                    font-size: 14px;
                    color: #148cee;
                    box-sizing: border-box;
                }
                .notmv {
                    color: rgba(147, 147, 147, 0.4);
                }
            }
        }
    }
}
</style>