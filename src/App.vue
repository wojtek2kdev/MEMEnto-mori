<template>
    <background>
      <navbar></navbar>
      <feed>
        <news v-for="news of newses" :key="news" :src="news.src"></news>
      </feed>
    </background>
</template>
<script>

import axios from 'axios';

export default {
  name: 'app',
  data () {
    return {
      newses: ['/static/images/1b42d17ae2d57d99fadfc22690c7fb36']
    }
  },
  created() {
      axios({
        method: 'get',
        url: '/api/memes'
      }).then(response => {
        this.newses = response.data;
      });
  }
}

</script>

<style lang="sass" scoped>  
  .light-dark
    background: rgba(20,20,20,0.9)
</style>
