<template>
	<el-menu
	      default-active="2"
	      class="el-menu-vertical-demo"
	      @open="handleOpen"
	      @close="handleClose"
	      background-color="#545c64"
	      text-color="#fff"
	      active-text-color="#ffd04b"
		  router
		  >
	      <el-menu-item index="/consolee">
	        <i class="el-icon-location"></i>
	        <span slot="title">主页</span>
	      </el-menu-item>
	      <el-menu-item index="/users">
	        <i class="el-icon-menu"></i>
	        <span slot="title">用户</span>
	      </el-menu-item>
	      <el-menu-item index="/articles">
	        <i class="el-icon-document"></i>
	        <span slot="title">文章</span>
	      </el-menu-item>
		  <el-submenu>
		    <template slot="title">
				<i class="el-icon-setting"></i>
				<span slot="title">设置</span>
			</template>
		    <el-menu-item index="4-1">基本资料(空)</el-menu-item>
		    <el-menu-item index="4-2">修改密码(空)</el-menu-item>
		  </el-submenu>
	      <el-menu-item index="/echarts">
	        <i class="el-icon-share"></i>
	        <span slot="title">图表</span>
	      </el-menu-item>
	    </el-menu>
</template>

<script>
</script>

<style>
	.el-menu{
		  border-right: 1px solid #545c64 !important;
	}
</style>
