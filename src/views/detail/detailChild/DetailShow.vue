<template>
    <div class="wrapper">
        <div class="title">{{detailInfo.desc}}</div>
        <div class="content" v-for="(item,index) in detailInfo.detailImage" :key="index">
            <h4>{{item.key}}</h4>
            <div class="img" v-for="(item,index) in item.list" :key="index">
                <img :src="item" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'DetailShow',
        props:{
            detailInfo:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
.wrapper{
    width: 100%;
    border-top: 5px solid #eee;
    padding-top: 30px;
}
.title{
    padding-bottom: 30px;
}
.img img{
    width: 100%;
}
</style>