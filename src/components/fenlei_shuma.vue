<template>
	<v-yingyin :list='list'></v-yingyin>
</template>

<script>
	import Yingyin from './fenlei_public.vue'
	export default{
		data(){
			return{
				list:[
					{name:'数码配件',
						comment:[
							{sp:'手机72变',img:'../../static/img/shuma1.jpg'},
							{sp:'充电设备',img:'../../static/img/shuma2.png'},
							{sp:'拍照玩物',img:'../../static/img/shuma3.png'},
							{sp:'数据线',img:'../../static/img/shuma4.jpg'},
							{sp:'手机壳/支架/手机膜',img:'../../static/img/shuma5.jpg'},
							{sp:'存储设备',img:'../../static/img/shuma6.jpg'},
							{sp:'电脑配件',img:'../../static/img/shuma7.png'}
							]
					},{name:'智能影音',
						comment:[
							{sp:'音箱',img:'../../static/img/yingyin1.jpg'},
							{sp:'耳机',img:'../../static/img/yingyin2.jpg'},
							{sp:'投影仪',img:'../../static/img/yingyin3.jpg'},
							{sp:'VR设备',img:'../../static/img/yingyin4.jpg'},
							{sp:'创意相机',img:'../../static/img/yingyin5.jpg'}		
							]
					}
					
				]
			}			
	},
	components:{
		'v-yingyin':Yingyin
	}
	}
</script>

<style>
</style>