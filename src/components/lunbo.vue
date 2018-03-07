<template>
	  <div class="block">	    
	    <el-carousel trigger="click" height="62.4vw">
	      <el-carousel-item v-for="item in list" :key="item">
	        <img :src='item' />
	      </el-carousel-item>
	    </el-carousel>
	  </div>
</template>

<script>
	export default {
		props:['list']
	}
</script>

<style>
	.block .el-carousel_button{
		width: 5vw;
		height: 5vw;
		border-radius: 50%;
		z-index: 500;
	}
	.block img{
		width: 100%;
		height: 62.4vw;
	}
</style>