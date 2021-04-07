<template>
<div class="wrapper">
    <div v-for="(item,index) in lists" :key="index" class="content">
        <div class="left">
            <i :class="{'el-icon-circle-check':true,'actived':item.chooseI}"  @click="handleClick(item.iid)"></i>
        </div>
        <!-- <div class="center"> -->
            <img :src="item.image" alt="">
        <!-- </div> -->
        <div class="right">
            <p>{{item.title}}</p>
            <p>{{item.desc}}</p>
            <p><span>&yen;{{item.price}}</span><span>×{{item.count}}</span></p>
        </div>

    </div>
</div>
</template>

<script>
    export default {
        name:'CartList',
        props:{
            lists:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods: {
            handleClick(iid){
                this.$store.commit('change',iid)
            }
        },
    }
</script>

<style scoped>
.content{
    display: flex;
    padding: 10px 0;
    border-bottom: 2px solid #eee;
}
.left{
    width: 30px;
    font-size: 24px;
    text-align: center;
    box-sizing: border-box;
    line-height: 110px;
}
img{
    width: 20%;
}
.right{
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 10px;
}
.right p {
    margin-bottom: 20px;
    font-size: 16px;
}
.right p span:first-child {
    color: red;
    font-size: 20px;
    margin-right: 150px;
}
.el-icon-circle-check{
    color: darkgray;
}
.actived{
    color: red;
}
</style>