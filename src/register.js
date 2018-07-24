import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

import Register from './Register.vue'

Vue.use(Buefy)

let register = new Vue({
    el: '#app',
    render: h => h(Register)
})
