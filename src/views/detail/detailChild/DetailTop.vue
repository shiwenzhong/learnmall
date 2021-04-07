<template>
        <nav-bar>
            <div slot="left" class="left" @click="back">
               <i class="el-icon-arrow-left"></i>
            </div>
            <div slot="center" class="title">
                <div class="title-item"  v-for="(item,index) in title"
                 :key="index" :class="{active:index === currentIndex}" @click="handleClick(index)">{{item}}</div>
            </div>
        </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
    export default {
        name:'DetailTop',
        data() {
            return {
                title:['商品','参数','评论','推荐'],
            }
        },
        props:{
            currentIndex:{
                type:Number
            }
        },
        components: { NavBar },
        methods: {
            handleClick(index){
                this.currentIndex = index ;
                this.$emit("changeTop",index)
            },
            back(){
                this.$router.back()
            }
        },
    }
</script>

<style scoped>
.title {
    display: flex;
    text-align: center;
}
.title-item{
    flex: 1;
    color: rgb(78, 68, 68);
    transition: all 0.5s;
}
.left{
    font-size: 20px;
}
.active{
    color: deeppink;
}
</style>