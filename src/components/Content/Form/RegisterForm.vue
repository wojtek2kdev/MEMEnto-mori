<template>
    <div class="register-form">
        <div class="register-content">
            <h1 class="register-title">{{ title }}</h1>
            <form action="/register" method="post" @submit="checkConfirmation">
                <h5 class='input-label'>Username</h5>
                <h4 class="input-pattern">(max. 20 signs)</h4>
                <m-input class='register-input' type="text" name="username" required pattern="^.{1,20}$"></m-input>
                <h5 class='input-label'>Password</h5>
                <h4 class="input-pattern">(min. 8 signs, min. 1 capital letter, min. 1 number)</h4>
                <m-input class='register-input' type="password" name="password" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(.*[#$^+=!*()@%&])?.{8,}$"></m-input>
                <h5 class="input-label">Confirm password</h5>
                <m-input class='register-input' type="password" name="password_confirmation" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(.*[#$^+=!*()@%&])?.{8,}$"></m-input>
                <p id="message" class="register-message">{{ message }}</p>
                <div class="g-recaptcha captcha" data-sitekey="6LdB9GYUAAAAAIMyhR_pTLU6j2AHVwzsHUcnfISu"></div>
                <m-input class='register-submit' type="submit" value="Send"></m-input>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'register-form',
    props: ['title'],
    data(){
        return{
            message: ""
        }
    },
    methods: {
        checkConfirmation(event){

            const state = this.$store.state;
            
            if(state.password != state.password_confirmation){
                this.message = "Passwords aren't same";
                event.preventDefault();
            }

        }
    }
}
</script>
<style lang="sass" scoped>
    
    @import '../../../assets/global/mixins.scss'
    
    .register-form
        background: #eee;
        box-shadow: 1px 1px 2px 1px #888;

        width: 450px;
        height: auto;

        @include position('center')

        .register-content
            display: flex;
            flex-flow: column;

            .input-pattern
                font-size: 1rem;
                margin-left: 50px;

            .register-message
                color: red;
                text-align: center;
                
                margin: 10px 0px 10px 0px;

            .captcha
                margin-left: 80px;
                margin-top: 20px;

            .register-submit
                width: 40%;
                height: 50px;

                margin: 30px 0px 20px 30%;

            .register-input
                width: calc(100% - 100px);
                height: 40px;
                margin: 10px 50px 10px 50px;

                &:valid
                    border-bottom: 5px solid green;
        
                &:focus:invalid
                    border-bottom: 5px solid red;

            .input-label
                font-size: 1.3rem;
                font-weight: bold;
                margin-left: 50px;

            .register-title
                font-size: 1.7rem;
                color: black;
                text-align: center;
                margin: 5px 0px 10px 0px;

</style>
