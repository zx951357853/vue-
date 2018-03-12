<template>
	<div class="ma">
		<div v-if='us' >
			<v-log></v-log>
		</div>		
		<div class="main1" v-if='!us'>
			<v-mysele></v-mysele>
			<v-navz1></v-navz1>
		</div>		
		
	</div>
</template>

<script>
	import Foo1 from './footer.vue'
	import Login from './login.vue'
	import Mysele from './myself.vue'
	export default {
		data (){
			return {
				msg:'我的',
				us:false
			}
			
		},
		components:{
			'v-log':Login,
			'v-mysele':Mysele,
			'v-navz1':Foo1
		},
		beforeMount(){
			var arr,reg=new RegExp("(^| )usename=([^;]*)(;|$)");
			if(arr=document.cookie.match(reg))
			var kk=unescape(arr[2]);
			if(kk&&kk!=''){
				this.us=false				
				return
			}else{				
				this.us=true				
				return
			}
			
			
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
	.ma{
		width: 100%;
		height: 100%;
	}
	.ma .main1{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		
	}
	.ma .main1>.self{
		overflow: auto;
		flex: 1;
	}
</style>