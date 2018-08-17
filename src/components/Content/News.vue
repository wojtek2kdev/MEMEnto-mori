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
                <a v-if="!like" @click="likeMeme" class="vote"><i class="far fa-thumbs-up"></i></a>
                    <a v-if="like" @click="likeMeme" class="vote vote-like"><i class="far fa-thumbs-up"></i></a>
                <a v-if="!dislike" @click="dislikeMeme" class="vote"><i class="far fa-thumbs-down"></i></a>
                    <a v-if="dislike" @click="dislikeMeme" class="vote vote-dislike"><i class="far fa-thumbs-down"></i></a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "news",
    props: ['id', 'src', 'title', 'category', 'author'],
    data(){
        return{
            like: false,
            dislike: false
        }
    },
    methods: {
        likeMeme: function () {
            if(this.dislike) this.dislike = false;
            this.like = this.like ? false : true;
        },
        dislikeMeme: function(){
            if(this.like) this.like = false;
            this.dislike = this.dislike ? false : true;
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

        margin: 0px 30px 5px 0px

        user-select: none !important

    .vote-like
        color: green

    .vote-dislike
        color: red

</style>
