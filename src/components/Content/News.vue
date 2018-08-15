<template>
    <div class="news is-dark">
        <header class="news-header">
            <h1 class="news-header--title">{{ title }}</h1>
            <h2 class="link-label">Category: <a class="link">{{ category }}</a></h2>
        </header>
        <div class="news-meme">
            <img :src="src" alt="Image couldn't load" width="100%" height="100%">
        </div>
        <div class="news-vote">
            <h1 class="news-vote--author link-label">Author: <a class="link">{{ author }}</a></h1>
            <div class="news-vote--arrows">
                <b-icon
                    icon="arrow-up-bold"
                    size="is-medium"
                    type="is-success">
                </b-icon>
                <b-icon
                    icon="arrow-down-bold"
                    size="is-medium"
                    type="is-danger">
                </b-icon>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "news",
    props: ['src', 'title', 'category', 'author'],
    data(){
        return{}
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

    .news-vote
        display: flex
        flex-flow: row

    .news-vote--author
        flex: 1 1

    .news-meme
        flex: 1 1

</style>
