import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

import Login from './Login.vue'
import Background from './components/Background.vue'
import Navbar from './components/Navbar/Navbar.vue'
import LoginForm from './components/Content/LoginForm.vue'

Vue.use(Buefy)

Vue.component('background', Background)
Vue.component('navbar', Navbar)
Vue.component('login-form', LoginForm)

let login = new Vue({
    el: '#app',
    render: h => h(Login)
})

