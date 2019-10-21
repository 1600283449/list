<template>
  <div id="app">
    <h1>Vuex购物车</h1>
    <h2>商品信息</h2>
    <List></List>
    <Cart></Cart>
  </div>
</template>

<script>
import axios from "axios";
import List from "@/components/List"
import Cart from "@/components/Cart"
export default {
  name: 'App',
  components:{List,Cart},
  mounted() {
    axios.get("/static/data.json").then((data) => {
      console.log(data);
      this.$store.commit("data",data.data.productsData);
    })
  },
}
</script>

<style>
#app{
  display: flex;
  flex-direction: column;
  align-items: center;  
}
*{
  margin:0;
  padding:0;
}
h1{
  margin:20px 0;
}
h2{
  margin-bottom:20px;
}
</style>
