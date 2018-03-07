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
				list:[
				{name:'女神节',img:'../../static/img/chuangyiqingdan1.jpg'},
				{name:'创意家居',img:'../../static/img/chuangyiqingdan2.jpg'},
				{name:'健康卫士',img:'../../static/img/chuangyiqingdan3.jpg'},
				{name:'个人护理',img:'../../static/img/chuangyiqingdan4.jpg'},
				{name:'数码配件',img:'../../static/img/chuangyiqingdan5.jpg'},
				{name:'影音视听',img:'../../static/img/chuangyiqingdan6.jpg'},
				{name:'酷穿戴',img:'../../static/img/chuangyiqingdan7.jpg'},
				{name:'酷箱包',img:'../../static/img/chuangyiqingdan8.jpg'},
				{name:'汽车户外',img:'../../static/img/chuangyiqingdan9.jpg'},
				{name:'智能家居',img:'../../static/img/chuangyiqingdan10.jpg'}		
				]
			}
		}
	}
</script>

<style>
	.tu{
		width: 100%;
		height: 53.4vw;
		background: white;		
	}
	.tu dl{
		height: 26.7vw;
		float: left;
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