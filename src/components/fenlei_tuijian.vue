<template>
	<v-cy :list='list'></v-cy>
</template>

<script>
	import CY from './chuangyiqingdan.vue'
	export default{
		data(){
			return{
				list:[
				{name:"保暖用品","img":"http://images.d1.com.cn/shopadmin/splimg/201711/012018010004_1110.jpg"},
				{name:"促进睡眠","img":"http://images.d1.com.cn/shopadmin/splimg/201711/012019001003_1110.jpg"},
				{name:"雨伞雨具","img":"http://images.d1.com.cn/shopadmin/splimg/201711/012018008_1110.jpg"},
				{name:"防霾口罩","img":"http://images.d1.com.cn/shopadmin/splimg/201711/012019001001_1110.jpg"},
				{name:"充电设备","img":"http://images.d1.com.cn/shopadmin/splimg/201711/081005002_1110.jpg"},
				{name:"靠垫/坐垫","img":"http://images.d1.com.cn/shopadmin/splimg/201711/012018010006_1110.jpg"},
				{name:"创意服饰","img":"http://images.d1.com.cn/shopadmin/splimg/201711/019007001_1110.jpg"},
				{name:"酷箱包","img":"http://images.d1.com.cn/shopadmin/splimg/201711/019006002_1110.jpg"},
				{name:"个护工具","img":"http://images.d1.com.cn/shopadmin/splimg/201711/012019002_1110.jpg"},
				{name:"清洁用具","img":"http://images.d1.com.cn/shopadmin/splimg/201711/012018006_1110.jpg"},
				{name:"汽车用品","img":"http://images.d1.com.cn/shopadmin/splimg/201711/019004007_1110.jpg"},
				{name:"随身酷品","img":"http://images.d1.com.cn/shopadmin/splimg/201711/019004009_1110.jpg"},
				{name:"智能家居","img":"http://images.d1.com.cn/shopadmin/splimg/201711/012018001_1110.jpg"},
				{name:"个性耳机","img":"http://images.d1.com.cn/shopadmin/splimg/201711/081001002_1110.jpg"},
				{name:"创意灯具","img":"http://images.d1.com.cn/shopadmin/splimg/201711/012018003_1110.jpg"},
				{name:"创意杯子","img":"http://images.d1.com.cn/shopadmin/splimg/201711/012018007_1110.jpg"}
				],
			}
		},
		components:{
			'v-cy':CY
		}
	}
</script>

<style>
</style>