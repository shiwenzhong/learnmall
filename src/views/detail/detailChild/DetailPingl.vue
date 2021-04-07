<template>
    <div class="wrapper">
        <div class="title">
            <span>用户评价</span>
            <span>更多</span>
        </div>
        <div class="user">
            <!-- <img :src="pinglun.user.avatar" alt=""> -->
            <!-- <span>{{pinglun.user.uname}}</span> -->
        </div>
        <div class="content">
            <p class="content-c">{{pinglun.content}}</p>
            <span class="time">{{pinglun.created | changeTime}}</span>
            <span class="style">{{pinglun.style}}</span>           
        </div>
    </div>
</template>

<script>
    export default {
        name:'DetailPingl',
        props:{
            pinglun:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        mounted() {
            // console.log(this.pinglun.user.avatar)
            // console.log(this.pinglun.user.uname)
        },
        filters:{
            changeTime(time){
                const data = new Date(time);
                const year = data.getFullYear();
                const mouth = data.getMonth()+1;
                const dataq = data.getDate();
                const hour = data.getHours();
                const minute = data.getMinutes();
                const secont = data.getSeconds();
                return year+"-"+mouth+"-"+dataq+" "+hour+":"+minute+":"+secont;
            }
        }
    }
</script>

<style  scoped>
.wrapper{
    padding-bottom: 10px;
    border: 5px solid #eee;
    margin-bottom: 20px;
    
}
.title{
    font-size: 18px;
    padding: 20px 0 20px 10px;
    border-top: 5px solid #eee;
    border-bottom: 5px solid #eee;
}
.title span:first-child{
    margin-right: 200px;
}
.user{
    display: flex;
}
.user img{
    width: 10%;
    border-radius: 50%;
    margin: 10px;
}
.user span{
    font-size: 16px;
    line-height: 50px;
    text-align: center;
    display: block;
}
.content{
    white-space: pre-wrap;
    padding: 10px 5px;
}
.content-c{
    padding-bottom: 15px;
}
</style>