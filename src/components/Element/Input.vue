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

    .form-input

        border: none;

</style>
