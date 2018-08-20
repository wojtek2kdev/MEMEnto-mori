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

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/profile',
            component: Profile,
        },
        {
            path: '/profile/:username',
            component: Profile,
            props: true
        }
    ]
});

let login = new Vue({
    router,
    store: store,
    el: '#app',
    render: h => h(Profile)
})

