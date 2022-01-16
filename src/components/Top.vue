<template>
    <div class="gmlist_body">
        <div
            class="list_item"
            v-for="item in GMlist"
            :key="item.id"
            @click="toplaylistdetail(item.id)"
        >
            <div class="i_pic">
                <van-image class="i_pic" :src="item.coverImgUrl" />
                <div class="i_updatetime">{{ item.updateFrequency }}</div>
            </div>
            <ul class="i_songlist">
                <li
                    v-for="(songs, index) in item.tracks"
                    :key="songs.index"
                    class="van-ellipsis"
                >{{ index + 1 }}.{{ songs.first }} - {{ songs.second }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { getTopList } from "../api/toplist"
export default {
    data() {
        return {
            GMlist: [],
        }
    },
    methods: {
        //获取榜单信息
        async getTop() {
            const { data } = await getTopList()
            if (data.code === 200) {
                for (let i = 0; i < data.list.length; i++) {
                    if (data.list[i].tracks.length !== 0) {
                        this.GMlist.push(data.list[i]);
                    }
                }
            }

        }
    },
    mounted() {
        this.getTop()
    }
}
</script>

<style lang="less" scoped>
.gmlist_body {
   padding: 20px;
    .list_item {
        margin: 6px 0;
        display: flex;
        height: 100px;
        justify-content: space-between;
        align-items: center;
        .i_pic {
            position: relative;
            width: 96px;
            height: 96px;
            border-radius: 15px;
            overflow: hidden;
            .i_updatetime {
                position: absolute;
                font-size: 10px;
                color: #fff;
                bottom: 6px;
                left: 10px;
            }
        }
        .i_songlist {
            width: 230px;
            font-size: 12px;
            > li {
                letter-spacing: 0.1em;
                color: #767676;
                margin: 8px 0;
            }
        }
    }
}
</style>