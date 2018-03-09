<template>
	<div class="regist">
		<div class="hea1">
			<div class="fh" @click="handle">&lt</div>
			<div class="name">酷菠萝-注册</div>
			<div class="reg" @click="handle1">登录</div>
		</div>
		<div class="com">
			<input type="text" v-model="sj" placeholder="请输入手机号"/>
			<div class="tuxing">
				<input type="text" v-model="tux" placeholder="请输入图形码"/>
				<div class="yanzheng">验证码</div>
			</div>
			<div class="duanxin">
				<input type="text" v-model="dx" placeholder="请输入短信验证码"/>
				<div>获取短信验证</div>	
			</div>
			<div class="paw">
				<input :type="ff==true?'text':'password'" v-model="msg" placeholder="请设置6-16位登录密码"/>
				<img @click="handle3" class="xxx"  src="../../static/img/xx.png"/>
				<img @click="handle2" class="yincang"  v-show='!ff' src="../../static/img/yincang.png"/>
				<img @click="handle2" class="xianshi" v-show='ff' src="../../static/img/xianshi.png"/>				
			</div>
			<p class="xieyi">
				<img src="../../static/img/di.png"/>
				<img src="../../static/img/dianji.png"/>
				<span>同意<a href="http://m.kubolo.com/kubolo/kubolott.html?id=666&s=1">酷菠萝注册协议</a></span>				
			</p>
			<button @click="handle4">注册</button>			
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data(){
			return{
				ff:false,
				msg:'',
				sj:'',
				tux:'',
				dx:''								
			}
		},
		methods:{
			handle(){
				this.$router.go(-1)
			},
			handle1(){
				this.$router.push('/login')
			},
			handle2(){
				this.ff=!this.ff
			},
			handle3(){
				this.msg='';
			},
			handle4(){
				if(this.msg==''||this.sj==''||this.tux==''||this.dx==''){
					alert('请输全以上内容')
					return
				}else{
					const usename=this.sj;
					const pwd=this.msg;
					axios.post('/api/regist',{usename,pwd}).then((res)=>{
						console.log(res)
					})
				}
			}
		}
	}
</script>

<style>
	*{margin: 0;padding: 0;box-sizing: border-box;}
	.regist .hea1{
		width: 100%;
		height: 12vw;
		border-bottom: 1px solid #CCCCCC;
	}
	.regist .hea1>div{
		line-height: 12vw;
		text-align: center;
		float: left;
		color: #494949;
		height: 12vw;
	}
	.regist .hea1>.fh{
		width: 9.6vw;
		font-size: 6vw;						
	}
	.regist .hea1>.name{
		width: 76vw;		
		font-size: 5.3vw;				
	}
	.regist .hea1>.reg{
		width: 14.4vw;				
	}
	.regist>.com{
		width: 100%;
		margin-top: 2.7vw;
		
	}
	.regist>.com>input{
		height: 13.3vw;
		width: 100%;
		border: none;
		border-bottom: 1px solid #CCCCCC;
		outline: none;
		font-size: 4vw;
		padding-left: 3.2vw;
	}
	.regist>.com>div{
		height: 13.3vw;
		width: 100%;
		border: none;
		border-bottom: 1px solid #CCCCCC;
		padding-left: 3.2vw;
	}
	.regist>.com>div>input{
		width: 71vw;
		height: 13vw;
		border: none;
		outline: none;
		float: left;
	}
	.regist>.com>div>div{
		float: left;
		width: 25vw;
		height: 13vw;
		line-height: 13vw;
		text-align: center;
		font-size: 4vw;
	}
	.regist>.com>.paw{
		position: relative;
	}
	.regist>.com>.paw>img{
		height: 4vw;
		position: absolute;		
	}
	.regist>.com>.paw>.xxx{
		top: 4.5vw;
		right: 11.7vw;
	}
	.regist>.com>.paw>.yincang{
		top: 4.5vw;
		right: 3.2vw;
	}
	.regist>.com>.paw>.xianshi{
		top: 4.5vw;
		right: 3.2vw;
	}
	.regist>.com>.xieyi{
		
		position: relative;
		margin-top: 4.5vw;
	}
	.regist>.com>.xieyi>img{
		width: 4.3vw;
		height: 4.3vw;
		position: absolute;
		top: 1.5vw;
		left: 3.2vw;
	}
	.regist>.com>.xieyi>span{
		padding-left: 8.5vw;
		font-size: 3.5vw;
	}
	.regist>.com>.xieyi>span>a{
		margin-left: 1vw;
		text-decoration: none;
		color: #f55e14;
		font-size: 3.5vw;
	}
	.regist>.com>button{
		border: none;
		outline: none;
		background: #f55e14;
		width: 66.6vw;
		height: 8.5vw;
		border-radius: 1vw;
		margin: 17.3vw 0 0 16.7vw;
		font-size: 4.8vw;
		color: white;
	}
</style>