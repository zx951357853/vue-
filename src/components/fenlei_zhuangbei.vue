<template>
	<v-zhu :list='list'></v-zhu>
</template>

<script>
	import Zhu from './fenlei_public.vue'
	export default{
		data(){
			return{
				list:[
					{name:'创意|智能穿戴',
						comment:[
							{sp:'智能手表/手环',img:'../../static/img/cd1.png'},
							{sp:'创意服饰',img:'../../static/img/cd2.jpg'},
							{sp:'智能眼镜',img:'../../static/img/cd3.png'},
							{sp:'智能指环/指甲',img:'../../static/img/cd4.png'}			
							]
					},{name:'潮流箱包',
						comment:[
							{sp:'潮包',img:'../../static/img/cl1.jpg'},
							{sp:'行李箱',img:'../../static/img/cl2.jpg'}						
							]
					},{name:'酷出行',
						comment:[
							{sp:'户外用品',img:'../../static/img/cx1.jpg'},
							{sp:'汽车用品',img:'../../static/img/cx2.jpg'},			
							{sp:'随身装备/火机',img:'../../static/img/cx3.jpg'}						
							]
					}
					
				]
			}
		},
		components:{
			'v-zhu':Zhu
		}
	}
</script>

<style>
</style>