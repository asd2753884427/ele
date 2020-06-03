<template>
	<div>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column prop="title" label="标题" width="600">
			</el-table-column>
			<el-table-column prop="name" label="作者">
			</el-table-column>
			<el-table-column prop="date" label="日期">
			</el-table-column>
			<el-table-column prop="currentState" label="状态">
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="150">
				<template slot-scope="scope">
					<el-button size="mini" type="primary" plain @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="block">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage1"
			 :page-sizes="[20,30]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="400" background>
			</el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					title: '上海市普陀区金沙江路 1518 弄',
					currentState: "发布",
				}, {
					date: '2016-05-04',
					name: '王小虎',
					title: '上海市普陀区金沙江路 1517 弄',
					currentState: "未发布",
				}, {
					date: '2016-05-01',
					name: '王小虎',
					title: '上海市普陀区金沙江路 1519 弄',
					currentState: "未发布",
				}, {
					date: '2016-05-03',
					name: '王小虎',
					title: '上海市普陀区金沙江路 1516 弄',
					currentState: "发布",
				}]
			}
		},
		methods: {
			handleEdit(index, rows) {
				if (rows) {
					console.log(rows);
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
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
</style>
