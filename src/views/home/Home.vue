<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :title="['流行','新款','精选']" class="tabcontrol" @tabclick="tabclick" ref="tab2" v-show="istabshow" />
    <scroll class="home-scroll" :probeType="3" :pullUpLoad="true" ref="scrollC" @scroll="change" @loadInfo="loadInfo">
    <home-swiper :banners="banners" @swiperLoad="swiperLoad" />
    <recommend :recommends="recommends" />
    <feture />
    <tab-control :title="['流行','新款','精选']" class="tabcontro2" @tabclick="tabclick" ref="tab1" />
    <good-list :good="showInfo" />
    </scroll>
    <back-top @click.native="totop" v-show="isShow" />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from '../../components/content/tabControl/TabControl.vue'
import GoodList from '../../components/content/goods/GoodList.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'

import {getHomeMultidata,getHomeData} from 'network/home'

import HomeSwiper from './childComps/HomeSwiper'
import Recommend from './childComps/Recommend'
import Feture from './childComps/Feture.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'

export default {
  name: 'Home',
  components:{NavBar,HomeSwiper,Recommend,Feture, TabControl, GoodList, Scroll, BackTop},
  data() {
    return {
      isShow:false,
      saveY:0,
      istabshow:false,
      tabControlHeight:0,
      currenttype:'pop',
      banners:[],
      recommends:[],
      goods:{
        new:{page:0,list:[]},
        pop:{page:0,list:[]},
        sell:{page:0,list:[]}
      }
    }
  },
  computed:{
    showInfo(){
      return this.goods[this.currenttype].list;
    }
  },
  created() {
    this.getHomeMultidata();
    this.getHomeData('new');
    this.getHomeData('pop');
    this.getHomeData('sell');
  },
  activated() {
    this.$refs.scrollC.refresh();
    this.$refs.scrollC.backTotop(0,this.saveY,0);
  },
  deactivated() {
    this.saveY = this.$refs.scrollC.scroll.y;
  },
  methods: {
    //获取轮播图和下面数据
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    //获取下部分数据
    getHomeData(type){
      let page = this.goods[type].page+1;
      getHomeData(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page=this.goods[type].page+1;
        this.$refs.scrollC.finishPull();
      })
    },
    //tabcontrol点击
    tabclick(index){
      switch(index) {
        case 0 : this.currenttype = 'pop';break
        case 1 :this.currenttype = 'new' ; break
        case 2 :this.currenttype = 'sell';break
      }
      this.$refs.tab1.currentIndex = index
      this.$refs.tab2.currentIndex = index
    },
    //返回顶部
    totop(){
      this.$refs.scrollC.backTotop(0,0,500);
    },
    //滚动区域改变Y时
    change(position){
        this.isShow = position.y < -1000;
        console.log("位置"+(-position.y));
        this.istabshow = (-position.y) > this.tabControlHeight;
    },
    //上拉加载
    loadInfo(){
      this.getHomeData(this.currenttype);
    },
    //防抖函数（在固定的时间内做一次）
    debounce(fun,delay){
      let timer = null;
      return function(){
      if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{
          fun.apply(this);
        },delay);
      }
    },
    swiperLoad(){
      this.tabControlHeight = this.$refs.tab1.$el.offsetTop;
    }
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scrollC.refresh,100);
      this.$bus.$on('itemImgLoad',()=>{
        refresh();
      })
  },
}

</script>

<style scoped>
#home{
  position: relative;
  height: 100vh;
}
.home-scroll{
  /* height: 300px; */
  /* overflow: hidden; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 999;
}
.tabcontrol{
  position: relative;
  z-index: 999;
  background-color: white;
}
</style>