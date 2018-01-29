<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" class="swiper-banner">
    <!-- slides -->
    <swiper-slide v-for="(slide,index) in slides" :key="index">
        <img :src="slide.picUrl" alt="" style="height:280px;width:80%">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev hide" slot="button-prev"></div>
    <div class="swiper-button-next hide" slot="button-next"></div>
    <div class="swiper-scrollbar hide"   slot="scrollbar"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        slides: [],
        swiperOption: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          spaceBetween: 20,
          slidesPerView:1,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: {
            delay: 3000,//5秒切换一次
          },
          // direction : 'vertical',
          // effect: 'coverflow',
          grabCursor: true,
          // setWrapperSize: true,
          // autoHeight: true,
          pagination: {
              el: '.swiper-pagination',
          },
          paginationClickable: true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          // scrollbar:'.swiper-scrollbar',
          // mousewheelControl: true,
          // observeParents: true,
          parallax:true,
          loop:true
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          // debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          // onTransitionStart(swiper){
          //   console.log(swiper)
          // },
          // more Swiper configs and callbacks...
          // ...
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1500, false)
    },
    methods: {
      callback() {
      }
    },
    created(){
        this.$axios.get('http://localhost:8888/personalized/djprogram',{
            parmas:{}
        })
        .then((res)=>{
            this.slides=res.data.result
            // this.title=res.data.name
            // this.program = res.data.programs
        })
        .catch((err)=>{
        })
    }
  }
</script>

<style>
    .swiper-wrapper {height:200px;margin:0 auto;width: 80%;}
    .swiper-banner .swiper-container {width:100%;height:200px;}
    .swiper-banner .swiper-container .swiper-slide {height: 200px;}
    .swiper-banner .swiper-container .swiper-slide img{height: 300px;width: 100%;}
    .swiper-banner .swiper-pagination-bullet {width: 6px;height: 6px;margin:0 0.4rem;}
    .swiper-banner .swiper-pagination-bullet-active {background: #fff;}
    .swiper-banner .swiper-pagination-fraction,.swiper-banner .swiper-pagination-custom,.swiper-banner .swiper-container-horizontal > .swiper-pagination-bullets {bottom: 1rem;}
</style>  