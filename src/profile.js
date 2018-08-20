import Vue from 'vue'
import VueRouter from  'vue-router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import { store } from './store/store'

import Profile from './Profile.vue'
import Background from './components/Background.vue'
import Navbar from './components/Navigation/Navbar.vue'

Vue.use(VueRouter)
Vue.use(Buefy)

Vue.component('background', Background)
Vue.component('navbar', Navbar)

let login = new Vue({
    store: store,
    el: '#app',
    render: h => h(Profile)
})

