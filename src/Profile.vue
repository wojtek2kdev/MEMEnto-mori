<template>
    <background>
        <navbar></navbar>
        <div class="profile">
            <h1 class="profile-username">{{ username }}</h1>
            <div v-for="info of informations" :key="info" class="profile-info">
                <h2 class="profile-info--label">{{ info.label }}</h2>
                <p :class="`profile-info--value profile-info--value_${info.type}`">{{ info.value }}</p>
            </div>
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
            ]
        }
    },
    created: function(){
        this.$store.commit('fetchUser');
        this.fetchUserInfo();
    },
    methods: {
        fetchUserInfo: function(){

            console.log("USERNAME PROFILE:", this.$route.params.username);

            const self = this;

            const url = this.$route.params.username ? `/api/user/${this.$route.params.username}` : `/api/user`;

            axios.get(url)
            .then(userinfo => {
                console.log(userinfo.data);
                const data = userinfo.data;
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
