<template>
    <div id="feed-container">
        <div class="news-feed">
            <div class="news"></div>
            <div class="news"></div>
            <div class="news"></div>
            <div class="news"></div>
            <div class="news"></div>
            <div class="news"></div>
            <div class="news"></div>
            <div class="news"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "feed",
    data(){
        return{}
    }    
}
</script>
<style lang="sass" scoped>
    #feed-container
        width: 100%
        height: 100%

        overflow-y: auto

        position: relative

        .news-feed

            width: 550px
            height: auto

            margin-top: 80px
            
            background: none

            position: absolute
            left: 50%
            transform: translateX(-50%)

            display: grid
            grid-template-columns: 1fr
            grid-gap: 20px

            .news 
                background: grey
                height: 600px
                border: 2px solid black
                border-radius: 20px;
                margin: 30px


</style>
