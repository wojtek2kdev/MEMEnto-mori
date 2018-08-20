<template>
    <background>
        <navbar></navbar>
        <div v-if="username" class="profile">
            <h1 class="profile-username">{{ username }}</h1>
            <div v-for="info of informations" :key="info" class="profile-info">
                <h2 class="profile-info--label">{{ info.label }}</h2>
                <p :class="`profile-info--value profile-info--value_${info.type}`">{{ info.value }}</p>
            </div>
        </div>
        <div v-else class="profile">
            <h1 class="profile-error">{{ error }}</h1>
        </div>
    </background>
</template>
<script>
import axios from 'axios';

export default {
    name: 'app',
    props: ['username'],
    data(){
        return{
            username: null,
            informations: [
            ],
            error: "This user not exists"
        }
    },
    created: function(){
        const self = this;

        this.$store.dispatch('fetchUser').then(() => {
            self.fetchUserInfo();
        });

    },
    methods: {
        fetchUserInfo: function(){

            console.log("USERNAME PROFILE:", this.$route.params.username);

            const self = this;
            const username = this.$route.params.username;
            const url = username ? `/api/user/${username}` : `/api/user`;

            this.username = this.$store.state.user.username;

            axios.get(url)
            .then(userinfo => {
                const data = userinfo.data;

                self.username = data.username;
                self.setInformation("Join", data.created_at, "");
                self.setInformation("Likes", data.likes, "likes");
                self.setInformation("Dislikes", data.dislikes, "dislikes");
            });
        },
        setInformation: function(label, value, type){
            this.informations.push({
                label: label,
                value: value,
                type: type
            });
        }
    }
}
</script>
<style lang="sass" scoped>
    .profile
        display: flex
        flex-flow: column

        width: 400px
        height: auto

        background: #eee;
        box-shadow: 1px 1px 2px 1px #888;

        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%, -50%)

        .profile-username
            font-size: 1.5rem
            font-weight: bold
            text-align: center

            margin: 10px
            
            flex: 1 1

        .profile-error
            font-size: 1.5rem
            font-weight: bold
            text-align: center
            color: red

            margin: 50px 10px 50px 10px
            
        .profile-info
            flex: 1 1
            margin: 10px

            .profile-info--label
                font-size: 1.3rem
                font-weight: bold

                padding-left: 20px

            .profile-info--value
                padding-left: 30px

                &_likes
                    color: green
                    font-weight: bold
                &_dislikes
                    color: red
                    font-weight: bold

</style>
