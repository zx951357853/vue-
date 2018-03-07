<template>
	<div class="baokuan">
		<dl v-for='i in list'>
			<dd>
				<img :src="i.img"/>
				<p>
					<span>{{i.name}}</span>
					<span>{{i.price}}</span>						
				</p>
			</dd>
			<dt>{{i.des}}</dt>
		</dl>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[{
			                  "name":"沙芬维他命雾化能量棒",
			                  "des":"多种口味维他命，亲吻你的味蕾！",
			                  "img":"http://images1.d1.com.cn/shopimg/gdsimg/2018/02/24/0120770620180226233408_7.jpg",
			                  "link":"/kubolo/product.html?id=01207706",
			                  "price":"￥89.0"
			              },
			              {
			                  "name":"德国红点设计获奖星空表",
			                  "des":"在爱情里，我们都是外星人！",
			                  "img":"http://images1.d1.com.cn/shopimg/gdsimg/2018/02/24/0190457120180226233346_7.jpg",
			                  "link":"/kubolo/product.html?id=01904571",
			                  "price":"￥788.0"
			              },
			              {
			                  "name":"Nomad苹果移动电源数据线",
			                  "des":"苹果数据线，终于增加充电宝功能了！",
			                  "img":"http://images1.d1.com.cn/shopimg/gdsimg/2017/11/26/0810039920171127135230_7.jpg",
			                  "link":"/kubolo/product.html?id=08100399",
			                  "price":"￥298.0"
			              },
			              {
			                  "name":"沙芬经典烟草雾化能量棒",
			                  "des":"完美代替传统香烟，触发你的激情瞬间！",
			                  "img":"http://images1.d1.com.cn/shopimg/gdsimg/2018/02/24/0120770720180226233427_7.jpg",
			                  "link":"/kubolo/product.html?id=01207707",
			                  "price":"￥79.0"
			              },
			              {
			                  "name":"萌宠圣诞款多功能充电宝",
			                  "des":"",
			                  "img":"http://images1.d1.com.cn/shopimg/gdsimg/2017/12/19/0810041320171220105846_7.jpg",
			                  "link":"/kubolo/product.html?id=08100413",
			                  "price":"￥368.0"
			              },
			              {
			                  "name":"自动跟随机器人智能拉杆箱",
			                  "des":"行旅箱自动跟人走，比狗狗还听话！相当于无人驾驶的小汽车！",
			                  "img":"http://images1.d1.com.cn/shopimg/gdsimg/2018/01/22/0190456920180129215337_7.jpg",
			                  "link":"/kubolo/product.html?id=01904569",
			                  "price":"￥5499.0"
			              },
			              {
			                  "name":"2018狗年礼包 飞行棋版A",
			                  "des":"一个礼盒，装着全家的快乐大年！",
			                  "img":"http://images1.d1.com.cn/shopimg/gdsimg/2018/01/25/0120768920180129221621_7.jpg",
			                  "link":"/kubolo/product.html?id=01207689",
			                  "price":"￥118.0"
			              }]
				}
			}
	}
</script>

<style>
	.baokuan>dl{
		height: 68vw;
		width: 97vw;
		border:1px solid #d7d7d7;
		margin-bottom: 4.8vw;
		margin-left: 1.5vw;
		border-top: none;
		border-bottom-left-radius: 2vw;
		border-bottom-right-radius: 2vw;
		border-top-left-radius: 2vw;
		border-top-right-radius: 2vw;
	}
	.baokuan>dl>dd>img{
		height: 54.7vw;
		width: 97vw;
		border-top-left-radius: 2vw;
		border-top-right-radius: 2vw;
	}
	.baokuan>dl>dd{
		position: relative;
	}
	.baokuan>dl>dd>p{
		width: 97vw;
		height: 10.7vw;
		position: absolute;
		bottom: 0;
		background: rgba(0,0,0,0.5);
		
	}
	.baokuan>dl>dd>p>span{
		height: 10.7vw;
		line-height: 10.7vw;
	}
	.baokuan>dl>dd>p>span:nth-child(1){
		float: left;
		padding-left: 2vw;
		color: white;
	}
	.baokuan>dl>dd>p>span:nth-child(2){
		float: right;
		padding-right: 2vw;
		color: red;
	}
	.baokuan>dl>dt{
		padding-left: 2vw;
		height: 13.3vw;
		line-height: 13.3vw;
		font-size: 4.3vw;
		color: #000000;
		
	}
</style>