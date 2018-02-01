<template>
    <div class="song">
        <h2>最新音乐</h2>
        <ul class="song-con">
            <li class="song-list clearfix" v-for="song in songs" @click="getid(song)">
                <div class="detail fl">
                    <p class="sname">{{song.name}}</p>
                    <p class="author"><i class="iconfont icon-pinzhi"></i>{{song.song.artists[0].name}}</p>
                </div>
                <i class="iconfont icon-bofang fr"></i>
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
                params:{}
            })
            .then((res)=>{
                this.songs = res.data.result
            })
            .catch((err)=>{

            })
        },
        methods:{
            getid(song){
                this.$store.store.commit('increment',song.id)
                this.$router.push(`play?'${song.id}`)
            }
        }
    }
</script>

<style>
    .song h2{font-size: 14px;line-height: 54px;color:#333;margin-left: 15px;}
    .song .song-list {padding:6px 0;margin:0 10px;border-bottom: 1px solid #eee;}
    .song .detail {width: 85%;}
    .song .sname {font-size: 18px;color:#333;}
    .song .author {font-size: 12px;color:#888;margin-top: 3px;}
    .song .icon-bofang {font-size: 20px;color:#bbb;margin:10px 5px 0 0;}
    .song .icon-pinzhi {font-size: 12px;color:rgba(246,210,178);margin-right: 5px;}
</style>