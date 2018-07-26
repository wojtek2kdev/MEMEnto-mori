<template>
    <background>
      <navbar></navbar>
      <feed>
        <news v-for="news of newses" :key="news" :src="news"></news>
      </feed>
    </background>
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
  .light-dark
    background: rgba(20,20,20,0.9);
</style>
