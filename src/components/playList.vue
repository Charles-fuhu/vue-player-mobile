<template>
    <div>
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="getPlayList(cat)"
        >
            <div class="playlists">
                <div
                    class="playlistItem"
                    v-for="(pl, index) in playlists"
                    :key="index"
                    @click="toPlaylistsongs(pl.id)"
                >
                    <div class="coverImg">
                        <van-image class="img" :src="pl.coverImgUrl" fit="cover" />
                        <div class="playcount">
                            <van-icon name="play" class="icon" />
                            <span>{{ pl.playCount | formatCount }}</span>
                        </div>
                    </div>
                    <div class="name van-multi-ellipsis--l2">{{ pl.name }}</div>
                </div>
            </div>
        </van-list>
    </div>
</template>

<script>

import { getPlayList } from '../api/playlist'

export default {
    data() {
        return {
            active: 0,
            show: false,
            // 热门歌单分类列表
            Tags: [],
            // 歌单标题标签
            cat: "华语",
            offset: 0,
            page: 1,
            loading: false,
            finished: false,
            // 歌单列表
            playlists: [],
        };
    },
    methods: {
        async getPlayList(cat) {
            let offset = (this.page - 1) * 50;
            let { data } = await getPlayList(cat, offset);
            if (data.code === 200) {
                this.page++;
                for (let i = 0; i < data.playlists.length; i++) {
                    this.playlists.push(data.playlists[i]);
                }
                this.loading = false;
                if (data.playlists.length < 50) this.finished = true;
            }
        },
        toPlaylistsongs(id) {
            this.$router.push(`playlistsongs?id=${id}`);
        }
    },
    mounted() {
        this.getPlayList()
    }
}
</script>

<style lang="less" scoped>
.playlists {
    display: grid;
    grid-template-columns: repeat(3, 31%);
    justify-content: center;
    .playlistItem {
        padding: 10px;
        .coverImg {
            position: relative;
            .img {
                border-radius: 8px;
                overflow: hidden;
            }
            .playcount {
                position: absolute;
                color: #fff;
                font-size: 10px;
                padding: 1px 6px;
                background-color: rgba(0, 0, 0, 0.3);
                top: 4px;
                right: 4px;
                border-radius: 10px;
                display: flex;
                align-items: center;
            }
            .icon {
                font-size: 12px;
                margin-right: 2px;
            }
        }
        .name {
            font-size: 12px;
        }
    }
}
</style>