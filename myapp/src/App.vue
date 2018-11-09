<template>
	<!-- <div>你好，我是App.vue里面的模板</div> -->
	<div>
		<ul class="nav">
			 <!-- v-for循环arr -->
			<router-link  to="/home" tag="li">首页</router-link>
			<router-link  to="/list" tag="li">课程列表</router-link> 
			<router-link  to="/my" tag="li">我的课程</router-link> 
			<router-link  to="/user" tag="li">个人中心</router-link>  
		</ul>
		<router-view></router-view>
	</div>
	
</template>

<script>
	//组件写完之后必须暴露出去
	export default{
		name:'App',  //组件名，一般路径（路径是文件的名字 ）叫什么，组件就叫什么
		data(){ //数据代理
			return {
				// arr:['大头','二狗','我们']
				arr:[{
					title:'首页',
					path:'/home'

				},{
					title:'课程列表',
					path:'/list'
				},{
					title:'我的课程',
					path:'/my'
				},{
					title:'个人中心',
					path:'/user'
				}]
			}
		}
	}
	
	
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	.nav{
		position: fixed;
		left:0;
		bottom:0;
		height: 100px;
		width: 100%;
		border-top:1px solid #000;
	}
	.nav li{
		list-style: none;
		float: left;
		width: 25%;
		height: 100%;
		line-height: 100px;
		text-align: center;
	}
	.nav .router-link-active{
		background: green;
		color: #fff;
	}

	/* 一开始在cmd里面没有下载路由，在这里就需要下载路由 cnpm i vue-router -S  然后再cmd里面启动 npm run dev*/
</style>