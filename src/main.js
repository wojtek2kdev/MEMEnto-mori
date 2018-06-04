import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

// my components
import App from './App.vue'
import Navbar from './components/Navbar/Navbar.vue'
import Feed from './components/Content/Feed.vue'

Vue.use(Buefy)

Vue.component('navbar', Navbar)
Vue.component('feed', Feed)

new Vue({
  el: '#app',
  render: h => h(App)
})
