import Home from '@/home/Home'
import List from '@/list/List'
import Detail from '@/detail/Detail';
import Login from '@/login/Login';

const mapRoutes=[
    { path: "/", name: "Home", component: Home,auth: true },
    { path: "/home", name: "Home", component: Home,auth: true },
    { path: "/detail", name: "Detail", component: Detail ,auth: true},
    { path: "/list", name: "List", component: List,auth: true},
    { path: "/login", name: "Login", component: Login }
  ]

export default mapRoutes