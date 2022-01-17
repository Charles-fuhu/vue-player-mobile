import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/global.css'
import './assets/css/icon.css'
import APlayer from '@moefe/vue-aplayer';
import 'amfe-flexible'
import 'amfe-flexible/index.js'

Vue.filter('formatCount', (count) => {
  if (count / 10000 > 10) {
    return parseInt(count / 10000) + '万';
  } else {
    return count;
  }
})
import {
  Button,
  Icon, NavBar,
  Swipe, SwipeItem, Grid, GridItem,
  Image as VanImage,
  Lazyload, List, Tab, Tabs
} from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
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
Vue.use(List);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
