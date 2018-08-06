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
      <a class="navbar-item" href="#">
        <b>Add+</b>
      </a>
      <a class="navbar-item" href="#">
        News
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="#">
          Categories
        </a>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" href="#">
            Games
          </a>
          <a class="navbar-item" href="#">
            Black humor
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
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
            <a class="button is-success is-medium" href="/login">
              <span>Sign In</span>
            </a>
          </p>
          <p v-else class="control">
            <a class="button is-error is-medium" href="/logout">
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

import cookie from 'js-cookie';

export default {

    name: 'navbar',
    data(){
        return{}
    },
    methods: {
        isSessionActive: function(){
          return !!this.$store.state.user.id;
        },
        getUsername: function(){
          return this.$store.state.user.username;
        }
    },
    created: function(){
      this.$store.commit('fetchUser');
    }
}

</script>
<style lang="sass" scoped>
  #navbar
    position: absolute;
    width: 100%;
</style>
