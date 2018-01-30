<template>
    <div class="gridlist-demo-container">
    <mu-grid-list class="gridlist-demo">
        <mu-sub-header>{{title}}</mu-sub-header>
        <mu-grid-tile v-for="tile, index in list" :key="index">
        <img :src="list[index].coverUrl"/>
        <span slot="title">{{list[index].name}}</span>
        <span slot="subTitle"><b>{{tile.reason}}</b></span>
        <mu-icon-button icon="star_border" slot="action"/>
        </mu-grid-tile>
    </mu-grid-list>
    </div>
</template>

<script>
export default {
  data () {
    return {
        title:'',
        list: []
    }
  },
  created(){
    this.$axios.get('http://localhost:8888/program/recommend',{
        parmas:{}
    })
    .then((res)=>{
        console.log(res)
        this.title=res.data.name
        this.list = res.data.programs
    })
    .catch((err)=>{
    })
  }
}
</script>

<style scoped>
    .mu-sub-header {color:#333;}
    .gridlist-demo-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    }

    .gridlist-demo{
    overflow-y: auto;
    }
    .mu-grid-tile>img {width: 100%;}
</style>