import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import { store } from './store/store'

// my components

import AddMeme from './AddMeme.vue'
import Background from './components/Background.vue'
import Navbar from './components/Navigation/Navbar.vue'
import AddMemeForm from './components/Content/Form/AddMemeForm.vue'
import Input from './components/Element/Input.vue'

Vue.use(Buefy)

Vue.component('add-meme-form', AddMemeForm)
Vue.component('background', Background)
Vue.component('navbar', Navbar)
Vue.component('m-input', Input)


let app = new Vue({
  store: store,
  el: '#app',
  render: h => h(AddMeme)
})
