<template>
	<div>
		<p class="consolee-text">课工场的同学们大家好 我是vue 大家可以叫我小v system</p>
	</div>
</template>

<script>
	export default{
		beforeRouteEnter:(to,from,next)=>{
			let usetd = localStorage.getItem('yonghu');
			// console.log(from.path);
			// console.log(usetd);
		    if(from.path == "/" && usetd === null){
				next('/login');
			}else{
				next();
			}
		},
		mounted(){
			let usetd = localStorage.getItem('yonghu');
			console.log(usetd);
		}
	}
</script>

<style>
	.consolee-text{
		font-size: 30px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
</style>
