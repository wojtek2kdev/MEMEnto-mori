<template>
    <div id="app">
      <navbar></navbar>
      <feed>

      </feed>
    </div>
</template>
<script>

export default {
  name: 'app',
  data () {
    return {
      data(){
      }
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
