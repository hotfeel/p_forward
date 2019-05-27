import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/container/login/login'
import Demo from '@/container/demo/demo'
import OrderDetail from '@/container/order/orderDetail'
import QueryOrder from '@/container/order/queryOrder'
import Home from '@/container/home/home'
import Index from '@/container';
import Undo from '@/components/m_common/undo';
import UserManage from '@/container/base/userManage'
import Demooo from '@/components/m_common/demoooooo'

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
    if(sessionStorage.getItem("initRouter") === null && sessionStorage.getItem("token") !== null){
      console.log("走了5")
      const authoritys = JSON.parse(sessionStorage.getItem("authoritys"));
      getRouter = filterAsyncRouter(authoritys);
    }
    next();
  }
})

//遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap) {
  // 防止传参为空
  if(!asyncRouterMap){
    asyncRouterMap = [];
  }else{
    sessionStorage.setItem("initRouter","1");
  }
  // home下的子路由
  const routerChildren = [];
  asyncRouterMap.forEach(item=>{
    if(item.level <= 2 && item.url != null && item.url.length > 0 && item.componentPath != null && item.componentPath.length > 0){
        let routerData = {
          path:item.url,
          name:item.code,
          component:()=>import(`../${item.componentPath}.vue`)
        };
        routerChildren.push(routerData);
      }
  });


  const routerTemp = [
      {
        path:"/login",
        name:"login",
        component:resolve => require(['@/container/login/login'], resolve)
      }
    ]
  if(asyncRouterMap != null && asyncRouterMap.length > 1){
    routerChildren.push({
      path:"/aaa",
      name:"aaa",
      component: () => import('@/container/home/home')
    });
    routerChildren.push({
      path:"/orderDetail",
      name:"orderDetail",
      component:() => import('@/container/order/orderDetail')
    });
    routerChildren.push({
      path:"/demooo",
      name:"demooo",
      component:() => import('@/components/m_common/demoooooo')
    });
    routerChildren.push({
      path:"/queryOrder",
      name:"QueryOrder",
      component:() => import('@/container/order/queryOrder')
    });
    routerChildren.push({
      path:"/userManage",
      name:"userManage",
      component:() => import('@/container/base/userManage')
    });
    routerChildren.push({
      path:"/userDetail",
      name:"userDetail",
      component:() => import('@/container/base/userDetail')
    });


    // 配置一个全局404的子页面
    routerChildren.push({
      path:"*",
      name:"undo",
      component:resolve => require(['@/components/m_common/undo'], resolve)
    });
    routerTemp.push({
      path: "/",
      component: resolve => require(["@/container"], resolve),
      redirect: "userManage",
      children: routerChildren
    });
  }

  router.options.routes = router.options.routes.slice(0,0);
  Vue.nextTick(function(){
    router.addRoutes(routerTemp) //动态添加路由
  })
  return routerTemp;
}

export default router;
