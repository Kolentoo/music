<template>
    <div class="mv">
        <ul class="mv-con">
            <li class="mv-list" v-for="(mv,index) in mvs" @click="mvplay(mv)">
                <div class="img-box">
                    <img class="g10 vm" :src="mvs[index].cover" alt="">
                    <img class="vm play-pic" src="../assets/images/play-btn.png" alt="">
                    <i class="mid hide">{{mvs[index].id}}</i>
                    <video controls @click="pause()" autoplay id="video" v-if="show==mv.id" :src="video"></video>
                </div>
                <div class="detail">
                    <p class="name"><i class="ranking">排名{{index+1}}</i>{{mvs[index].artistName}}</p>
                    <p class="desc">{{mvs[index].briefDesc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                mvs:[],
                video:'',
                show:false,
                state:0
            }
        },
        created(){
            this.$axios.get('http://localhost:8888/top/mv',{
                parmas:{
                }
            })
            .then((res)=>{
                console.log(res)
                this.mvs = res.data.data
            })
            .catch((err)=>{

            })
        },
        methods:{
            mvplay(mv){
                this.show = mv.id
                console.log(this.show)
                this.$axios.get(`http://localhost:8888/mv?mvid=${this.show}`,{
                })
                .then((res)=>{
                    console.log(res)   
                    this.video = `http://localhost:8888/mv/url?url=${res.data.data.brs[480]}` 
                })
                .then(()=>{

                })
                .catch((err)=>{

                })
            },
            pause(){
                if(this.state===0){
                    document.getElementById('video').pause()
                    this.state=1
                }else{
                    document.getElementById('video').play()
                    this.state=0
                }
            }
        }
    }
</script>

<style scoped>
    .mv-list {margin-bottom: 15px;}
    .img-box {position: relative;}
    .detail {margin:10px 10px;}
    .ranking {margin-right: 8px;font-weight:bold;color:#7e57c2;}
    .name {font-size: 16px;color:#333;text-align: left;}
    .desc {font-size: 14px;}
    .play-pic {width: 46px;height: 46px;position: absolute;top: 50%;left: 50%;margin:-23px 0 0 -23px;}
    .hide {display: none;}
    video {position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index:600;}
</style>