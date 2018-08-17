import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: {},
        categories: [],
        count: 0
    },
    mutations: {
        setMemesCount(state, {count}){
            state.count = count;
        },
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
    },
    actions: {
        fetchMemesCount(context, {category}){
            return new Promise((resolve, reject) => {
                    axios({
                        method: 'get',
                        url: category ? `/api/count/memes/${category}` : '/api/count/memes'
                    }).then(response => {
                        context.commit('setMemesCount', {count: response.data.memes});
                        resolve();
                    });
             });
        }
    }
});