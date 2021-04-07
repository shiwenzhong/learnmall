<template>
 <div id="app">
  <keep-alive exclude="Detail">
   <router-view></router-view>
  </keep-alive>
   <main-tar-bar class="tarbar" />
 </div>
</template>

<script>
import MainTarBar from './components/content/maintarbar/MainTarBar'
export default {
  name: 'App',
  components: {
    MainTarBar
  }
}
</script>

<style scoped>
@import "assets/css/base.css";

.tarbar{
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
