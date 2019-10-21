<template>
    <div>
        <table width="800px" border="1" cellspacing="0">
            <thead>
                <th>id</th>
                <th>名称</th>
                <th>价格</th>
                <th>数量</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <tr v-for="(item,key) in this.$store.state.list" :key="key">
                    <td>{{key+1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                    <td><span v-show="item.count-1 != 0">{{item.count-1}}</span></td>
                    <td>
                        <button @click="add(item,key)" v-show="item.count == 1" class="cartBtn">加入购物车</button>
                        <div class="btns" v-show="item.count > 1">
                            <button @click="up(item.name,key)">+</button>
                            <button @click="down(item.name,key)">-</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name:"List",
        data() {
            return {
                that:this,
            }
        },
        methods: {
            //添加数据
            add(item,key){
                var obj = {name:item.name,price:item.price,number:1};
                this.$store.commit("add",obj)
                this.$store.commit("upNum",key)
            },
            //数量+
            up(n,i){
                var obj = {name:n,index:i};
                this.$store.commit("up",obj)
            },
            down(n,i){
                var obj = {name:n,index:i};
                this.$store.commit("down",obj)
            }
        },
    }
</script>

<style lang="scss" scoped>
th,td{
    height:40px;
    text-align: center;
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
.cartBtn{
    width:100px;
    height:35px;
    border-radius: 5px;
    background:#4191AB;
    border:1px solid #4191AB;
    color:white;
    font-size: 16px;
}
</style>