<template>
	<div class="echarts-box">
		<!-- 图标显示的区域 -->
		<div class="echarts" id="echarts"></div>
	</div>
</template>

<script>
	import echarts from 'echarts';
	import option from '../common/option.js'
	
	export default{
		mounted(){
			this.DrawEcharts();
		},
		methods:{
			DrawEcharts(){
				/* 初始化一个echarts对象 */
				let chart = echarts.init(document.getElementById('echarts'));
				
				/* 设置配置项 */
				chart.setOption(option);
			}
		},
		beforeRouteEnter:(to,from,next)=>{
			let usetd = localStorage.getItem('yonghu');
			// console.log(from.path);
			// console.log(usetd);
		    if(from.path == "/" && usetd === null){
				next('/login');
			}else{
				next();
			}
		}
	}
</script>

<style>
	.echars-box{
		margin-top: 100px;
	}
	.echarts{
		width: 95%;
		height: 500px;
	}
</style>
