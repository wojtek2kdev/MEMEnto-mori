import Vue from 'vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import { store } from './store/store'

// my components
import App from './App.vue'
import Background from './components/Background.vue'
import Navbar from './components/Navbar/Navbar.vue'
import Feed from './components/Content/Feed.vue'
import News from './components/Content/News.vue'

Vue.use(VueRouter)
Vue.use(Buefy)

Vue.component('background', Background)
Vue.component('navbar', Navbar)
Vue.component('feed', Feed)
Vue.component('news', News)

const router = new VueRouter({
  routes: [
    { 
      path: '/page/:site', 
      component: App,
      props: true
    },
    {
      path: '/category/:category',
      component: App,
      props: true
    },
    {
      path: '/category/:category/:site',
      component: App,
      props: true
    },
    {
      path: '/meme/:id',
      component: App,
      props: true
    }
  ]
});

const app = new Vue({
  router,
  store: store,
  el: '#app',
  render: h => h(App)
})
