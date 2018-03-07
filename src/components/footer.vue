<template>
	<div class="footer">
		<router-link to='/shouye'>首页</router-link>
		<router-link to='/fenlei'>分类</router-link>
		<router-link to='/find'>发现</router-link>
		<router-link to='/car'>购物车</router-link>	
		<router-link to='/my'>我的</router-link>
	</div>
</template>

<script>
	export default{
		name:'foo'
	}
</script>

<style>
	*{margin: 0;padding: 0;}	
	.footer{
		height: 12vw;
		width: 100%;
		display: flex;
		justify-content: space-around;		
	}
	.footer>a{
		display: inline-block;
		width: 20%;
		line-height: 12vw;
		text-align: center;
		text-decoration: none;
		color: #CCCCCC;
		
	}
	.footer>.router-link-active{
		color: #f55e14;
	}
</style>