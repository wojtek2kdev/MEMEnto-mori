<template>
   <form action="/login" method="post">
       <div class="form">
            <div class="form-content">
                <m-input class="form-input" type="text" name="username" placeholder="username"></m-input>
                <m-input type="password" class="form-input" name="password" placeholder="password"></m-input>
                <m-input type="submit" value="LOGIN"></m-input>
            </div>
       </div>
   </form>     
</template>
<script>
export default {
    name: 'login-form',
    data(){
        return{}
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

</style>

