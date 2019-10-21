import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

var store = new Vuex.Store({
    state:{
        list:[],
        cart:[],
        flag:true,
    },
    mutations:{
        //将初始数据赋值给list
        data(state,data){
            state.list = data;
        },
        //添加数据
        add(state,obj){
            //push数据
            state.cart.push(obj);
            //添加购物车按钮-- + - 按钮的显示隐藏
            state.flag = false;
        },
        //添加一条数据的同时，让该count+1
        upNum(state,key){
            state.list[key].count = 2;
        },
        //删除数据
        del(state,i){
            //根据下标找到该数据的name，再进行下标获取
            var index = state.list.findIndex((v,j) => {
                return v.name == state.cart[i].name
            })
            //当删除的时候，将该数据的count还原为1.
            state.list[index].count = 1;
            state.cart.splice(i,1)
        },
        //《List》数量+
        up(state,obj){
            state.list[obj.index].count++;
            var index = state.cart.findIndex((v,i) => {
                return v.name == obj.name
            })
            state.cart[index].number++;
        },
        //《List》数量-
        down(state,obj){
            state.list[obj.index].count--;
            var index = state.cart.findIndex((v,i) => {
                return v.name == obj.name
            })
            if(state.cart[index].number > 1){
                state.cart[index].number--;
            }else{
                state.cart.splice(index,1);
            }
        },
        //《Cart》数量+
        cartUp(state,obj){
            state.cart[obj.index].number++;
            var index = state.list.findIndex((v,i) => {
                return v.name == obj.name
            })
            state.list[index].count++;
        },
        //《Cart》数量-
        cartDown(state,obj){
            state.cart[obj.index].number--;
            var index = state.list.findIndex((v,i) => {
                return v.name == obj.name
            })
            if(state.cart[obj.index].number >= 1){
                state.list[index].count--;
            }else{
                state.cart.splice(obj.index,1);
                state.list[index].count = 1;
            }
        },
        //清空购物车
        clear(state){
            state.cart = [];
            state.list.map((v,i) => {
                v.count = 1;
            })
        }
    }
})
export default store;