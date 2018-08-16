<template>
  <div id="navbar">
  <nav class="navbar is-dark">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
    <big><b>MEMEnto-mori</b></big>
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/add">
        <b>Add+</b>
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="#">
          Categories
        </a>
        <div class="navbar-dropdown is-boxed">
          <a v-for="category of categories" 
            :key="category" 
            class="navbar-item" 
            :href="`/category/${category.name}`">{{ category.name }}</a>
        </div>
      </div>
    </div>

    <div class="navbar-end navbar-end__margin">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p v-if="!isSessionActive()" class="control">
            <a class="button is-medium" href="/register">
              <span>
                Sign Up
              </span>
            </a>
          </p>
          <p v-if="!isSessionActive()" class="control">
            <a class="button is-success is-medium" href="/auth/login">
              <span>Sign In</span>
            </a>
          </p>
          <p v-else class="control">
            <a class="button is-error is-medium" href="/auth/logout">
              <span>Log Out</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>
</template>
<script>

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

import axios from 'axios';

export default {

    name: 'navbar',
    data(){
        return{
          categories: []
        }
    },
    methods: {
        isSessionActive: function(){
          return !!this.$store.state.user.id;
        },
        getUsername: function(){
          return this.$store.state.user.username;
        },
        fetchCategories: function(){
            axios({
                method: 'get',
                url: '/api/categories'
            }).then(response => {
                this.categories = response.data;
            });
        }
    },
    created: function(){

      this.$store.commit('fetchUser');

      this.fetchCategories();

    }
}

</script>
<style lang="sass" scoped>
  #navbar
    position: fixed
    width: 100%

    z-index: 2

  .navbar-end__margin 
    margin-right: 10px
</style>
