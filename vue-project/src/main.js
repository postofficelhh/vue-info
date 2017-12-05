//引入资源
import Vue from 'vue';

//注册全局过滤器  B
import Moment from 'moment';
Vue.filter('convertTime',(value)=>{
    return Moment(value).format('YYYY-MM-DD');
});
// 处理title文字过多换行问题
Vue.filter('convertTitle',(value,limit)=>{
    //预防在按照默认值渲染之后网络太慢的产生bug
    if(!value)return;
    if(value.length > limit){
        return value.substr(0,limit) + '...'
    }
    //返回原数据
    return value;
})

//注册全局过滤器  E


//注册全局组件 B
import MyUl from './components/Commons/MyUl.vue';
import MyLi from './components/Commons/MyLi.vue';
import NavBar from './components/Commons/NavBar.vue';
Vue.component(NavBar.name,NavBar);
Vue.component(MyUl.name,MyUl);
Vue.component(MyLi.name,MyLi);

//注册全局组件 E

//引入路由相关组件 B
import App from './components/App.vue';
import Home from './components/Home/Home.vue';
import Member from './components/Member/Member.vue';
import Shopcart from './components/Shopcart/Shopcart.vue';
import Search from './components/Search/Search.vue';
import NewsList from './components/News/NewsList.vue';
import NewsDetail from './components/News/NewsDetail.vue';
import PhotoList from './components/Photo/PhotoList.vue';
import PhotoDetail from './components/Photo/PhotoDetail.vue';

//引入路由相关组件 E


//VuePreview B
import VuePreview from "vue-preview";
Vue.use(VuePreview);
//VuePreview E


//VueRouter B
import VueRouter from 'vue-router';
//安装插件
Vue.use(VueRouter);
let router = new VueRouter();
router.addRoutes([
    {path:'/',redirect:{name:'home'}},//重定向
    { name: 'home', path: '/home', component:Home},
    {name:'member',path:'/member',component:Member},
    {name:'shopcart',path:'/shopcart',component:Shopcart},
    {name:'search',path:'/search',component:Search},
    {name:'news.list',path:'/news/list',component:NewsList},
    {name:'news.detail',path:'/news/detail',component:NewsDetail},
    {name:'photo.list',path:'/photo/list/:categoryId',component:PhotoList},
    {name:'photo.detail',path:'/photo/detail/:imgId',component:PhotoDetail},

]);
//VueRouter  E

//MintUi B
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi);
//MintUi   E

//在MintUi之后设置自己的样式，以免覆盖
import './static/css/global.css';


//Axios B
import Axios from 'axios';
Vue.prototype.$axios = Axios;
//设置默认url请求基础路径
Axios.defaults.baseURL = 'http://vue.studyit.io/api/';
//Axios E

new Vue({
    el:'#app',
    render:c=>c(App),
    router
})