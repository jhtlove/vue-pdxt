import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css'; //按需引用仍然需要导入样式
// //一次性导入ViewUI所有组件;修改后必须重新npm run serve才生效
Vue.use(ViewUI)

Vue.config.productionTip = false


//vant 组件
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);


new Vue({
  render: h => h(App),
}).$mount('#app')
