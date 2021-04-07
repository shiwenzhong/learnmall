<template>
    <div class="good-item" @click="handleClick">
        <div>
            <img v-lazy="showImg" alt="" @load="load">
            <!-- <el-image :src="showImg" alt="" @load="load" lazy></el-image> -->
            <!-- <img :src="showImg" alt="" @load="load" lazy> -->
        </div>
        <p>{{item.title}}</p>
        <span class="price">{{item.price}}☆</span>
        <span>{{showSell}}</span>
    </div>
</template>

<script>
export default {
    name:'GoodListItem',
    props:{
        item:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed:{
        showImg(){
            return this.item.image || this.item.show.img
        },
        showSell(){
            return this.item.itemSale || this.item.sale
        }
    },
    methods: {
        load(){
            this.$bus.$emit("itemImgLoad");
        },
        handleClick(){
            this.$router.push('/detail/'+this.item.iid);
        }
    },
}
</script>

<style>
.good-item{
    width: 48%;

}
img{
    width: 100%;
}
p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.price{
    color: red;
}
</style>