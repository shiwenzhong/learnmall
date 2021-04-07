<template>
    <div class="wrapper">
        <div class="left" :class="{'actived':choose}" @click="allChoose">
            <i class="el-icon-circle-check"></i>
            全选
        </div>
        <div class="center">
            合计：￥{{totolPrice}}
        </div>
        <div class="right">
            <el-button type="danger" >去计算({{chooseT}})</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'CartBottom',
        props:{
            lists:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods: {
            allChoose(){
                this.$store.commit('allchange')
            }
        },
        computed:{
            totolPrice(){
               return this.lists.filter(item=>item.chooseI)
                                .reduce((pre,now)=>pre+now.price*now.count,0).toFixed(2)
            },
            choose(){
                // return this.lists.filter(item=>!item.chooseI).length === 0
                return this.lists.every(item=>item.chooseI)
            },
            chooseT(){
                return this.lists.filter(item=>item.chooseI).length
            }
        }
    }
</script>

<style scoped>
.wrapper{
    display: flex;
    position: fixed;
    bottom: 50px;
}
.center{
    color: red;
    width: 150px;
    margin: 0 0 0 34px;
}
.wrapper div {
    line-height: 40px;
}
.left{
    width: 80px;
}
i{
    font-size: 24px;
}
.actived i{
    color: red;
    
}
</style>