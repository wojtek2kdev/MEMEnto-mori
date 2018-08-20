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
        setUser(state, {user}){
            state.user = user;
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
        fetchUser(context){
            return new Promise((resolve, reject) => {
                axios.get("/api/user").then(user => {
                    context.commit('setUser', {user: user.data});
                    resolve();
                })
                .catch(err => reject());
            });
        },
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