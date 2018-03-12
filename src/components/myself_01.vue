<template>
	<div>
		<div class="x01">
			<div class="x01_01" v-for='(i,index) in list' :key='i.id' @click="handle(i)">
					<span>{{i.name}}</span>
					<img src="../../static/img/you.jpg"/>
			</div>
			
		</div>
		<p class="enp"></p>
	</div>
</template>

<script>
	export default{
		props:['list'],
		methods:{
			handle(i){
				console.log(i.id)
				if(i.id=='list02_05'){
					//获取cookie中用户名
				var arr,reg=new RegExp("(^| )usename=([^;]*)(;|$)");
					if(arr=document.cookie.match(reg))
					var kk=unescape(arr[2]);
					//清除cookie
					var exp = new Date();
					exp.setTime(exp.getTime() - 1);
					document.cookie="usename="+kk+";expires="+exp.toGMTString();
					//刷新网页
					this.$router.go(0)
				}
			}
		}
	}
</script>

<style>
	*{margin: 0;padding: 0;}
	.x01>div{
		padding-left: 2.1vw;
		height: 10.7vw;
		border-bottom: 1px solid #CCCCCC;
		background: white;
	}
	/*.x01>div:nth-last-child{
		border: none;
		z-index: 999;
	}*/
	.x01 .x01_01>span{
		height: 10.7vw;
		line-height: 10.7vw;
	}
	.x01 .x01_01>img{
		float: right;
		margin-right: 3vw;
		margin-top: 3vw;
	}
	.enp{
		height: 4.3vw;
		width: 100%;
	}
</style>