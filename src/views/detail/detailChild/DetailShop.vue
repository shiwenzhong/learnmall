<template>
    <div>
        <div class="header">
           <img :src="shop.logo" alt="">
            <p>{{shop.name}}</p>
        </div>
        <div class="content">
            <div class="left">
                <div class="left-l">
                    <div>{{shop.sells|change}}</div>
                    <div>总销量</div>
                </div>
                <div class="left-r">
                    <div>{{shop.goodsCount}}</div>
                    <div>全部宝贝</div>
                </div>
            </div>
            <div class="right">
                <div class="right-l" v-for="(item,index) in shop.score" :key="index">
                    <span>{{item.name}}</span>
                    <span :style="{color:item.isBetter?'red':'green'}">{{item.score}}</span>
                    <span :style="{background:item.isBetter?'red':'green'}">{{item.isBetter?'高':'低'}}</span>
                </div>
            </div>
        </div>
        
    </div>
    
</template>

<script>
    export default {
        name:'DetailShop',
        props:{
            shop:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        filters:{
            change(value){
                return (value/10000).toFixed(1)+"万"
            }
        }
    }
</script>

<style scoped>
.header{
    margin: 40px 0;
    vertical-align: center;
    display: flex;
}
.header img {
    width: 50px;
    border-radius: 50%;
    border: 1px solid beige;
}
p{
  padding-top: 20px;
  margin-left: 10px;
  font-size: 20px;
}

.content{
    display: flex;
}
.left{
    display: flex;
    width: 50%;
}
.left-l,.left-r{
    flex: 1;
    text-align: center;
    font-size: 18px;
}
.left-l div:first-child,.left-r div:first-child{
   margin-bottom: 10px;
}
.right{
    flex: 1;
    margin-left: 30px;
}

.right-l span{
    margin-left: 5px;
    display: inline-block;
    /* width: 10px; */
    margin-bottom: 10px;
}
.right-l span:nth-child(2){
    width: 40px;
    color: chartreuse;
}
.right-l span:nth-child(3){
    background-color: chartreuse;
    color: white;
    font-weight: bold;
}
</style>