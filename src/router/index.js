import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Shouye from '@/components/shouye'
import Fenlei from '@/components/fenlei'
import Find from '@/components/find'
import Car from '@/components/car'
import My from '@/components/my'




Vue.use(Router)

export default new Router({
  routes: [
   	{path:'/shouye',component:Shouye},
   	{path:'/fenlei',component:Fenlei},
   	{path:'/find',component:Find},
   	{path:'/car',component:Car},   	
   	{path:'/my',component:My},
   	{path:'/',redirect:'/shouye'}
   	
  ]
})

