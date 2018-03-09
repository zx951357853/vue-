import Vue from 'vue'
import Router from 'vue-router'
import Shouye from '@/components/shouye'
import Tuijian from '@/components/fenlei_tuijian.vue'
const Fenlei =r=>require.ensure([],()=>r(require('@/components/fenlei')),'fenlei')
const Find =r=>require.ensure([],()=>r(require('@/components/find')),'find')
const Car =r=>require.ensure([],()=>r(require('@/components/car')),'car')
const My =r=>require.ensure([],()=>r(require('@/components/my')),'my')
const Jiaju =r=>require.ensure([],()=>r(require('@/components/fenlei_jiaju.vue')),'fenlei_jiaju')
const Shuma =r=>require.ensure([],()=>r(require('@/components/fenlei_shuma.vue')),'fenlei_shuma')
const Zhuangbei =r=>require.ensure([],()=>r(require('@/components/fenlei_zhuangbei.vue')),'fenlei_zhuangbei')
const Search =r=>require.ensure([],()=>r(require('@/components/search.vue')),'search')
const Regist =r=>require.ensure([],()=>r(require('@/components/regist.vue')),'regist')
const Login =r=>require.ensure([],()=>r(require('@/components/login.vue')),'login')


Vue.use(Router)

export default new Router({
  routes: [
   	{path:'/shouye',component:Shouye},
   	{
   		path:'/fenlei',
   		component:Fenlei,
   		children:[
   		{path:'tuijian',component:Tuijian},
   		{path:'jiaju',component:Jiaju},
   		{path:'shuma',component:Shuma},
   		{path:'zhuangbei',component:Zhuangbei},
   		{path:'/fenlei',redirect:'/fenlei/tuijian'}
   		
   		]
   	},
   	{path:'/find',component:Find},
   	{path:'/car',component:Car},   	
   	{path:'/my',component:My},
   	{path:'/sear',component:Search},
   	{path:'/regist',component:Regist},
   	{path:'/login',component:Login},  	 	   	
   	{path:'/',redirect:'/shouye'}
   	
  ]
})

