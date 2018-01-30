<template>
    <div class="audio">
        <div class="play" :style="songBj">
        </div>
        <div class="mask">
            <img class="tools" src="../assets/images/tools.png" :class="{use:use}" alt="">
            <div class="disc" :class="{rotate:rotate}">
                <div class="songpic" :style="songBj" @click="play()">
                    <img :class="{show:show}" class="playpic vm" src="../assets/images/play-btn.png" alt="">
                    <audio ref="voice" id="voice" :src="songUrl" class="hide"></audio>
                </div>
            </div>
            <div class="s-detail">
                <p class="sname tc">{{sname}}</p>
                <p class="author tc">{{author}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                songCon:[],
                songDetail:{},
                songBj:'',
                songUrl:'',
                show:false,
                rotate:false,
                sname:'',
                author:'',
                use:false
            }
        },
        created(){
            // console.log(this.$store.store.state.count)
            let curl = window.location.href
            let sid = curl.split('?')
            console.log(sid)
            let songid = this.$store.store.state.count
            this.$axios.get('http://localhost:8888/music/url',{
                params:{
                    'id':sid[1]
                }
            })
            .then((res)=>{
                this.songUrl = res.data.data[0].url
            })
            .catch((res)=>{

            })

            this.$axios.get('http://localhost:8888/song/detail',{
                params:{
                    'ids':sid[1]
                }
            })
            .then((res)=>{
                this.songDetail = res.data.songs[0]
                this.songBj = `background:url(${this.songDetail.al.picUrl}) center/cover;`
                this.sname = this.songDetail.al.name
                this.author = this.songDetail.ar[0].name
            })
            .catch((res)=>{

            })
        },
        methods:{
            play(){
                if(this.show==false){
                    document.getElementById('voice').play();
                    this.rotate=true
                    this.show=true
                    this.use=true
                }else{
                    document.getElementById('voice').pause();
                    this.rotate=false
                    this.show=false
                    this.use=false
                }
            }
        }
    }
</script>

<style scoped>
    .audio {width: 100%;height: 100%;}
    .play {height: 100%;width: 100%;filter:blur(3px);}
    .mask {background: rgba(0,0,0,0.5);width: 100%;height: 100%;position: absolute;top: 0;left: 0;}
    .tools {width:100px;position: absolute;top: 0;left: 50%;margin-left: -60px;z-index:500;transition:all ease 1.5s;
    transform:rotate(0deg);transform-origin:0 0;}
    .use {transform:rotate(-20deg);}
    .disc {background: url('../assets/images/cricle.png') no-repeat;width: 340px;height: 340px;margin:90px auto 0;background-size: cover;
    text-align: center;}
    .songpic {width: 210px;height: 210px;border-radius:50%;margin:80px auto 0;padding-top: 72px;position: relative;top: 65px;}
    .playpic {width: 70px;height: 70px;display: inline-block;}
    .show {display: none;}
    .rotate {animation: disc 12s linear infinite;}
    .s-detail {width: 400px;margin:20px auto 0;}
    .sname {font-size: 20px;color:#fff;}
    .author {color:#fff;}
    @keyframes disc{
        0% {transform:rotate(0deg);}
        100% {transform:rotate(360deg);}
    }
</style>