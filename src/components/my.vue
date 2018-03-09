<template>
	<div>
		<!--<v-log></v-log>-->
		<v-mysele></v-mysele>
	</div>
</template>

<script>
	import Login from './login.vue'
	import Mysele from './myself.vue'
	export default {
		data (){
			return {
				msg:'我的'
			}
			
		},
		components:{
			'v-log':Login,
			'v-mysele':Mysele
		}
	}
</script>

<style>
</style>