import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: {}
    },
    mutations: {
        fetchUser(state) {
                axios.get("/api/user").then(user => {
                    state.user = user.data;
                });
        }
    }
});