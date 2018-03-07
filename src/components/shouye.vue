<template>
	<div class="xx">
		<div class="head">
				<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.youshang.kubolo"><img src="../../static/img/down_app.gif"/></a>
				<a href="#"><img src="../../static/img/logo1.jpg"/></a>
				<a href=""><img src="../../static/img/search-icon.png"/></a>
			</div>
		<div class="zx">
			
			<div class="lunbo">
				<v-lunbo :list='list'></v-lunbo>
			</div>
			<div class="cy">
				<hr class="zc" />
				<span class="yuan"></span>
				<span>创意清单</span>
				<span class="yuan1"></span>
				<hr class="zc" />
			</div>
			<v-chu></v-chu>
			<div class="cy">
				<hr class="zc" />
				<span class="yuan"></span>
				<span>创意爆款</span>
				<span class="yuan1"></span>
				<hr class="zc" />
			</div>
			<v-baokuan></v-baokuan>
		</div>
		
		<v-nav class='zc'></v-nav>
		
	</div>
	
</template>

<script>
	import Foo from './footer.vue'
	import Lunbo from './lunbo.vue'
	import Chu from './chuangyiqingdan.vue'
	import Baokuan from './chuangyibaokuan.vue'
	export default {
		data (){
			return {
				msg:'首页',
				list:[
				'../../static/img/lunbo1.jpg','../../static/img/lunbo2.jpg','../../static/img/lunbo3.jpg','../../static/img/lunbo4.jpg','../../static/img/lunbo5.jpg',
				]
			}
		},
		components:{
			'v-nav':Foo,
			'v-lunbo':Lunbo,
			'v-chu':Chu,
			'v-baokuan':Baokuan
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
		background: #f6f6f6;
		overflow: hidden;
		}
	.zx{
		flex: 1;
		overflow-y: auto;
		width: 102%;				
		padding-right: 2%;		
	}
	.head{
		height: 10.6vw;
		width: 100%;
		background: white;
	}
	.head>a{
		display: block;
		height: 10.6vw;
		float: left;			
	}
	.head>a:nth-child(1){
		width: 10.5vw;
	}
	.head>a:nth-child(2){
		width: 71vw;
	}
	.head>a:nth-child(2)>img{
		margin-left: 25vw;
	}
	.head>a:nth-child(3){
		width: 15.5vw;
		
	}
	.head>a:nth-child(3)>img{
		width: 8vw;
		height: 8vw;
		margin-left: 4vw;
		margin-top: 1vw;
	}
	.lunbo{
		width: 100%;
		height: 62.4vw;
	}
	.cy{
		width: 100%;
		height: 9.3vw;
		text-align: center;
		line-height: 9.3vw;
		font-size: 6.9vw;
		position: relative;
		margin-top: 2.1vw;
		background: white;
	}
	.yuan{
		display: inline-block;
		width: 2vw;
		height: 3vw;
		border-radius: 50%;
		background: black;
		position: absolute;
		top: 4vw;
		left: 33vw;
	}
	.yuan1{
		display: inline-block;
		width: 2vw;
		height: 3vw;
		border-radius: 50%;
		background: black;
		position: absolute;
		top: 4vw;
		right: 33vw;
	}
	.zc{
		vertical-align:middle; 
		display:inline-block;
		width: 20.8vw;		
	}
	.tu{
		margin-top: 2.1vw;
	}
</style>