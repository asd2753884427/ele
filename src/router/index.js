import Vue from "vue";
import VueRouter from "vue-router";
import index from '../views/index.vue'
import Consolee from '../views/consolee.vue'
import Login from '../views/login.vue'
import Users from '../views/users.vue'
import Articles from '../views/articles.vue'
import Echarts from '../views/echarts.vue'

Vue.use(VueRouter);

const routes = [
	{
		path: "/login",
		name: "Login",
		component: Login
	},
	{
		path: "/",
		name: "index",
		component: index,
		children: [{
				path: "/consolee", //主页
				name: "consolee",
				component: Consolee,
			},
			{
				path: "/users", //用户
				name: "users",
				component: Users,
			},
			{
				path: "/articles", //文档
				name: "articles",
				component: Articles,
			},
			{
				path: "/echarts", //图表
				name: "echarts",
				component: Echarts,
			},
			{
				path:"/",
				redirect:"consolee"
			}
		]
	},

];

const router = new VueRouter({
	mode: "hash",
	base: process.env.BASE_URL,
	routes
});
//路由守卫
// router.beforeEach( (to,from,next) => {
// 	console.log("to"+to.path);
// 	console.log("from"+from.path);
//   	if (to.path == '/login') {
//   		next();
//   	} else{
//   		next('/login');
//   	}
// })
export default router;
