<template>
    <div class="form">
        <div class="form-content">
            <h1 class="form-title">{{ title }}</h1>
            <h2 class="form-subtitle">{{ subtitle }}</h2>
            <h2 class="form-subtitle">{{ info }}</h2>
            <form method="post">
                <label class="input-label">Title  <span class="input-label--info">(1-50 signs)</span></label>
                <m-input required class="form-input form-input--wide" pattern="^.{1,50}$"></m-input>
                <label class="input-label">Category</label>
                <select required name="category" id="category" class="form-input">
                    <option disabled selected value> -- select an option -- </option>
                    <option value="Games">Games</option>
                    <option value="Black humor">Black humor</option>
                </select>
                <label class="input-label">Meme</label>
                <m-input required type="file" accept="image/*" class="form-input form-input--file"></m-input>
                <div class="g-recaptcha captcha" data-sitekey="6LdB9GYUAAAAAIMyhR_pTLU6j2AHVwzsHUcnfISu"></div>
                <m-input class="form-submit" type="submit" value="Upload meme!"></m-input>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'add-meme-form',
    data(){
        return{
            title: "Add your meme!",
            subtitle: "Earn as much likes as you can! Your meme will die after hour. Memento mori.",
            info: "You can only add one meme per day. Administrator isn't responsible for meme which you upload, If someone report your meme then this meme will be checked and may be deleted."
        }
    }
}
</script>
<style lang="sass" scoped>
    @import '../../../assets/global/mixins.scss'
    
    #category 
        border: 0;
        border-bottom: 5px solid #ccc !important;
        outline: 0;

        font-size: 1rem;
        padding-left: 5px;

        width: 200px;

    .form
        background: #eee;
        box-shadow: 1px 1px 2px 1px #888;

        width: 500px;
        height: auto;

        @include position('center')
        
        .form-content

            .captcha
                margin: 20px 0px 0px 20px;


            .form-title
                font-size: 1.7rem;
                color: black;
                text-align: center;
                margin: 5px 0px 10px 0px;

            .form-subtitle
                font-size: 1.1rem;
                color: black;
                margin: 5px 5px 10px 10px;

            .input-label
                font-size: 1.3rem;
                font-weight: bold;
                margin-left: 50px;
                display: block;

            .input-label--info
                font-size: 1rem;
                font-weight: normal;

            .form-input
                margin-left: 20px;
                &:valid
                    border-bottom: 5px solid green;
        
                &:focus:invalid
                    border-bottom: 5px solid red;

            .form-input--wide
                width: 80%;

            .form-input--file
                border: 0 !important;
                margin: 10px;

            .form-submit
                width: 40%;
                height: 50px;

                margin: 30px 0px 20px 30%;


</style>
