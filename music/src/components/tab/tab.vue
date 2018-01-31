<template>
<div>
  <mu-tabs :value="activeTab" @change="handleTabChange">
    <mu-tab value="tab1" title="推荐"/>
    <mu-tab value="tab2" title="MV"/>
    <mu-tab value="tab3" @active="handleActive" title="电台"/>
  </mu-tabs>
  <div v-if="activeTab === 'tab1'">
        <swiper></swiper>
        <recommend></recommend>
        <song></song>
  </div>
  <div v-if="activeTab === 'tab2'">
    <mv></mv>
  </div>
  <div v-if="activeTab === 'tab3'">
    <h2>Tab Three</h2>
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
        activeTab: 'tab1'
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
    }
}
</script>

<style scoped>
    .mu-tabs {background: #fff;color:#333;}
    .mu-tab-link {color:#333;}
    .mu-tab-active {color:#333;}
</style>