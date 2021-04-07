<template>
    <!-- <swiper class="wrapper">
        <swiper-item v-for="(item,index) in swiperItem" :key="index">
            <img :src="item" alt="">
        </swiper-item>
    </swiper> -->

    <el-carousel indicator-position="outside" height="400px" :interval="3000">
        <el-carousel-item v-for="item in swiperItem" :key="item">
            <img :src="item" alt="" height="399px">
        </el-carousel-item>
    </el-carousel>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper.vue'
import SwiperItem from 'components/common/swiper/SwiperItem.vue'
    export default {
  components: { Swiper, SwiperItem },
        name: 'SwiperDetail',
        props:{
            swiperItem:{
                type:Array,
                default(){
                    return []
                }
            }
        },
    }
</script>

<style scoped>
.el-carousel {
    margin-bottom: 10px;
}
</style>