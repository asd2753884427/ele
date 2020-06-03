<template>
	<div class="users-box">
		<div class="users-btn">
			<!-- 点击新增按钮后  显示第一个对话框  true       并且把add方法使用把第一个对话框数据清空 -->
			<el-button type="primary" @click="dialogVisible = true;add()">
				<i class="el-icon-circle-plus-outline"></i>
				<span>新增</span>
			</el-button>
			<el-button type="danger" @click="delArray()">
				<i class="el-icon-delete"></i>
				<span>批量删除</span>
			</el-button>
		</div>
		<div class="users-table">
			<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="50">
				</el-table-column>
				<el-table-column width="170" sortable prop="date" label="日期">
				</el-table-column>
				<el-table-column width="170" sortable prop="name" label="姓名">
				</el-table-column>
				<el-table-column width="200" prop="phone" label="手机">
				</el-table-column>
				<el-table-column width="300" property="address" label="地址" show-overflow-tooltip>
				</el-table-column>
				<el-table-column width="500" label="状态">
					<template slot-scope="scope">
						{{ scope.row.buer ? "启用" : "禁用" }}
					</template>
				</el-table-column>
				<el-table-column fixed="right" label="操作">
					<template slot-scope="scope">
						<el-button size="mini" type="primary" plain @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						<el-button size="mini" type="danger" @click="handleDelete(scope.$index)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="block">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
			 :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="400"
			 background>
			</el-pagination>
		</div>
		<el-dialog title="新增" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<el-form ref="form" :model="form" label-width="50px">
				<el-form-item label="姓名">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="手机">
					<el-input v-model="form.phone"></el-input>
				</el-form-item>
				<el-form-item label="地址">
					<el-input v-model="form.address"></el-input>
				</el-form-item>
				<el-form-item label="日期">
					<!-- 把改日期表返回的 默认Date对象 转换为 字符串对象 -->
					<el-date-picker v-model="form.date" type="date" value-format="yyyy-MM-dd" placeholder="选择日期">
					</el-date-picker>
				</el-form-item>
				<el-form-item label="状态">
					<!-- 将布尔值  转换为字符串 -->
					<el-switch v-model="form.buer" :active-value="1" :inactive-value="0" active-color="#13ce66" inactive-color="#ff4949">
					</el-switch>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<!-- 第一个对话框 调用添加 tianjia()  方法    点击后隐藏-->
				<el-button type="primary" @click="tianjia();dialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
		<el-dialog title="编辑" :visible.sync="dialogVisible2" width="30%" :before-close="handleClose">
			<el-form ref="form" :model="form2" label-width="50px">
				<el-form-item label="姓名">
					<el-input v-model="form2.name"></el-input>
				</el-form-item>
				<el-form-item label="手机">
					<el-input v-model="form2.phone"></el-input>
				</el-form-item>
				<el-form-item label="地址">
					<el-input v-model="form2.address"></el-input>
				</el-form-item>
				<el-form-item label="日期">
					<!-- 把改日期表返回的 默认Date对象 转换为 字符串对象 -->
					<el-date-picker v-model="form2.date" type="date" value-format="yyyy-MM-dd" placeholder="选择日期">
					</el-date-picker>
				</el-form-item>
				<el-form-item label="状态">
					<!-- 将布尔值  转换为字符串 -->
					<el-switch v-model="form2.buer" :active-value="1" :inactive-value="0" active-color="#13ce66" inactive-color="#ff4949">
					</el-switch>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<!-- 第二个对话框  点击后隐藏该对话框    false -->
				<el-button @click="dialogVisible2 = false">取 消</el-button>
				<!-- 第二个对话框  点击后隐藏该对话框    false -->
				<el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				//存储选中的对象下标
				tableDataAmount: [],
				// 第一个对话框
				form: {
					name: "",
					phone: "",
					date: "",
					buer: 0
				},
				// 第二个对话框
				form2: {
					name: "",
					phone: "",
					date: "",
					buer: 0
				},
				//清空选中
				multipleSelection: [],
				//第一个对话框显示隐藏状态
				dialogVisible: false,
				//第二个对话框显示隐藏状态
				dialogVisible2: false,
				//分页器的起始位置
				currentPage: 1,
				//数据
				tableData: '',
				// mess:"老弟",
			}
		},
		methods: {
			//编辑的新信息修改完成
			xiugaixinxi(){
				this.$http({
					method:"post",
					url:"/api/test",
					data:this.form2,
				}).then(res => {
					this.tableData = res.data;
				})
			},
			//编辑次列的数据
			handleEdit(index, row) {
				console.log(index, row);
				this.form2 = Object.assign({}, row);
				// this.form2 = row;
				this.dialogVisible2 = true;
			},
			//确定编辑此列的数据
			//删除该列
			handleDelete(index) {
				console.log(index);
				this.tableData.splice(index, 1);
			},
			//提示
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			//提示
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			//提示
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(() => {
						done();
					})
					.catch(() => {});
			},
			//每次新增把第一个对话框里面的数据变成空
			add() {
				this.form = {};
			},
			//添加数据的缺点按钮   把编辑的第一个对话框form放在数据表中。如果把对话框dialogVisible属性变成隐藏false
			tianjia() {
				this.tableData.push(this.form);
				this.dialogVisible = false
			},
			//把选中的小方块的下标存到tableDataAmount
			handleSelectionChange(data) {
				this.tableDataAmount = data
			},
			//批量删除功能
			delArray() {
				var that = this
				// 拿到选中的数据-->；
				let val = this.tableDataAmount
				// 如果选中数据存在-->
				if (val) {
					// 将选中数据遍历-->
					val.forEach(function(item) {
						// 遍历源数据
						that.tableData.forEach(function(itemI, indexI) {
							// 如果选中数据跟元数据某一条标识相等，删除对应的源数据-->
							if (item.id === itemI.id) {
								that.tableData.splice(indexI, 1)
							}
						})
					})
				}
				//	      <!-- 清除选中状态-->
				this.$refs.multipleTable.clearSelection()
			}
		},
		mounted() {
			this.$http('/api/test').then(res => {
				console.log(res);
				this.tableData = res.data;
			})
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
		//离开当前组件的守卫
		// beforeRouteLeave: (to, from, next) => {
		// 	if (confirm('确定要离开吗？') == true) {
		// 		next()
		// 	} else {
		// 		next(false)
		// 	}
		// }
	}
</script>

<style>
	.users-box {
		position: relative;
		left: 0;
		top: 0;
	}

	.block {
		margin-top: 20px;
	}
</style>
