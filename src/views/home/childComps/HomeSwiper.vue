<template>
    <!-- <swiper>
        <swiper-item v-for="(item,index) in banners" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="" @load="swiperLoad">
          </a>
        </swiper-item>
      </swiper> -->
    <el-carousel :interval="3000" type="card" height="100px" arrow="never">
        <el-carousel-item v-for="item in banners" :key="item.image">
            <img :src="item.image" alt="" @load="swiperLoad">
        </el-carousel-item>
    </el-carousel>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
    name:'HomeSwiper',
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            load:false
        }
    },
    components:{
        Swiper,SwiperItem
    },
    methods: {
        swiperLoad(){
            if(!this.load){
                console.log("加载中....")
                this.$emit('swiperLoad')
                this.load = true
            }
        }
    },
}
</script>

<style scoped>


</style>