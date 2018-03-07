<template>
	<div class="xx">
		<div class="zx">{{msg}}</div>
		<v-navz class='zc'></v-navz>
	</div>
	
</template>

<script>
	import Foo from './footer.vue'
	
	export default {
		data (){
			return {
				msg:'分类'
			}
		},
		components:{
			'v-navz':Foo
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
	.xx{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		}
	.zx{
		/*flex: 1;*/
	}	
</style>