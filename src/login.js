import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

import Login from './Login.vue'

Vue.use(Buefy)

let login = new Vue({
    el: '#app',
    render: h => h(Login)
})
