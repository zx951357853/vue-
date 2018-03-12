<template>
	<div class="login">
		<div class="hea">
			<div class="fh" @click="handle1">&lt</div>
			<div class="name">酷菠萝-登录</div>
			<div class="reg" @click="handle">注册</div>
		</div>
		<div class="com">
			<input type="text" v-model="zhanghao" placeholder="手机号/用户名/邮箱"/>
			<input type="text" v-model="mima" placeholder="密码"/>
			<a href="#">找回密码?</a>
			<button @click="handle2">登录</button>			
		</div>
	</div>
</template>

<script>
	import axios from 'axios'	
	export default {
		data(){
			return{
				zhanghao:'',
				mima:''
			}			
		},
		methods:{
			handle(){
				this.$router.push('/regist')
			},
			handle1(){
				this.$router.go(-1)
			},
			handle2(){
				if(this.zhanghao&&this.zhanghao!=''&&this.mima&&this.mima!=''){
					var name=this.zhanghao,
						pwd=this.mima;
					axios.post('/api/login',{name,pwd}).then((res)=>{
						console.log(res)
						var bb=res.data.code
						if(bb==5){
						document.cookie="usename="+name;					
						this.$router.go(0)
						};
						if(bb==3){
							alert('账号错误')
							return
						};
						if(bb==4){
							alert('密码错误')
							return
						}
					})
				}else{
					alert('请输入账号和密码')
					return
				}
			}
		}
	}
</script>

<style>
	*{margin: 0;padding: 0;}
	.login .hea{
		width: 100%;
		height: 12vw;
		border-bottom: 1px solid #CCCCCC;
	}
	.login .hea>div{
		line-height: 12vw;
		text-align: center;
		float: left;
		color: #494949;
		height: 12vw;
	}
	.login .hea .fh{
		width: 9.6vw;
		font-size: 6vw;						
	}
	.login .hea .name{
		width: 76vw;		
		font-size: 5.3vw;				
	}
	.login .hea .reg{
		width: 14.4vw;				
	}
	.login>.com{
		width: 100%;
		margin-top: 2.7vw;
		
	}
	.login>.com>input{
		height: 13.3vw;
		width: 100%;
		border: none;
		border-bottom: 1px solid #CCCCCC;
		outline: none;
		font-size: 4vw;
		padding-left: 3.2vw;
	}
	.login>.com>a{
		margin-left: 3.2vw;
		display: block;
		margin-top: 4vw;
		color: #333333;
		}
	.login>.com>button{
		width: 66.6vw;
		height: 8.5vw;
		background: #f55e14;
		outline: none;
		border: none;
		border-radius: 1vw;
		margin: 17.3vw 0 0 16.7vw;
		font-size: 4.8vw;
		color: white;
	}
</style>