<template>
    <div class="wrapper" ref="wrap">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
    export default {
        name:'Scroll',
        data() {
            return {
                scroll:null
            }
        },
        props:{
            probeType:{
                type:Number,
                default:0
            },
            pullUpLoad:{
                type:Boolean,
                default:false
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrap,{
                'click':true,
                probeType:this.probeType,
                pullUpLoad:this.pullUpLoad
            })

            if(this.probeType === 2 || this.probeType === 3){
                this.scroll.on('scroll',(position)=>{
                    this.$emit('scroll',position);
                })
            }

            if(this.pullUpLoad){
                this.scroll.on('pullingUp',()=>{
                    this.$emit("loadInfo")
                })
            }
        },
        updated() {
            // this.scroll.refresh();
        },
        methods: {
           backTotop(x,y,time=500){
               this.scroll.scrollTo(x,y,time);
           },
           finishPull(){
               this.scroll.finishPullUp();
           },
           refresh(){
               this.scroll.refresh();
           }
        },
    }
</script>

<style scoped>

</style>