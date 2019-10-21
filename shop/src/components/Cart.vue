<template>
    <div class="cart">
        <h2>购物车信息</h2>
        <table width="800px" border="1" cellspacing="0">
            <thead>
                <th>id</th>
                <th>名称</th>
                <th>价格</th>
                <th>数量</th>
                <th>总价</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <tr v-for="(item,key) in this.$store.state.cart" :key="key">
                    <td>{{key+1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.number}}</td>
                    <td>{{item.price * item.number}}</td>
                    <td class="btns">
                        <button @click="cartUp(item.name,key)">+</button>
                        <button @click="cartDown(item.name,key)">-</button>
                        <button @click="del(key)">x</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="ctro">
            <div>
                <h3>总数：{{totalNumber()}}个</h3>
                <h3>总价：{{totalPrice()}}元</h3>
            </div>
            <button class="clear" @click="clear()">清空购物车</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Cart",
        data() {
            return {
                that:this
            }
        },
        methods: {
            //删除
            del(key){
                this.$store.commit("del",key)
            },
            //数量+
            cartUp(n,i){
                var obj = {name:n,index:i}
                this.$store.commit("cartUp",obj)
            },
            //数量-
            cartDown(n,i){
                var obj = {name:n,index:i};
                this.$store.commit("cartDown",obj)
            },
            //总数：
            totalNumber(state){
                var total = 0;
                this.$store.state.cart.map((v,i) => {
                    total += v.number
                })
                return total;
            },
            //总价格
            totalPrice(state){
                var total = 0;
                this.$store.state.cart.map((v,i) => {
                    total += v.number * v.price
                })
                return total;
            },
            //清空购物车
            clear(){
                this.$store.commit("clear")
            }
        },
    }
</script>

<style lang="scss" scoped>
th,td{
    height:40px;
    text-align: center;
}
.cart{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:40px;
}
.btns>button{
    width:35px;
    height:35px;
    border-radius: 5px;
    color:white;
    font-size: 20px;
}
.btns>button:nth-child(1){
    background:#4191AB;
    border:1px solid #4191AB;
}
.btns>button:nth-child(2){
    background:#EBA144;
    border:1px solid #EBA144;
}
.btns>button:nth-child(3){
    background:#D34843;
    border:1px solid #D34843;
}
.ctro{
    display: flex;
    margin-top:20px;
    align-items: center;
    justify-content: space-between;
    width:100%;
    div{
        display: flex;
        align-items: center;
    }
    h3:last-of-type{
        margin-left:50px;
    }
}
.clear{
    width:100px;
    height:35px;
    border-radius: 5px;
    background:#D34843;
    border:1px solid #D34843;
    color:white;
    font-size: 16px;
    margin-left:30px;
}
</style>