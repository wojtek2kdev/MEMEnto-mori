<template>
    <background>
      <navbar></navbar>
      <feed>
        <news v-for="news of newses" :key="news" :src="news"></news>
      </feed>
    </background>
</template>
<script>

export default {
  name: 'app',
  data () {
    return {

    }
  }
}

</script>

<style lang="sass" scoped>  
  .light-dark
    background: rgba(20,20,20,0.9);
</style>
