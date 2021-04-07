<template>
    <div class="wrapper">
        <detail-top class="tou" @changeTop="changeTop" :current-index="currentIndex" />
        <div class="content">
             <swiper-detail :swiperItem="swiperItem" style="margin-bottom:10px"/>
             <detail-info :goods="goods" />
             <detail-shop :shop="shop" />
             <detail-show :detailInfo="detailInfo" />
             <detail-param ref="canshu" :paramInfo="paramInfo" />
             <detail-pingl ref="pinglun" :pinglun="pinglun" />
             <good-list ref="tuijian" :good="recommend" />
        </div>
        <detail-bottom class="bottom" @addCart="addCart" />
        <back-top class="toTop" v-show="isShow" @click.native="toTop" />
    </div>
</template>

<script>
import DetailTop from './detailChild/DetailTop.vue';

import {getdata,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
import SwiperDetail from './detailChild/SwiperDetail.vue';
import DetailInfo from './detailChild/DetailInfo.vue';
import DetailShop from './detailChild/DetailShop.vue';
import Scroll from 'components/common/scroll/Scroll.vue';
import DetailShow from './detailChild/DetailShow.vue';
import DetailParam from './detailChild/DetailParam.vue';
import DetailPingl from './detailChild/DetailPingl.vue';
import GoodList from 'components/content/goods/GoodList.vue';
import DetailBottom from './detailChild/DetailBottom'
import BackTop from '../../components/content/backTop/BackTop.vue';

export default {
  components: { DetailTop, SwiperDetail, DetailInfo, DetailShop, Scroll, DetailShow, DetailParam, DetailPingl, GoodList, DetailBottom, BackTop },
        name:'Detail',
        data() {
            return {
                isShow:false,
                iid:'',
                swiperItem:[],
                goods:{},
                shop:{},
                detailInfo:{},
                paramInfo:{},
                pinglun:{},
                recommend:[],
                offsetY:[0],
                currentIndex:0
            }
        },
        created() {
            this.iid = this.$route.params.iid;
            getdata(this.iid).then(res=>{
                const data = res.result
                this.swiperItem = data.itemInfo.topImages
                this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
               this.shop = new Shop(data.shopInfo);
               this.detailInfo = data.detailInfo
               this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
               if(data.rate.list){
                    this.pinglun = data.rate.list[0]
               }
            }),
            getRecommend().then(res=>{
                this.recommend = res.data.list;
            }) ,
            window.onscroll=()=>{
                let height = document.documentElement.scrollTop || document.body.scrollTop;
                this.isShow = height>1200
                for(let i =0 ; i<this.offsetY.length ; i++){
                    if(i==this.offsetY.length-1 && height>this.offsetY[i]){
                        this.currentIndex = i;
                    }
                    if(height>this.offsetY[i]&& height<this.offsetY[i+1]){
                        this.currentIndex = i;
                        break;
                    }
                }
            }
        },
        watch:{

        },
        updated() {
            //保存各组件到顶部的高度
            this.offsetY = [0];
            this.offsetY.push(this.$refs.canshu.$el.offsetTop)
            this.offsetY.push(this.$refs.pinglun.$el.offsetTop)
            this.offsetY.push(this.$refs.tuijian.$el.offsetTop)
        },
        methods: {
            changeTop(index){
                //点击跳转到组件对应的高度
                window.scrollTo(0,this.offsetY[index]);
            },
            toTop(){
                window.scroll({
                    top:0,
                    left:0,
                    behavior:'smooth'
                })
            },
            addCart(){
                const info = {}
                info.image = this.swiperItem[0]
                info.title = this.goods.title
                info.desc = this.goods.desc
                info.price = this.goods.lowNowPrice
                info.iid = this.iid
                info.chooseI = true
                info.count = 1
                this.$store.commit('addCart',{id:this.iid,info})
            }
        },
        
    }
</script>

<style scoped>
.tou{
    position: fixed;
    z-index: 9999;
    background-color: #eee;
    top: 0px;
}
.content{
    position: relative;
    top: 44px;
    bottom: 49px;
    z-index: 999;
    background-color: #fff;
    padding-bottom: 55px;
}
.bottom{
    position:fixed;
    bottom: 0;
    z-index: 99999;
}
.toTop{
    position: fixed;
    right: -30px;
    z-index: 9999;
    bottom: 55px;
}
</style>