<template>
    <background>
      <navbar></navbar>
      <feed>
        <news v-for="news of newses" 
              :key="news" 
              :id="news.id"
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
            :per-page="perPage"
            @change="changePage">
        </b-pagination>
      </feed>
    </background>
</template>
<script>

import axios from 'axios';

export default {
  name: 'app',
  props: ['id', 'category', 'site'],
  data () {
    return {
      newses: [{
        id: 70,
        src: "/static/images/0a90f6e3fb71a1088ffc9e5d62bba024",
        title: "Some title for example",
        owner: "Test_user",
        category_name: "Games"
        }],
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

      const params = this.$route.params;

      axios({
        method: 'get',
        url: this.getUrlForFetchMemes()
      }).then(response => {
        this.newses = Array.isArray(response.data) ? response.data : [response.data];
      });

      const category = params.category;
      let site = parseInt(params.site);
      const self = this;

      if(!params.id){
        this.$store.dispatch('fetchMemesCount', {
          category: category
        }).then(function() {
          self.total = self.$store.state.count;
          self.current = site ? site+1 : 1;
        });
      }

  },
  methods: {
      getUrlForFetchMemes: function() {

          const params = this.$route.params;

          console.log("PARAMS: ", params);

          if(params.site){
            if(params.category){
              return `/api/memes/category/${params.category}/${params.site}`;
            }else{
              return `/api/memes/${params.site}`
            }
          }else if(params.category){
            return `/api/memes/category/${params.category}`;
          }else if(params.id){
            return `/api/meme/${params.id}`
          }else{
            return `/api/memes`
          }

      },
      changePage: function(pageNumber) {
          pageNumber--;
          const params = this.$route.params;
          let url = '/';
          if(params.category){
            url = pageNumber ? `/category/${params.category}/${pageNumber}` 
            : `/category/${params.category}`;
          }else if(pageNumber){
            url = `/page/${pageNumber}`;
          }
          window.location.href = url;
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
