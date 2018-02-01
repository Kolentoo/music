<template>
    <div class="dj">
        <div class="gridlist-demo-container">
            <mu-grid-list class="gridlist-demo">
                <mu-sub-header>推荐电台</mu-sub-header>
                <mu-grid-tile v-for="(program,index) in programs" :key="'program' + index" titlePosition="bottom" actionPosition="left" :rows="program.featured ? 2 : 1" :cols="program.featured ? 2 : 1">
                <img :src="program.picUrl"/>
                <span slot="title">{{program.name}}</span>
                <span slot="subTitle">{{program.program.description}}</span>
                <mu-icon-button icon="star_border" slot="action"/>
                </mu-grid-tile>
            </mu-grid-list>
        </div>
        <div class="dj-recom">
            <ul class="recom-con">
                <li class="recom-list" v-for="(recom,index) in recoms">
                    <div class="chart">
                        <img :src="recom.picUrl" alt="">
                        <p class="djname">{{recom.lastProgramName}}</p>
                    </div>
                    <p class="djdesc">{{recom.desc}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data () {
        return {
            programs:[],
            recoms:[]
        }
    },
    created(){
        this.$axios.get('http://localhost:8888/personalized/djprogram',{
            params:{}
        })
        .then((res)=>{
            this.programs=res.data.result
        })
        .catch((err)=>{

        })
        
        this.$axios.get('http://localhost:8888/dj/recommend/type',{
            params:{
                'type':1
            }
        })
        .then((res)=>{
            this.recoms = res.data.djRadios
            console.log(this.recoms)
        })
        .catch((err)=>{

        })
    }
}
</script>

<style>
.gridlist-demo-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.gridlist-demo{
  width: 500px;
  overflow-y: auto;
}

.recom-con {display:flex;justify-content:center;flex-direction:column;flex-wrap:wrap;}
.recom-list {width: 30%;}
img{width: 100%;}
</style>

