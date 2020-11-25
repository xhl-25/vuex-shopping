<template>
    <div class="cart">
        <ul>
            <li class="list" v-for="(item,index) in goodsList" :key="index">
                <img :src='item.img' alt="">
                <div class="box">
                    <div class="tit">{{item.name}}</div>
                    <div class="price-box">
                        <div class="btn-box">
                            <button @click="common(index,-1)">—</button>
                            <input type="text" v-model="item.num">
                            <button @click="common(index,1)">+</button>
                            <button @click="del(index)">删除</button>
                        </div>
                        <div>￥{{item.price}}</div>
                    </div>
                </div>
            </li>
        </ul>
        <div>
            <span>总数{{totalNum}}</span>    
            <span>总价{{totalPrice}}</span>    
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations,mapGetters} from 'vuex';

export default {
    data(){
        return {
            num:0
        }
    },
    computed: {
        ...mapState(['goodsList']),
        ...mapGetters(['totalNum']),
        ...mapGetters(['totalPrice']),

    },
    methods:{
        common(index,val){
            let newObj = this.goodsList.slice();    
            newObj[index].num+=val;
            if( newObj[index].num < 1){
                newObj[index].num = 1
            }
            this.addGoods(newObj)
        },
        // reduce(index){
        //    let newObj = this.goodsList.slice();        
        //     newObj[index].num--
        //     this.addGoods(newObj)
        // },
        // add(index){
        //     let newObj = this.goodsList.slice(); 
        //     newObj[index].num++
        //     this.addGoods(newObj)
        // },
        ...mapMutations(['addGoods']),
        ...mapMutations(['del']),
        
       
    }
}
</script>

<style scoped lang="sass">
.list 
    padding: 0.2rem
    display: flex
    border-bottom: 1px solid #000
    img
        width: 1rem
        height: 1rem
        margin-right: .1rem
        .price-box
            display: flex
            justify-content: space-between
            .btn-box
                width: 50px
button 
    width: 40px              
input
    width: 25px
    text-align: center
    background: red
</style>