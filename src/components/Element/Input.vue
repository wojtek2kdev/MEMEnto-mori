<template>
    <input v-if="type != 'submit'" class='form-input' :type="type" :placeholder="placeholder">
    <input v-else class='form-input submit' type="submit" :value="value">      
</template>
<script>
export default {
    name: 'm-input',
    props: ['type', 'placeholder', 'value'],
    data(){
        return{}
    }
}
</script>
<style lang="sass" scoped>

    .submit
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

        &:valid
            border-bottom: 5px solid green;
        
        &:focus:invalid
            border-bottom: 5px solid red;

</style>
