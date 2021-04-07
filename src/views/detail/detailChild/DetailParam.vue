<template>
    <div>
        <div class="img" v-if="paramInfo.image">
            <img :src="paramInfo.image" alt="">
        </div>
        <div class="size">
            <table>
                <tr v-for="(item,index) in paramInfo.sizes" :key="index">
                    <td v-for="(itemI,index) in item" :key="index">{{itemI}}</td>
                </tr>
            </table>
        </div>
        <div class="info">
            <table>
                <tr v-for="(item,index) in paramInfo.infos" :key="index">
                    <td>{{item.key}}</td>
                    <td>{{item.value}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name:'DetailParam',
        props:{
            paramInfo:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
.size table tr td {
    padding: 10px 20px 10px 20px;
}
.size table tr td:first-child{
    padding: 10px 20px 10px 10px;
    display: block;
    /* width: 50px; */
    width: 74px;
    font-size: 14px;
    text-align: center;
}
.info table tr td{
    color: deeppink;
    font-size: 14px;
}

.info table tr td:first-child{
    color: rgb(94, 89, 89);
    font-size: 14px;
    padding: 5px 35px 5px 0;
    width: 100px;
    display: block;
    text-align: center;
}

</style>