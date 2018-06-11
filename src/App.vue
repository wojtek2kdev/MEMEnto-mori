<template>
    <div id="app">
      <navbar></navbar>
      <feed>
        <news v-for="news of newses" :key="news" :src="news"></news>
      </feed>
    </div>
</template>
<script>

let memesPath = "src/assets/memes/"

export default {
  name: 'app',
  data () {
    return {
        newses: [
          memesPath + "janusz1.jpg",
          memesPath + "janusz2.jpg",
          memesPath + "janusz3.jpg"
        ]
    }
  }
}


</script>

<style lang="sass" scoped>

  #app
    background: url("./assets/background.jpg")
    background-size: cover
    background-position: top center
    background-attachment: fixed
    position: absolute;

    width: 100%
    height: 100%
    
  .light-dark
    background: rgba(20,20,20,0.9);
</style>
