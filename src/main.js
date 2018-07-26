import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

// my components
import App from './App.vue'
import Background from './components/Background.vue'
import Navbar from './components/Navbar/Navbar.vue'
import Feed from './components/Content/Feed.vue'
import News from './components/Content/News.vue'

Vue.use(Buefy)

Vue.component('background', Background)
Vue.component('navbar', Navbar)
Vue.component('feed', Feed)
Vue.component('news', News)

let app = new Vue({
  el: '#app',
  render: h => h(App)
})
