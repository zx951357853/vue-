<template>
	<div class="self">
		<div class="hea">酷菠萝-全球创意购</div>
		<div class="bann">
			<div class="touxiang">
				<img src="../../static/img/down_app.gif"/>
				<span>普通会员</span>
			</div>
			<p class="num">{{num}}</p>
			<div class="jifen">
				<p>积分：<span>0</span></p>
				<p>积分商城</p>				
			</div>
		</div>
		<div class="all">
			<div class="dingdan">
				<span>我的订单</span>
				<span>查看所有订单</span>
			</div>
			<div class="zz">
				<dl v-for='i in list' :key=i.id>
					<dt><img :src="i.img"/></dt>
					<dd>{{i.name}}</dd>
				</dl>
			</div>
			<div class="en"></div>
			<v-my01 :list='list01'></v-my01>
			<v-my01 :list='list02'></v-my01> 	
		</div>
		
	</div>
</template>

<script>
	import myself_01 from './myself_01'
	export default {
		data(){
			return{
				list:[
				{name:'待付款',img:'../../static/img/order01.png',id:'list_01'},
				{name:'待发货',img:'../../static/img/order02.png',id:'list_02'},
				{name:'待收货',img:'../../static/img/order03.png',id:'list_03'},
				{name:'待评价',img:'../../static/img/order04.png',id:'list_04'}				
				],
				list01:[
					{name:'我的优惠券',id:'list01_01'},
					{name:'积分商城',id:'list01_02'},
					{name:'我的收藏',id:'list01_03'}							
				],
				list02:[
					{name:'在线客服',id:'list02_01'},
					{name:'帮助中心',id:'list02_02'},
					{name:'联系酷菠萝',id:'list02_03'},
					{name:'关于酷菠萝',id:'list02_04'},
					{name:'退出',id:'list02_05'}				
				],
				num:''
			}
		},
		components:{
			'v-my01':myself_01
		},
		beforeMount(){
			var arr,reg=new RegExp("(^| )usename=([^;]*)(;|$)");
				if(arr=document.cookie.match(reg))
				var kk=unescape(arr[2]);
				this.num=kk
		}
	}
</script>

<style>
	*{margin: 0;padding: 0;}
	.self>.hea{
		width: 100%;
		height: 11.7vw;
		text-align: center;
		line-height: 11.7vw;
		color: #1a2332;
	}
	.self>.bann{
		width: 100%;
		height: 50.7vw;
		background: url(../../static/img/BACK.jpg) no-repeat center center ;
		background-size:100% 50.7vw ;
		overflow: hidden;
	}
	.self>.bann>.touxiang{
		width: 100%;
		height: 18.7vw;
		margin-top: 4.5vw;
	}
	.self>.bann>.touxiang>img{
		width: 18.7vw;
		height: 18.7vw;
		border-radius: 50%;
		margin-left:40.65vw ;
		
	}
	.self>.bann>.touxiang>span{
		font-size: 3.2vw;
		color: white;
	}
	.self>.bann>.num{
		height: 6.7vw;
		width: 100%;
		text-align: center;
		line-height: 6.7vw;
		color: white;
		font-size: 3.2vw;
	}
	.self>.bann>.jifen{
		height: 7vw;
		width: 100%;
		margin-top: 3.2vw;
	}
	.self>.bann>.jifen>p{
		width: 25.6vw;
		height: 6.6vw;
		float: left;
		border: 1px solid white;
		border-radius: 3.3vw;
		font-size: 3.2vw;
		text-align: center;
		line-height: 6.6vw;
		color: white;
	}
	.self>.bann>.jifen>p:nth-child(1){
		margin-left: 20vw;
	}
	.self>.bann>.jifen>p:nth-child(2){
		margin-left: 8vw;
	}
	.self .all{
		background: #f1f1f1;
	}
	.self .all .dingdan{
		padding-left: 2.1vw;
		height: 10.7vw;		
		border-bottom: 1px solid #CCCCCC;
		background: url(../../static/img/you.jpg) no-repeat 95vw center;
		background-color:white ;
	}
	.self .all .dingdan>span{
		height: 10.7vw;
		line-height: 10.7vw;
	}
	.self .all .dingdan>span:nth-child(1){
		float: left;
		
	}
	.self .all .dingdan>span:nth-child(2){
		float: right;
		margin-right: 6.7vw;
		
	}
	.self .all .zz{
		height: 21.3vw;
		background-color:white ;
		
	}
	.self .all .en{
		height: 4.3vw;
		width: 100%;
	}
	.self .all .zz>dl{
		height: 21.3vw;
		width: 25vw;
		float: left;
	}
	.self .all .zz>dl>dt{
		width: 25vw;
		height: 14.3vw;
	}
	.self .all .zz>dl>dt>img{
		width: 8vw;
		height: 8vw;
		margin: 3.2vw 0 0 8.5vw;
		
	}
	.self .all .zz>dl>dd{
		font-size: 3.2vw;
		color: black;
		width: 25vw;
		height: 7vw;
		line-height: 7vw;
		text-align: center;
	}
</style>