<template>
    <div class="audio">
        <div class="play" :style="songBj">
        </div>
        <div class="mask">
            <img class="tools" src="../assets/images/tools.png" alt="">
            <div class="disc">
                <img class="songpic vm" :src="songDetail.coverImgUrl" alt="">
                <img class="playpic vm" src="../assets/images/play-btn.png" alt="">
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
                songBj:''
            }
        },
        created(){
            
            let songid = this.$store.store.state.count
            this.$axios.get('http://localhost:8888/music/url',{
                params:{
                    'id':songid
                }
            })
            .then((res)=>{
                // console.log(res)
            })
            .catch((res)=>{

            })

            this.$axios.get('http://localhost:8888/playlist/detail',{
                params:{
                    'id':songid
                }
            })
            .then((res)=>{
                this.songDetail = res.data.result
                this.songBj = `background:url(${this.songDetail.coverImgUrl}) center/cover;`
                console.log(res)
            })
            .catch((res)=>{

            })
            
            
        }
    }
</script>

<style scoped>
    .audio {width: 100%;height: 100%;}
    .play {height: 100%;width: 100%;filter:blur(3px);}
    .mask {background: rgba(0,0,0,0.5);width: 100%;height: 100%;position: absolute;top: 0;left: 0;}
    .tools {width:120px;position: absolute;top: 0;left: 50%;margin-left: -60px;}
    .disc {background: url('../assets/images/cricle.png') no-repeat;width: 380px;height: 380px;margin:0 auto;background-size: 100%;
    margin-top: 105px;text-align: center;}
    .songpic {width: 230px;height: 230px;border-radius:50%;margin-top: 75px;}
    .playpic {width: 70px;height: 70px;position: absolute;top: 50%;left: 50%;margin:-95px 0 0 -35px;}
</style>