<template>
    <div class="wrapper">
        <div class="title">{{goods.title}}</div>
        <div class="prices">
            <span class="price" :style="{color:goods.discountBgColor}">{{goods.price}}</span>
            <span class="oldprice">{{goods.oldPrice}}</span>
            <span class="desc" >{{goods.discountDesc}}</span>
        </div>
        <div class="columns">
            <span v-for="(item,index) in goods.columns" :key="index">{{item}}</span>
        </div>
        <div class="services">
            <template v-for="item in goods.services" >
                <span v-if="item.icon!=undefined" :key="item.name">
                <img :src="item.icon" alt="">
                {{item.name}}
            </span>
            </template>
            
        </div>
    </div>
</template>

<script>
    export default {
        name:'DetailInfo',
        props:{
            goods:{
                type:Object,
                default(){
                    return {}
                    
                }
            }
        },
        mounted() {
        },
    }
</script>

<style  scoped>
.wrapper{
    border-bottom: 5px solid #eee;
    padding-bottom: 20px;
}
.title{
    margin: 10px 0;
    font-weight: bold;
}

.prices span{
    margin-right: 5px;
}
.prices span:last-child{
    border-radius: 40%;
    background-color: #f13e3a;
    padding: 5px;
    color: white;
}
.price{
    font-size: 20px;
}
.oldprice{
    text-decoration: line-through;
}
.columns{
    display: flex;
    font-size: 14px;
    margin-top: 20px;
    color: rgb(204, 199, 199);
    justify-content: space-between;
    /* text-align: center; */
}
.columns span{
    flex: 1;
}
.columns span:last-child{
    text-align: center;
}
.services{
    display: flex;
    font-size: 12px;
    justify-content:space-around;
    margin-top: 15px;
}
.services img{
    width: 10px
}
</style>