<template>
    <div class="index">
        <vheader></vheader>
        <vtab></vtab>
    </div>
</template>

<script>
    import vheader from '../components/header/header'
    import vtab from '../components/tab/tab'
    import swiper from '../components/swiper/swiper'
    export default{
        data(){
            return{

            }
        },
        components:{
            vheader,vtab,swiper
        },
        created(){
            let uid = sessionStorage.getItem('uid');
            // this.$axios.get('http://localhost:8888/user/detail',{
            //     params:{
            //         'uid':uid
            //     }
            // })
            // .then((res)=>{
            //     console.log(res)
            // })
            // .catch((err)=>{

            // })
            
        }
    }
</script>

<style scoped>

</style>