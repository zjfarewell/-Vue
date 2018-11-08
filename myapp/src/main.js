// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'  //引进App.vue 用变量名App存起来，一般引进的文件叫什么，变量名就叫什么 .vue后坠可写可不写


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { 
  	App:App // 把引进的文件赋给组件   组件名和变量名是同一个，可以直接写一个。App:App 等同于App
//	App:{//组件名
//			template:`<div id="app">我是组件里面的模板</div>`  模板里面的内容有可能有很多，所以拎出来单独写，在src里面创建一个App.vue的文件单独来写
//	}
  },
  template: '<App/>'
})
