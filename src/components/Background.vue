<template>
    <div id="app">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'background',
    data(){
        return{}
    }
}
</script>
<style lang="sass" scoped>
  #app
    background: url("../assets/background.jpg")
    background-size: cover
    background-position: top center
    background-attachment: fixed
    position: absolute;

    width: 100%
    height: 100%
</style>

