<template>
	<div class="tu">
		<dl v-for='(i,index) in list' :key='index'>
			<dd><img :src="i.img"/></dd>
			<dt>{{i.name}}</dt>
		</dl>
	</div>
</template>

<script>	
	export default{
		data(){
			return {
				
			}
		},
		props:['list']
	}
</script>

<style>
	.tu{
		width: 100%;
		background: white;
		display: flex;
		flex-wrap: wrap;
	}
	.tu dl{
		height: 26.7vw;		
		width: 20%;
	}
	.tu dl dt{
		font-size: 3.2vw;
		width: 20vw;
		height: 9.3vw;
		text-align: center;
		line-height: 4.3vw;
	}
	.tu dl dd{
		width: 20vw;
		height: 17.4vw;		
	}
	.tu dl dd img{
		width: 12vw;
		height: 12vw;
		margin-top: 2.7vw;
		margin-left: 4vw;
	}
</style>