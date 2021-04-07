<template>
    <div class="tabcontrol">
        <div class="tabcontrol-item" v-for="(item,index) in title" :key="index"
         :class="{active:currentIndex===index}" @click="handleChangeIndex(index)">
            <span>
                {{item}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        title:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    data() {
        return {
            currentIndex:0
        }
    },
    methods: {
        handleChangeIndex(index){
            this.currentIndex = index;
            this.$emit("tabclick",index)
        }
    },
}
</script>

<style>
.tabcontrol {
    display: flex;
}
.tabcontrol-item{
    flex: 1;
    text-align: center;
    line-height: 44px;
}
span{
    padding: 5px;
    color: black;
    transition: all 0.5s;
    border-bottom: 3px solid transparent;
}
.active span {
    border-bottom: 3px solid deeppink;
    color: deeppink;

}
</style>