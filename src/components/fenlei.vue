<template>
	<div class="xx">
		<div class="zx">
			<div class="head1">
				<div class="go" @click="fanhui">&lt</div>
				<input @click="zh" type="text" :placeholder="msg" />				
			</div>
			<div class="bx">
				<div class="ly">
					<router-link to='tuijian'>热门推荐</router-link>
					<router-link to='jiaju'>创意家居</router-link>
					<router-link to='shuma'>菠萝数码</router-link>
					<router-link to='zhuangbei'>酷装备</router-link>				
				</div>
				<router-view></router-view>
			</div>
		</div>
		<v-navz></v-navz>
	</div>
	
</template>

<script>
	import Foo from './footer.vue'
	
	export default {
		data (){
			return {
				msg:'搜索商品 分类 功效'
			}
		},
		methods:{
			zh(){
				this.$router.push('/sear')
			},
			fanhui(){
				this.$router.go(-1)
			}
	},
		components:{
			'v-navz':Foo
		}
	}
</script>

<style>
*{margin: 0;padding: 0;}
	body,html{
			width: 100%;
			height: 100%;
		}
	.main{
		width: 100%;
		height: 100%;
	}
	#app{
		
		width: 100%;
		height: 100%;
	}
	.xx{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		}
	.zx{
		width: 100%;
		height: 100%;
	}
	.zx>.head1{
		width: 100%;
		height: 16vw;
		border-bottom: 0.3vw solid #a6a6a6;
	}
	.zx>.head1>.go{
		width: 8vw;
		height: 12vw;
		line-height: 12vw;
		text-align: center;
		font-size: 6vw;
		color: #a7a7a7;
		float: left;
	}
	.zx>.head1>input{
		float: left;
		margin-left: 5.3vw;
		width: 66.7vw;
		height: 7.5vw;
		
		border-top-left-radius: 2vw;
		border-top-right-radius: 2vw;
		border-bottom-left-radius: 2vw;
		border-bottom-right-radius: 2vw;
		outline: none;
		margin-top:2.25vw ;
		
	}
	.zx>.bx{
		background: #f1f1f1;
	}
	.zx>.bx>.ly{
		height: 11.7vw;
		width: 100%;
		display: flex;
		background: white;
	}
	.zx>.bx>.ly>a{
		width: 25%;
		height: 11.7vw;
		text-decoration: none;
		line-height: 11.7vw;
		text-align: center;
		color: #666666;
	}
	.zx>.bx>.ly>.router-link-active{
		color: #f55e14;
		border-bottom: 0.5vw solid #f55e14;
	}	
</style>