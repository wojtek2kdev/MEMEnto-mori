<template>
   <form action="" method="post">
       <div class="form">
            <div class="form-content">
                <input class="form-input" type="text" name="login" placeholder="username">
                <input class="form-input" type="password" name="password" placeholder="password">
                <input class="form-input submit" type="submit" value="LOGIN">
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
    .form
        width: 500px;
        height: 400px;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background: #eee;
        box-shadow: 1px 1px 2px 1px #888;

        .form-content

            display: flex;
            flex-flow: column;

            margin: 50px;
            height: calc(100% - 100px);

            .form-input
                flex-grow: 1;

                border-radius: 0px;
                border: none;

                background: lightgrey;

                margin: 10px 0px 10px 0px;

    .submit
        background: green;

        font-weight: bold;
        color: white;
        font-size: 25;
</style>

