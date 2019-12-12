// 引入路由表
import {
    Details,
    Login,
    Header,
    List,
    Footer
} from "../pages"

// 一级路由
export const mainRoutes = [{
    pathname : "/login",
    component : Login
},{
   pathname : "/header",
   component : Header
},{
   pathname : "/details",
   component : Details
},{
   pathname : "/footer",
   component : Footer
}]


// 二级路由
export const adminRoutes = [{
   pathname : "/list",
   component : List
},
{
   // 传一个动态路由
   pathname :"/details/:id",
   component : Details,
   isNav : false
}]
