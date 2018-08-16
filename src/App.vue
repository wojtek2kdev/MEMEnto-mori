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
            <b-pagination v-if="this.total > 10"
            :total="total"
            :current.sync="current"
            :order="order"
            :size="size"
            :simple="isSimple"
            :rounded="isRounded"
            :per-page="perPage">
        </b-pagination>
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
      newses: [{src: '/static/images/1b42d17ae2d57d99fadfc22690c7fb36'}],
      total: 0,
      current: 1,
      perPage: 10,
      order: 'is-centered',
      size: '',
      isSimple: false,
      isRounded: true
    }
  },
  created() {
      axios({
        method: 'get',
        url: this.getUrlForFetchMemes()
      }).then(response => {
        this.newses = response.data;
      });

      const category = this.$route.params.category;
      const self = this;

      this.$store.dispatch('fetchMemesCount', {
        category: category
      }).then(function() {
        self.total = self.$store.state.count;
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

<style lang="scss">  

@import "~bulma/sass/utilities/_all";
@import '~buefy/lib/buefy.css';
@import '~bulma';

.pagination-next {
  background: $dark;
  color: white;
  &:focus{
    border: 1px solid white;
  }
  &:hover {
    color: lightgrey;
  }
}

.pagination-previous {
  background: $dark;
  color: white;
  &:focus{
    border: 1px solid white;
  }
  &:hover {
    color: lightgrey;
  }
}

.pagination-link {
  background: $dark;
  color: white;
  &:hover {
    color: lightgrey;
  }
  .is-current {
    background: $info;
    border-color: $dark;
  }
}

.light-dark{
  background: rgba(20,20,20,0.9)
}
</style>
