<template>
    <background>
        <navbar></navbar>
        <add-meme-form></add-meme-form>
    </background>
</template>
<script>
export default {
    name: 'add-meme',
    data(){
        return{}
    },
    created: function(){
        this.$store.dispatch('fetchUser');
    }
}
</script>
<style lang="sass" scoped>

</style>
