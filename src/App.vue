<template>
    <background>
      <navbar></navbar>
      <feed>
        <news v-for="news of newses" 
              :key="news" 
              :src="news.src"
              :title="news.title"
              :category="news.category_name"
              :author="news.owner"></news>
      </feed>
    </background>
</template>
<script>

import axios from 'axios';

export default {
  name: 'app',
  props: ['category', 'site'],
  data () {
    return {
      newses: [{src: '/static/images/1b42d17ae2d57d99fadfc22690c7fb36'}]
    }
  },
  created() {
      axios({
        method: 'get',
        url: this.getUrlForFetchMemes()
      }).then(response => {
        this.newses = response.data;
      });
  },
  methods: {
      getUrlForFetchMemes: function() {
          const params = this.$route.params;
          const route = '/api/memes';

          let url = route;

          if(params.site){
            if(params.category){
              url =`${route}/category/${params.category}/${params.site}`;
            }else{
              url = `${route}/${params.site}`
            }
          }else if(params.category){
            url = `${route}/category/${params.category}`;
          }

          return url;

      }
  }
}

</script>

<style lang="sass" scoped>  
  .light-dark
    background: rgba(20,20,20,0.9)
</style>
