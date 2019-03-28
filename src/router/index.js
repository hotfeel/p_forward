import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/container/login/login'
import Demo from '@/container/demo/demo'
import Order from '@/container/order/orderDetail'
import QueryOrder from '@/container/order/queryOrder'
import Home from '@/container/home/home'
import Index from '@/container';
import Undo from '@/components/m_common/undo';
import UserManage from '@/container/base/userManage'

Vue.use(Router)

const router = new Router({
  routes: []
})

let getRouter //用来获取后台拿到的路由

router.beforeEach((to, from, next) => {
  if(to.path === '/login'){
    sessionStorage.clear();
  }
  if(!getRouter){
    console.log("走了1")
    if(!sessionStorage.getItem("token")){
      console.log("走了2")
      getRouter = filterAsyncRouter([]);
      next({path:"/login"});
    }else{
      console.log("走了3")
      const authoritys = JSON.parse(sessionStorage.getItem("authoritys"));
      getRouter = filterAsyncRouter(authoritys);
      next({ ...to, replace: true })
    }
  }else{
    console.log("走了4")
    next();
  }
})

//遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap) {
  // 防止传参为空
  if(!asyncRouterMap){
    asyncRouterMap = [];
  }
  // home下的子路由
  const routerChildren = [];
  asyncRouterMap.forEach(item=>{
    if(item.level <= 2 && item.url != null && item.url.length > 0 && item.componentPath != null && item.componentPath.length > 0){
      //item.componentPath = 'container/base/userManage';
      console.log(item.componentPath);
        let routerData = {
          path:item.url,
          name:item.code,
          component:()=>import(`../${item.componentPath}.vue`)
        };
        routerChildren.push(routerData);
      }
  });

  routerChildren.push({
    path:"/aaa",
    name:"aaa",
    component:Home
  });
  routerChildren.push({
    path:"/order",
    name:"order",
    component:Order
  });
  routerChildren.push({
    path:"/queryOrder",
    name:"QueryOrder",
    component:QueryOrder
  });
  routerChildren.push({
    path:"/userManage",
    name:"userManage",
    component:UserManage
  });

  // 配置一个全局404的子页面
  routerChildren.push({
    path:"*",
    name:"undo",
    component:resolve => require(['@/components/m_common/undo'], resolve)
  });
  const getRouter = [
    {
      path:"/login",
      name:"login",
      component:resolve => require(['@/container/login/login'], resolve)
    },
    {
      path: "/",
      component: resolve => require(["@/container"], resolve),
      redirect: "userManage",
      children: routerChildren
    }
  ]
  router.addRoutes(getRouter) //动态添加路由
  return getRouter;
}

export default router;
