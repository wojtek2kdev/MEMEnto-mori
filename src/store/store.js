import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: {},
        categories: []
    },
    mutations: {
        fetchUser(state) {
                axios.get("/api/user").then(user => {
                    state.user = user.data;
                });
        },
        fetchCategories(state){
            axios({
                method: 'get',
                url: '/api/categories'
            }).then(response => {
                state.categories = response.data;
            });
        }
    }
});