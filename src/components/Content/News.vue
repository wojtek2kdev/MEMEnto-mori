<template>
    <div class="news is-dark">
        <header class="news-header">
            <h1 class="news-header--title"><a class="title--link" :href="`/meme/${this.id}`">{{ title }}</a></h1>
            <h2 class="link-label">Category: <a class="link" :href="`/category/${this.category}`">{{ category }}</a></h2>
        </header>
        <div class="news-meme">
            <img :src="src" alt="Image couldn't load" width="100%" height="100%">
        </div>
        <div class="news-vote">
            <h1 class="news-vote--author link-label">Author: <a class="link" :href="`/profile/${this.author}`">{{ author }}</a></h1>
            <div class="news-vote--arrows">
                <a v-if="!like" @click.prevent="likeMeme" class="vote"><i class="far fa-thumbs-up"></i></a>
                    <a v-if="like" @click.prevent="likeMeme" class="vote vote-like"><i class="far fa-thumbs-up"></i></a>
                <span class="vote-count vote-count--likes">{{ likesCount }}</span>
                <a v-if="!dislike" @click.prevent="dislikeMeme" class="vote"><i class="far fa-thumbs-down"></i></a>
                    <a v-if="dislike" @click.prevent="dislikeMeme" class="vote vote-dislike"><i class="far fa-thumbs-down"></i></a>
                <span class="vote-count vote-count--dislikes">{{ dislikesCount }}</span>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "news",
    props: ['id', 'src', 'title', 'category', 'author'],
    data(){
        return{
            like: false,
            dislike: false,
            likesCount: 0,
            dislikesCount: 0,
        }
    },
    created: function() {
        this.fetchVotes();
        this.fetchUserVote();
    },
    methods: {
        likeMeme: function () {
            
            const self = this;
            
            this.evaluateMeme('like').then(() => {
                if(self.dislike){
                    self.dislike = false;
                    self.dislikesCount--;
                }
                
                self.like = self.like ? false : true;
                self.likesCount = self.like ? self.likesCount+1 : self.likesCount-1; 
            })
            .catch(redirect => redirect());
        },
        dislikeMeme: function(){

            const self = this;

            this.evaluateMeme('dislike').then(() => {
                if(self.like) {
                    self.like = false;
                    self.likesCount--;
                }
                self.dislike = self.dislike ? false : true;
                self.dislikesCount = self.dislike ? self.dislikesCount+1 : self.dislikesCount-1;
            })
            .catch(redirect => redirect());
        },
        evaluateMeme: function(vote) {
            return new Promise((resolve, reject) => {
                axios({
                    method: 'put',
                    url: '/api/vote',
                    data: {
                        which: vote,
                        memeid: this.id
                    }
                }).then(response => {
                    resolve();
                }).catch(error => {
                    reject(() => {
                        window.location.href = '/auth/login';
                    });
                });
                
            });
        },
        fetchVotes: function() {
            axios.get(`/api/vote/count/${this.id}`)
            .then(votes => {
                this.likesCount = votes.data.likes;
                this.dislikesCount = votes.data.dislikes;
            });
        },
        fetchUserVote: function() {
            const user = this.$store.state.user;
            
            if(user.username){            
                axios.get(`/api/vote/my/${this.id}`)
                .then(userVote => {
                    console.log("data:", userVote.data);
                    if(userVote.data.which == 'like'){
                        this.like = true;
                    }else if(userVote.data.which == 'dislike'){
                        this.dislike = true;
                    }
                });
            }
        }
    }
}
</script>
<style lang="sass" scoped>
    .news 

        background: #363636

        height: auto
        width: inherit

        border-radius: 5px

        margin: 30px 0px 80px 0px;

        display: flex
        flex-flow: column

    .news-header
        flex: 0 1 70px
        word-wrap: break-word

    .news-header--title
        font-size: 1.2rem
        font-weight: bold
        color: white

        margin-top: 10px
        padding-left: 10px

    .link-label
        font-size: 1rem
        font-weight: bold
        color: lightgrey

        padding-left: 10px

    .link
        color: grey
        &:hover
            color: white

    .title--link
        color: white
        &:hover
            color: lightgrey

    .news-vote
        display: flex
        flex-flow: row

    .news-vote--author
        flex: 1 1

    .news-meme
        flex: 1 1

    .vote

        font-size: 2rem
        color: lightgrey

        margin: 0px 5px 5px 0px

        user-select: none !important

    .vote-like
        color: green

    .vote-dislike
        color: red

    .vote-count
        font-size: 1.5rem

        margin-right: 5px

    .vote-count--likes
        color: green

    .vote-count--dislikes
        color: red

</style>
