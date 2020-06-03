<template>
	<div class="header-box">
		<el-row type='flex' justify="space-between">
			<el-col :span="8">
				<button class="btn-tool">
					<i class="el-icon-d-arrow-left"></i>
				</button>
				<button class="btn-tool">
					<i class="el-icon-refresh"></i>
				</button>
				<button class="btn-tool">
					<i class="el-icon-rank"></i>
				</button>
				<button class="btn-tool">
					<i class="el-icon-edit"></i>
				</button>
			</el-col>
			<el-col :span="6" align='riht'>
				<span>{{ todayDate }}</span>
				
				<el-dropdown trigger="click">
				      <span class="el-dropdown-link">
				        ADMIN<i class="el-icon-caret-bottom el-icon--right"></i>
				      </span>
				      <el-dropdown-menu slot="dropdown">
				        <el-dropdown-item>个人中心</el-dropdown-item>
				        <el-dropdown-item>修改密码</el-dropdown-item>
				        <el-dropdown-item divided><span @click="tuchu()">退出登录</span></el-dropdown-item>
				      </el-dropdown-menu>
				    </el-dropdown>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				todayDate:"",
			}
		},
		methods:{
			getDate(){
				// 年  月   日   周
				let year,mouth,day,week
				let dt = new Date();
				year = dt.getFullYear();
				mouth = dt.getMonth()+1;
				day = dt.getDate();
				week = dt.getDay();
				let dayweek = ["日","一","二","三","四","五","六"]
				for(let i=0;i<7;i++){
					if(week==i){
						week=dayweek[i];
					}
				}
				this.todayDate = year+" 年 "+mouth+" 月 "+day+" 日 星期"+week
			},
			tuchu(){
				console.log("之前:"+localStorage.getItem('yonghu'));
				localStorage.removeItem('yonghu');
				console.log("之后:"+localStorage.getItem('yonghu'));
				this.$router.push('/login');
			},
			xiugaixinxi(){
				this.$http({
					method:"post",
					url:"/api/test",
				}).then(res => {
					this.tableData = res.data;
				})
			},
		},
		mounted(){
			this.getDate();
		}
	}
</script>

<style scoped="scoped">
	.el-dropdown{
		height: 40px;
	}
	.btn-tool{
		border: none;
		background: transparent;
		padding: 5px 10px;
		font-size: 20px;
		cursor: pointer;
		outline: none;  /* 点击外面橙色的框消失*/
	}
	.header-box{
		line-height: 60px;
	}
</style>
