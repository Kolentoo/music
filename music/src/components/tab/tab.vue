<template>
<div>
  <mu-tabs :value="activeTab" @change="handleTabChange">
    <mu-tab value="tab1" title="推荐"/>
    <mu-tab value="tab2" title="MV"/>
    <mu-tab value="tab3" @active="handleActive" title="电台"/>
  </mu-tabs>
  <div v-if="activeTab === 'tab1'">
        <swiper :msg="msg"></swiper>
        <recommend></recommend>
        <song></song>
  </div>
  <div v-if="activeTab === 'tab2'">
    <mv></mv>
  </div>
  <div v-if="activeTab === 'tab3'">
    <dj></dj>
  </div>
</div>
</template>

<script>
    import swiper from '../../components/swiper/swiper'
    import recommend from '../../components/recommend/recommend'
    import song from '../../components/song/song'
    import mv from '../../pages/mv'
    import dj from '../../pages/dj'
    export default {
    data () {
        return {
            props:[],
            activeTab: 'tab1',
            msg:''
        }
    },
    components:{
        recommend,swiper,song,mv,dj
    },
    methods: {
        handleTabChange (val) {
        this.activeTab = val
        },
        handleActive () {
        // window.alert('tab active')
        }
    },
    created(){
        this.$axios.get('http://localhost:8888/personalized/privatecontent',{
            parmas:{}
        })
        .then((res)=>{
            console.log(res);
            this.msg = res;
        })
    }
}
</script>

<style scoped>
    .mu-tabs {background: #fff;color:#333;}
    .mu-tab-link {color:#333;}
    .mu-tab-active {color:#333;}
</style>