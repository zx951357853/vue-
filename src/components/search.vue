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
		<div class="jilu">
			<span v-for='(i,index) in lit' @click="had(index)">{{i}}</span>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				msg:'',
				arr:[],
				num:0,
				listed:[],
				list:['春季踏青','雾霾','车载用品','智能穿戴','鞋子','防盗包','止鼾','蓝牙耳机']	
			}
		},
		props:['show'],
		methods:{
			fanhui(){
				this.$router.go(-1)
			},
			handle(msg){
//				this.$router.go(0);				
				var cc=JSON.parse(localStorage.getItem('name'));
				console.log(cc)
				if(cc==null||cc.length==0){
					if(this.msg==''){
						return
					}else{
						this.arr.push(this.msg);
						console.log(this.arr)
						localStorage.setItem('name',JSON.stringify(this.arr));
						return
					}		
				}
				if(cc.length){
					var msgs=this.msg;
					if(this.msg==''){
						return
					}else{
						for(var i=0;i<cc.length;i++){
							if(cc[i]==msgs){
									return
							}else{
								cc.push(msgs);
								console.log(cc)
								localStorage.setItem('name',JSON.stringify(cc));
								return
							}
						}					
					}					
				}								
			},
			had(index){
				console.log(index)
				var bb=JSON.parse(localStorage.getItem('name'))		
				if(bb){
					for(var i=0;i<bb.length;i++){
						if(i==index){
							bb.splice(i,1)
						}
					}
					localStorage.setItem('name',JSON.stringify(bb));
					
				}
			}
		},
		computed:{
			lit(){
				var bb=JSON.parse(localStorage.getItem('name'))		
				if(bb){
					return bb
				}
			}									
		}
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
	.jilu>span{
		padding: 0 5px;
	}
</style>