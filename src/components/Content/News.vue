<template>
    <div class="news is-dark">
        <div class="news-title">
        </div>
        <div class="news-meme">
            <img :src="src" alt="Image couldn't load" width="100%" height="100%">
        </div>
        <div class="news-vote">
            <div class="block">
           <b-icon
                icon="arrow-up-bold"
                size="is-medium"
                type="is-success">
            </b-icon>
            <b-icon
              icon="arrow-down-bold"
              size="is-medium"
              type="is-danger"
            >
            </b-icon>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "news",
    props: ['src'],
    data(){
        return{

        }
    }
}
</script>
<style lang="sass" scoped>
    .news 

        background: #363636

        height: auto

        border-radius: 5px

        margin: 30px
        margin-bottom: 80px

        display: flex
        flex-flow: column

    .news-title
        flex: 0 1 70px

    .news-meme
        flex: 1 1

</style>
