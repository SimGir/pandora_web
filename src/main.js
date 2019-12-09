import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import bus from "./assets/js/bus"
//import MintUI from "mint-ui"
//import "mint-ui/lib/style.css"
// 引入全局组件
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Toast from '@/components/Toast.vue'

//统计目录下引入的文件一定要加 ./  否则报错
//import "./assets/font/iconfont.css"
//vuex:存储所有组件共用的数据，且当数据更新时，所有组件中的数据都更新
//使用vuex的步骤
//1.引入vuex第三方模块
import Vuex from "vuex"
//2.注册vuex
Vue.use(Vuex)
//3.创建存储对象
var store = new Vuex.Store({
	//state中存储的是所有组件共用的数据，共享的
	state:{
		fa:12,
		cartCount:0
	},
	//修改共享数据(立即修改)
	mutations:{
		//定义修改共享数据的函数，实参state是存储数据的对象
		subItem(state){
			state.fa--;
		},
		clear(state){
			state.fa=0;
		},
		addCount(state){
			state.cartCount++;
		},
		clearCount(state){
			state.cartCount=0;
		}
	},
	//异步修改共享数据，设置定时器延迟调用mutations中的函数
	actions:{
		modifyFa:(context)=>{
			//模拟延时操作
			//context上下文对象，即$store
			setTimeout(()=>{
				context.commit("clear");
			},1500);
		}
	},
	//获取共享数据
	getters:{
		//定义获取共享数据的函数
		getFa(state){
			return state.fa;
		},
		getCount(state){
			return state.cartCount;
		}
	}
})

//Vue.use(MintUI);
/* 将axios添加到Vue的原型链中 */
Vue.prototype.axios = axios;
/* 将bus添加到Vue的原型链中 */
Vue.prototype.bus = bus;
/* 添加服务器基础路径 */
axios.defaults.baseURL = "http://localhost:5050";
/* 发送请求保存session信息 */
axios.defaults.withCredentials = true;
/* axios的使用方法：this.axios.get() */
Vue.config.productionTip = false

//注册全局组件
Vue.component("pan-header",Header);
Vue.component("pan-footer",Footer);
Vue.component("toast",Toast);

new Vue({
	router,
	render: h => h(App),
	//4.将存储对象添加到new Vue对象中
	store
}).$mount('#app')

