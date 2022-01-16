import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/global.css'
import APlayer from '@moefe/vue-aplayer';
import {
  Button,
  Icon, NavBar,
  Swipe, SwipeItem, Grid, GridItem,
  Image as VanImage,
  Lazyload
} from 'vant';
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(VanImage)
Vue.use(Button)
Vue.use(Lazyload, {
  lazyComponent: true
})
Vue.use(APlayer, {
  defaultCover: '',
  productionTip: true,
});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
