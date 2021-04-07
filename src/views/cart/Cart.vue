<template>
  <div>
    <nav-bar  class="title">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <car-list :lists="cartList" />
    <cart-bottom :lists="cartList" />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import {mapGetters} from 'vuex'
import CarList from './childCo/CarList.vue'
import CartBottom from './childCo/CartBottom.vue'

export default {
  components: { NavBar,CarList, CartBottom },
  name: 'Cart',
  computed:{
    ...mapGetters(['cartLength','cartList'])
  }
}

</script>

<style scoped>
.title{
  background-color: deeppink;
  color: aliceblue;
  font-size: 18px;
}
</style>