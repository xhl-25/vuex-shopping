<template>
    <div class="home">
        <!-- vant轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item><img src="@/assets/img/111.jpg" /></van-swipe-item>
            <van-swipe-item><img src="@/assets/img/222.jpg" /></van-swipe-item>
            <van-swipe-item><img src="@/assets/img/333.jpg" /></van-swipe-item>
        </van-swipe>
        <h2>{{ title }}</h2>
        <ul>
            <li v-for="(item, index) in list" :key="index">
                <img :src="item.img" alt="" @click="onDetail(item)">
                <p class="name">{{ item.name }}</p>
                <p>
                    <span class="price">￥{{ item.price }}</span>
                    <el-button :plain="true" @click="add(item)">购买</el-button>
                </p>
                <p class="dic">{{ item.dic }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { Toast } from "vant";
import { Swipe, SwipeItem } from "vant";

export default {
    data() {
        return {
            title: "",
            list: [],
            num: 0,
        };
    },
    computed: {
        ...mapState(["goodsList"]),
    },
    methods: {
        getData() {
            this.$http.get("../../static/data/allGoods.json").then((res) => {
                // console.log(res)
                // console.log(res.data.list);
                this.title = res.data.title;
                this.list = res.data.list;
                this.addCartGoods(this.list.slice());
                // console.log(list)
            }).catch((err) => {
                console.log(err);
            });
        },
        add(item) {
            let newGoodsList = this.goodsList.slice();
            Toast({
                message: "购买成功",
                duration: 500,
            });
            // 判断有没有同类项
            // console.log(this.goodsList);
            // console.log(item.pid);

            const aindex = newGoodsList.findIndex((goodsItem) => {
                return goodsItem.pid == item.pid;
            });
            // console.log(aindex);
            // console.log(newGoodsList);

            if (aindex < 0) {
                item.num = 1;
                newGoodsList.unshift(item);
            } else {
                newGoodsList[aindex].num++;
            }
            this.addGoods(newGoodsList);
        },
        ...mapMutations(["addGoods"]),
        onDetail(item) {
            this.$router.push(`/detail?type=${item.pid}`);
        },
        ...mapMutations(["addCartGoods"]),
    },
    created() {
        this.getData();
    },
};
</script>

<style scoped>
.home {
    width: 375px;
    margin: 0 auto;
    font-size: 0.16rem;
    background: #fff;
    color: #000;
}
h2 {
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.24rem;
    text-align: center;
    background: #ccc;
    color: #fff;
}
ul {
    width: 100%;
    margin-bottom: 0.4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
ul li {
    width: 40%;
    margin-bottom: 0.1rem;
}
ul li img {
    width: 80%;
    height: auto;
}
ul li .name {
    font-size: 0.16rem;
}
ul li .dic {
    width: 100%;
    height: 0.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: wrap;
    font-size: 0.16rem;
}

.ball {
    background-color: red;
    width: 30px;
    height: 30px;
    border-radius: 50%;
}

/* vant */
.my-swipe .van-swipe-item {
    height: 200px;
}
.van-swipe-item img {
    width: 100%;
    height: 100%;
}
</style>