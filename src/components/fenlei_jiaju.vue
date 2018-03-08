<template>
	<v-pub :list='list'></v-pub>
</template>

<script>
	import Pub from './fenlei_public.vue'
	export default{
		data(){
			return {
				list:[
					{name:'居家百货',
					comment:[
						{sp:'只能家居',img:'../../static/img/zx1.jpg'},
						{sp:'空气调节',img:'../../static/img/zx2.jpg'},
						{sp:'创意灯具',img:'../../static/img/zx3.jpg'},
						{sp:'厨房用具',img:'../../static/img/zx4.png'},
						{sp:'卫浴用品',img:'../../static/img/zx5.png'},
						{sp:'清洁用具',img:'../../static/img/zx6.png'},
						{sp:'创意杯具',img:'../../static/img/zx7.png'},
						{sp:'雨伞雨具',img:'../../static/img/zx8.png'},
						{sp:'日用工具',img:'../../static/img/zx9.png'},
						{sp:'钟表装饰',img:'../../static/img/zx10.png'},
						{sp:'娱乐玩物',img:'../../static/img/zx11.png'},
						]
					},
					{name:'个护健康',
					comment:[
						{sp:'健康卫士',img:'../../static/img/zxc1.jpg'},
						{sp:'个护工具',img:'../../static/img/zxc2.jpg'}					
					]
					}
				]
			}
		},
		components:{
			'v-pub':Pub
		}
	}
</script>

<style>
</style>