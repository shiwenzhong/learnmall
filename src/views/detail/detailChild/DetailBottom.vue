<template>
    <div class="wrapper">
        <div class="left">
            <div class="left-item">
                <i class="el-icon-user"></i>
                <p>客服</p>
            </div>
            <div class="left-item">
                <i class="el-icon-s-shop"></i>
                <p>店铺</p>
            </div>
            <div class="left-item">
                <i class="el-icon-star-off"></i>
                <p>收藏</p>
            </div>
        </div>
        <div class="right">
            <el-button-group>
                <el-button type="primary" @click="addCart" icon="el-icon-shopping-cart-full">加入购物车</el-button>
                <el-button type="danger" icon="el-icon-shopping-bag-2">购买</el-button>
            </el-button-group>
        </div>
    </div>
</template>

<script>
    export default {
        name:'DetailBottom',
        methods: {
            addCart(){
                this.$emit('addCart');
            }
        },
    }
</script>

<style scoped>
.wrapper{
    height: 49px;
    width: 100%;
    background-color: #fff;
    display: flex;
}
.left{
    display: flex;
    width: 130px;
}
.left-item{
    flex: 1;
    padding-top: 5px;
    text-align: center;
    font-size: 16px;
}
.right{
    flex: 1;
    line-height: 49px;
}
</style>