<template>
    <div class="detail">
        <div class="back" @click="$router.back()">返回</div>
        <img :src="goods.img" />
        <div class="box">
        <p>{{ goods.name }}</p>
        <p>￥{{ goods.price }}</p>
        <button @click="add(goods)">加入购物车</button>
        <p>{{ goods.dic }}</p>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { Toast } from "vant";
export default {
data() {
    return {
        //路由取参
        pid: this.$route.query.type,
        goods: null,
        num: 0,
    };
},
computed: {
    ...mapState(["cartList"]),
    // 获取goodsList
    ...mapState(['goodsList']),
},
created() {
    this.goods = this.cartList.find((goods) => {
        return goods.pid == this.pid;
    });
},
methods: {
    add(goods) {
        console.log(goods);

        let newGoodsList = this.goodsList.slice();
        Toast({
            message: "购买成功",
            duration: 500,
        });
        const aindex = newGoodsList.findIndex((goodsItem) => {
            return goodsItem.pid == goods.pid;
        });
        if (aindex < 0) {
            goods.num = 1;
            newGoodsList.unshift(goods);
        } else {
            newGoodsList[aindex].num++;
        }
        this.addGoods(newGoodsList);
        },
        ...mapMutations(["addGoods"]),
    },
};
</script>

<style scoped>
    img {
        width: 100%;
        height: auto;
    }
    .box {
        padding: 10px;
    }
</style>