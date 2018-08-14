import Vue from 'vue'
import VueRouter from  'vue-router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import { store } from './store/store'

import Login from './Login.vue'
import Background from './components/Background.vue'
import Navbar from './components/Navbar/Navbar.vue'
import LoginForm from './components/Content/Form/LoginForm.vue'
import Input from './components/Element/Input.vue'

Vue.use(VueRouter)
Vue.use(Buefy)

Vue.component('background', Background)
Vue.component('navbar', Navbar)
Vue.component('login-form', LoginForm)
Vue.component('m-input', Input)

let login = new Vue({
    store: store,
    el: '#app',
    render: h => h(Login)
})

