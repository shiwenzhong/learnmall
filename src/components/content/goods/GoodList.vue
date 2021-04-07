<template>
    <div class="goodlist">
        <good-list-item v-for="(item,index) in good" :key="index" :item="item" />
    </div>
</template>

<script>
import GoodListItem from './GoodListItem.vue'
export default {
    name:'GoodList',
    components:{GoodListItem},
    props:{
        good:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.goodlist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>