import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import { store } from './store/store';

import Register from './Register.vue'
import Navbar from './components/Navigation/Navbar.vue'
import Background from './components/Background.vue'
import RegisterForm from './components/Content/Form/RegisterForm.vue'
import Input from './components/Element/Input.vue'

Vue.use(Buefy)

Vue.component('navbar', Navbar)
Vue.component('background', Background)
Vue.component('register-form', RegisterForm)
Vue.component('m-input', Input)

let register = new Vue({
    store: store,
    el: '#app',
    render: h => h(Register)
})
