<template>
<div>
  <mu-tabs :value="activeTab" @change="handleTabChange">
    <mu-tab value="tab1" title="推荐"/>
    <mu-tab value="tab2" title="排行榜"/>
    <mu-tab value="tab3" @active="handleActive" title="搜索"/>
  </mu-tabs>
  <div v-if="activeTab === 'tab1'">
        <recommend></recommend>
  </div>
  <div v-if="activeTab === 'tab2'">
    <h2>Tab Two</h2>
    <p>
      这是第二个 tab
    </p>
  </div>
  <div v-if="activeTab === 'tab3'">
    <h2>Tab Three</h2>
    <p>
      这是第三个 tab
    </p>
  </div>
</div>
</template>

<script>
    import recommend from '../../pages/recommend'
    export default {
    data () {
        return {
        activeTab: 'tab1'
        }
    },
    components:{
        recommend
    },
    methods: {
        handleTabChange (val) {
        this.activeTab = val
        },
        handleActive () {
        window.alert('tab active')
        }
    }
}
</script>

<style scoped>
    .mu-tabs {background: #fff;color:#333;}
    .mu-tab-link {color:#333;}
    .mu-tab-active {color:#333;}
</style>