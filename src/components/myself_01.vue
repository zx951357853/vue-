<template>
	<div>
		<div class="x01">
			<div class="x01_01" v-for='(i,index) in list' :key='index'>
					<span>{{i}}</span>
					<img src="../../static/img/you.jpg"/>
			</div>
			
		</div>
		<p class="enp"></p>
	</div>
</template>

<script>
	export default{
		props:['list']
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
	.x01>div:nth-last-child{
		border-bottom: none;
	}
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