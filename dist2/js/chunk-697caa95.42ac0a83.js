(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-697caa95"],{"3e9b":function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:function(a){return t.getPlayList(t.cat)}},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},[s("div",{staticClass:"playlists"},t._l(t.playlists,(function(a,n){return s("div",{key:n,staticClass:"playlistItem",on:{click:function(s){return t.toPlaylistsongs(a.id)}}},[s("div",{staticClass:"coverImg"},[s("van-image",{staticClass:"img",attrs:{src:a.coverImgUrl,fit:"cover"}}),s("div",{staticClass:"playcount"},[s("van-icon",{staticClass:"icon",attrs:{name:"play"}}),s("span",[t._v(t._s(t._f("formatCount")(a.playCount)))])],1)],1),s("div",{staticClass:"name van-multi-ellipsis--l2"},[t._v(t._s(a.name))])])})),0)])],1)},i=[],e=s("1da1"),l=(s("96cf"),s("1e9a")),c={data:function(){return{active:0,show:!1,Tags:[],cat:"华语",offset:0,page:1,loading:!1,finished:!1,playlists:[]}},methods:{getPlayList:function(t){var a=this;return Object(e["a"])(regeneratorRuntime.mark((function s(){var n,i,e,c;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return n=50*(a.page-1),s.next=3,Object(l["a"])(t,n);case 3:if(i=s.sent,e=i.data,200===e.code){for(a.page++,c=0;c<e.playlists.length;c++)a.playlists.push(e.playlists[c]);a.loading=!1,e.playlists.length<50&&(a.finished=!0)}case 6:case"end":return s.stop()}}),s)})))()},toPlaylistsongs:function(t){this.$router.push("playlistsongs?id=".concat(t))}},mounted:function(){this.getPlayList()}},o=c,r=(s("d9db"),s("2877")),u=Object(r["a"])(o,n,i,!1,null,"34ad8485",null);a["default"]=u.exports},a649:function(t,a,s){},d9db:function(t,a,s){"use strict";s("a649")}}]);
//# sourceMappingURL=chunk-697caa95.42ac0a83.js.map