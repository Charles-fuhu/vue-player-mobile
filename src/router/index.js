import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('../views/Info.vue'),
    children: [
      {
        path: 'songs',
        name: 'song',
        component: () => import('../components/songs.vue')
      },
      {
        path: 'top',
        name: 'top',
        component: () => import('../components/Top.vue')
      },
      {
        path: 'playlist',
        name: 'playlist',
        component: () => import('../components/Playlist.vue')
      }
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: ()=>import('../components/Search.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
