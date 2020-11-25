import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

import createPersistedState from "vuex-persistedstate"

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state:{
        // 总商品列表
        goodsList:[],
        //详情页列表
        cartList:[],
    },
    getters:{
        // 总价，总数
        totalNum(state){
           return state.goodsList.reduce((count,item)=>count+=item.num,0);
        },
        totalPrice(state){
           return state.goodsList.reduce((count,item)=>count+=item.num*item.price,0);
           
        }
    },
    mutations:{
        // 主页点击加入购物车
        addGoods(state,val){
            state.goodsList= val
            // console.log( state.goodsList);
        },
        
        // 详情页
        addCartGoods(state,val){
            state.cartList = val;
        },
        del(state,index){
            state.goodsList.splice(index,1)
        }

    },
    actions:{}
})

export default store;