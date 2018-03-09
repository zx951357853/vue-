<template>
	<div class="zb">
		<div class="head1">
			<div class="go" @click="fanhui">&lt</div>
			<input type="text"  v-model="msg" />
			<button @click="handle">搜索</button>
		</div>
		<div class="re">
			<p>热搜</p>
			<div>
				<span v-for='(i,index) in list' :key='index'>{{i}}</span>
			</div>
		</div>
		<div class="empty"></div>
		<p>历史记录</p>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				msg:'',
				num:0,
				list:['春季踏青','雾霾','车载用品','智能穿戴','鞋子','防盗包','止鼾','蓝牙耳机']	
			}
		},
		props:['show'],
		methods:{
			fanhui(){
				this.$router.go(-1)
			},
			handle(){
				var arr=[]; 
				var cc=this.msg;
//				axios.post('/api/search',{name:cc}).then((res)=>{
//					console.log(res)
//				})
				this.num++
				const v=this.num;
//				arr.push(cc);
//				var str=JSON.stringify(arr);
				localStorage.setItem([v],cc)
				var xx=localStorage.getItem([v]);
				console.log(xx)
			}
		},	
	}
</script>

<style>
	*{margin: 0;padding: 0;box-sizing: border-box;}
	.head1{
		width: 100%;
		height: 16vw;
		border-bottom: 0.3vw solid #a6a6a6;
	}
	.head1>.go{
		width: 8vw;
		height: 12vw;
		line-height: 12vw;
		text-align: center;
		font-size: 6vw;
		color: #a7a7a7;
		float: left;
	}
	.head1>input{
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
	.head1>button{
		width: 13.3vw;
		height: 7.5vw;
		font-size: 4.8vw;
		color: #f55e14;
		outline: none;
		border: none;
		margin: 3vw 0vw 0vw 1vw;
		background: white;	
	}
	.re{
		height: 39vw;
		width: 100%;
		padding-left: 3.2vw;
		
	}
	.re>p{
		height: 11.2vw;
		width: 100%;
		line-height: 11.2vw;
		font-size: 4vw;		
	}
	.re>div>span{
		border: 1px solid black;
		margin-right: 2vw;
		padding: 0 1.5vw;
		display: inline-block;
		margin-bottom: 2vw;
	}
	.zb>p{
		height: 11.2vw;
		width: 100%;
		line-height: 11.2vw;
		font-size: 4vw;
		padding-left: 3.2vw;
		border-bottom: 0.3vw solid #a6a6a6;
	}
	.empty{
		width: 100%;
		height: 4.8vw;
		background: #f1f1f1;
	}
</style>