<template>
	<el-container class="login-box">
	  <el-aside class="aside">
		<div class="login-img">
			<img src="../assets/logo.png" alt="">
		</div>
		<Nav></Nav>
	  </el-aside>
	  <el-container>
	    <el-header>
			<Header></Header>
		</el-header>
	    <el-main>
			<router-view />
		</el-main>
	  </el-container>
	</el-container>
</template>

<script>
	import Nav from "../components/Nav/nav.vue";
	import Header from "../components/Header/header.vue";
	export default{
		components:{
			Nav,
			Header
		},
		//组件内守卫 在组件结构渲染之前执行
		beforeRouteEnter: (to, from, next) => {
			//提前执行页面data里面的东西
			// next(vm=>{
			// 	alert(vm.mess);
			// })
			let usetd = localStorage.getItem('yonghu');
			// console.log(from.path);
			// console.log(usetd);
			if (from.path == "/" && usetd === null) {
				next('/login');
			} else {
				next();
			}
		},
	}
</script>

<style scoped>
  .login-box{
	width: 100%;
	height: 100%;
	position: absolute;
  }
  .aside{
	  background-color: #545c64;
  }
  .login-img{
	width: 100px;
	height: 50px;
	margin: 0 auto;
  }
  .login-img img{
	  width: 100%;
	  height: 100%;
  }
  .el-main{
	  position: relative;
	  left: 0;
	  top: 0;
  }
</style>
