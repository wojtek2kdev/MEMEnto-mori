<template>
    <input v-if="type != 'submit'" v-model='content' :name="this.name" class='form-input' :type="type" :placeholder="placeholder" @input="updateInputValue">
    <input v-else class='form-input submit' type="submit" :value="value">      
</template>
<script>
export default {
    name: 'm-input',
    props: ['type', 'placeholder', 'value', 'name'],
    data: function(){
        return{
            content: ''
        }   
    },
    methods: {
        updateInputValue: function(event) {
            this.$store.state[this.name] = this.content;
        }
    }
}
</script>
<style lang="sass" scoped>

    .submit

        padding: 0 !important;

        background: green;
        
        color: white;
        font-weight: bold;

        cursor: pointer;

        border-bottom: 5px solid darkgreen !important;

        &:hover
            border-bottom: 5px solid green !important;
            background: darkgreen;

    .form-input

        border: 0;
        border-bottom: 5px solid #ccc;

        padding-left: 20px;

        font-size: 1.2rem;

        &:focus
           outline: 0;

</style>
