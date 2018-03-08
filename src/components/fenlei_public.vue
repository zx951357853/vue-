<template>
	<div class="box">
		<div class="public" v-for='(i,index) in list'>
			<div class="sna">{{i.name}}</div>
			<div class="commen">
				<dl v-for='(k,ind) in i.comment'>
					<dd><img :src="k.img"/></dd>
					<dt>{{k.sp}}</dt>
				</dl>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:['list']
	}
</script>

<style>
	*{margin: 0;padding: 0;}
	.public>.sna{
		width: 97vw;
		height: 8vw;
		border-left: 1vw solid #f55e14;
		font-size: 3.3vw;
		line-height: 8vw;
		color: #444444;
		padding-left: 2vw;
		margin-top: 2.7vw;
		margin-bottom: 2.7vw;
		background: white;		
	}
	.public>.commen{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		background: white;
	}
	.public>.commen>dl{
		height: 26.7vw;		
		width: 25vw;
	}
	.public>.commen>dl>dt{
		font-size: 3.2vw;
		width: 25vw;
		height: 9.3vw;
		text-align: center;
		line-height: 4.3vw;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.public>.commen>dl>dd{
		width: 25vw;
		height: 17.4vw;
	}
	.public>.commen>dl>dd>img{
		width: 12vw;
		height: 12vw;
		margin-top: 2.7vw;
		margin-left: 6.5vw;
	}
</style>