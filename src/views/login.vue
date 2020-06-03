<template>
  <div class="login-box">
	<el-form class='login-form'>
		<h2>系统登录</h2>
		<el-form-item>
			<el-input v-model="loginInfo.userName" placeholder="请输入用户名"></el-input>
		</el-form-item>
		<el-form-item>
			<el-input placeholder="请输入密码" v-model="loginInfo.pwd" show-password></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type='primary' @click='login' class="login-btn">登录</el-button>
		</el-form-item>
	</el-form>
  </div>
</template>

<script>
export default {
	data() {
      return {
        loginInfo:{
			userName: '',
			pwd:'',
		}
      }
    },
	methods:{
		login(){
			this.$http({
				method:"post",
				url:"/api/getUserInfo",
				data:this.loginInfo
			}).then(res=>{
				if(res.data != 0 ){
					localStorage.setItem('yonghu',res.data);
					this.$router.push('/consolee');
				}else{
					alert("密码不正确");
				}
			})
		}
	}
}
</script>

<style scoped="scoped">
    .login-box{
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		background-color: #20222A;
	}
	.login-form{
		width: 400px;
		/*border: 2px red solid;*/
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		background-color: #F5F5F5;
		padding: 30px 30px 10px 30px;
		border-radius: 10px;
	}
	.login-btn{
		width: 100%;
	}
</style>