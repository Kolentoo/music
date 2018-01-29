<template>
    <div class="song">
        <h2></h2>
        <ul class="song-con">
            <li class="song-list" v-for="song in songs">
                <p class="sname">{{song.name}}</p>
                <p class="author">{{song.song.artists[0].name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                songs:[]
            }
        },
        created(){
            this.$axios.get('http://localhost:8888/personalized/newsong',{
                parmas:{}
            })
            .then((res)=>{
                console.log(res)
                this.songs = res.data.result
            })
            .catch((err)=>{

            })
        }
    }
</script>

<style>
    
</style>