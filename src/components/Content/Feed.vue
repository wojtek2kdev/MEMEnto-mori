<template>
    <div id="feed-container" v-component="feed">
        <div class="news-feed">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "feed",
    data() {
       return{ 
           newses: [
               "link1",
               "link2",
               "link3"
           ]
       }
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

            width: 650px
            height: auto

            margin-top: 80px
            
            background: none

            position: absolute
            left: 50%
            transform: translateX(-50%)

            display: grid
            grid-template-columns: 1fr
            grid-gap: 20px


</style>
