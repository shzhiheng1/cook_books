/**
 * TabBar不加路由的用法
 * 
 */

// import React, { Component } from 'react'
// import { Badge, TabBar } from 'antd-mobile'
// import {
//     AppOutline,
//     MessageOutline,
//     MessageFill,
//     UnorderedListOutline,
//   } from 'antd-mobile-icons'
// import homeicon from '@/assets/images/icon.png'
// import './home.css'

// function HomeIcon() {
//   return( <div>
//      <img className='adm-tab-bar-item-icon' src={homeicon} alt='首页icon'/>
//   </div>)
// }

// export default class Home extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             activeKey:'todo'
//         }
//         this.handleNav=this.handleNav.bind(this)
//     }
//     handleNav(key){
//         console.log(key)
//         this.setState({
//           activeKey:key
//         })
//     }
//     render() {
//         const {activeKey}=this.state;
//         const tabs = [
//             {
//               key: 'home',
//               title: '美食大全',
//               icon:(activeKey)=> activeKey? <HomeIcon />:<AppOutline />,
//               badge: Badge.dot,
//             },
//             {
//               key: 'todo',
//               title: '分类',
//               icon: <UnorderedListOutline />,
//               badge: '5',
//             },
//             {
//               key: 'message',
//               title: '更多',
//               icon: (activeKey) =>
//               activeKey ? <MessageFill /> : <MessageOutline />,
//               badge: '99+',
//             },
//           ]
//         return (
//             <div className='home'>
//                 <main>
//                     <div></div>
//                 </main> 
//                 <nav className='nav'>
//                     <TabBar activeKey={activeKey} onChange={this.handleNav} >
//                         {tabs.map(item => (
//                             <TabBar.Item
//                             key={item.key}
//                             icon={item.icon}
//                             title={item.title}
//                             badge={item.badge}
//                             />
//                         ))}
//                     </TabBar>
//                 </nav>
//             </div>
//         )
//     }
// }


/**
 * TabBar添加路由的用法
 */
import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  MemoryRouter as Router,
} from 'react-router-dom';
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';
import { connect } from 'react-redux'

import {Category} from "./category";
import Cookbook from "./cookbook/container/Cookbook";
import Cookmap from "./cookmap/Cookmap";
import More from "./more/More";


import './home.less';


const Bottom=function(props){
  const history=useHistory();
  const localhost=useLocation();
  const {pathname}=localhost;
  const setRouteActive=(value)=>{
    history.push(value)
  }
  let tabs=[
    {
      key: '/cookbook',
      title: '美食',
      icon: <AppOutline />,
    },
    {
      key: '/category',
      title: '分类',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/cookmap',
      title: '地图',
      icon: <MessageOutline />,
    },
    {
      key: '/more',
      title: '更多',
      icon: <UserOutline />,
    },
  ]
   if(!props.checked){
     tabs=tabs.filter((i,index)=>index!==2)
   }
   
  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {
         tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))
      }
    </TabBar>
  )

}

@connect(
  state=>({
    checked:state.moreReducer.checked
  })
)
class Layout extends Component {
  render(){
    const {checked}=this.props
    return (
      <Router initialEntries={['/more']}>
        <div className='home'>
            <div className='nav'>
              <Bottom checked={checked} />
            </div>
            <Switch>
              <Route exact path='/cookbook'>
                <Cookbook />
              </Route>
              <Route exact path='/category'>
                <Category />
              </Route>
              {
                checked&&
                <Route exact path='/cookmap'>
                  <Cookmap />
                </Route>
              }
              <Route exact path='/more'>
                <More />
              </Route>
            </Switch>
         </div>
      </Router>
    )
  }
}
export default Layout;

