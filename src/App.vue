<template>
	<div id="app">
		<div id="nav">
			<router-link to="/home">主页</router-link> |
			<router-link to="/cart">购物车(￥{{totalPrice}})</router-link>
		</div>
	 
		<router-view/>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
	computed:{
		...mapGetters(['totalPrice'])
	}
}
</script>

<style>
#app {
	position: relative;
	width: 375px;
	margin: 0 auto;
	background: #ccc;
}
#nav {
	position: fixed;
	bottom: 0;
	width: 375px;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	height: 50px;
	line-height: 50px;
	background: #ccc;
    color: #fff;
}
a {
	display: inline-block;
    font-weight: bold;
    color: #fff;
}
a.router-link-exact-active {
	color: #42b983;
}
</style>
