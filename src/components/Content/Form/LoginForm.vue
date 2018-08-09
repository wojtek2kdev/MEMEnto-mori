<template>
   <form @submit.prevent="login">
       <div class="form">
            <div class="form-content">
                <m-input class="form-input" type="text" name="username" placeholder="username"></m-input>
                <m-input type="password" class="form-input" name="password" placeholder="password"></m-input>
                <p class="form-error">{{ error }}</p>
                <m-input type="submit" value="LOGIN"></m-input>
            </div>
       </div>
   </form>     
</template>
<script>
import axios from 'axios';

export default {
    name: 'login-form',
    data: function(){
        return{
            error: ''
        }
    },
    methods: {
        login: function(event){

            axios.defaults.withCredentials = true;

            const state = this.$store.state;

            axios.post('/auth/login', {
                username: state.username,
                password: state.password
            }).then(res => {
                window.location = "/";
            }).catch(err => {
                this.error = "Username or password incorrect!";
            });
        }
    }
}
</script>
<style lang="sass" scoped>

    @import '../../../assets/login/mixins.scss'
    @import '../../../assets/global/mixins.scss'

    .form
        
        height: 400px;

        @include screen('desktop')
            width: 500px;

        @include screen('mobile')
            width: 90%;
            height: 60%;

        @include screen('tablet')
            height: 350px;

            margin-top: 32px;

        @include position('center')

        background: #eee;
        box-shadow: 1px 1px 2px 1px #888;

        .form-content

            display: flex;
            flex-flow: column;

            margin: 50px;
            height: calc(100% - 100px);
            
            .form-input
                flex-grow: 1;
                
                margin: 5px 0px 5px 0px;

            .form-error
                text-align: center;
                color: red;

                transition: all 2s linear;

</style>

