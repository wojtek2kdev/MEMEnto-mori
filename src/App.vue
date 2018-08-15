<template>
    <background>
      <navbar></navbar>
      <feed>
        <news v-for="news of newses.src" :key="news" :src="news"></news>
      </feed>
    </background>
</template>
<script>

import axios from 'axios';

export default {
  name: 'app',
  data () {
    return {
      newses: []
    }
  },
  created: function(){

    const self = this;

    axios.get('/api/memes/').then(result => {
      self.newses = result;
    })

  }
}

</script>

<style lang="sass" scoped>  
  .light-dark
    background: rgba(20,20,20,0.9);
</style>
