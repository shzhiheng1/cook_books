/**
 * TabBar不加路由的用法
 * 
 */

/*****************类组件*****************/


// import React, { Component } from 'react'
// import {  TabBar } from 'antd-mobile'
// import {connect} from 'react-redux'
// import {activeKeySync} from '@/home/category/actionCreatoer.js'
// import {
//     AppOutline,
//     MessageOutline,
//     MessageFill,
//     UnorderedListOutline,
//   } from 'antd-mobile-icons'
// import homeicon from '@/assets/images/icon.png'
// import './home.css'
// import {Category} from "./category";
// import Cookbook from "./cookbook/container/Cookbook";
// import Cookmap from "./cookmap/Cookmap";
// import More from "./more/More";


// function HomeIcon() {
//   return( <div>
//      <img className='adm-tab-bar-item-icon' src={homeicon} alt='首页icon'/>
//   </div>)
// }
// function ActiveContent(props){
//   const {activeKey}=props
//    switch (activeKey) {
//      case 'cookbook':
//        return <Cookbook></Cookbook>  
//      case 'category':
//        return <Category></Category>
//      case 'cookmap':
//        return <Cookmap></Cookmap>
//      case 'more':
//        return <More></More>
//      default:
//        return null
//    }
// }
// @connect(
//   state=>({
//     checked:state.moreReducer.checked,
//     activeKey:state.categoryReducer.categoryInfo.activeKey
//   }),
//   dispatch=>({
//     handleNav(activeKey){
//       dispatch(activeKeySync(activeKey))
//     }
//   })
// )
// class Home extends Component {
//     render() {
//       const {checked,activeKey}=this.props;  
//       let tabs=[
//               {
//                 key: 'cookbook',
//                 title: '美食',
//                 icon:(activeKey)=> activeKey? <HomeIcon />:<AppOutline />,
//               },
//               {
//                 key: 'category',
//                 title: '分类',
//                 icon: <UnorderedListOutline />,
//               },
//               {
//                 key: 'cookmap',
//                 title: '地图',
//                 icon: <MessageOutline />,
//               },
//               {
//                 key: 'more',
//                 title: '更多',
//                 icon: <MessageFill />,
//                 badge: '99+',
//               },
//             ]
//             if(!checked){
//               tabs=tabs.filter((i,index)=>i.key!=='cookmap')
//             }
//         return (
//             <div className='home'>
//                 <main>
//                     <ActiveContent activeKey={activeKey}></ActiveContent>
//                 </main> 
//                 <nav className='nav'>
//                     <TabBar activeKey={activeKey} onChange={this.props.handleNav} >
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
// export default Home





/*****************函数组件使用hooks*****************/

import React,{useCallback} from 'react'
import {  TabBar } from 'antd-mobile'
import {useSelector,useDispatch} from 'react-redux'
import {activeKeySync} from '@/home/category/actionCreatoer.js'
import {
    AppOutline,
    MessageOutline,
    MessageFill,
    UnorderedListOutline,
  } from 'antd-mobile-icons'
import homeicon from '@/assets/images/icon.png'
import './home.css'
import {Category} from "./category";
import Cookbook from "./cookbook/container/Cookbook";
import Cookmap from "./cookmap/Cookmap";
import More from "./more/More";


      let tabs=[
              {
                key: 'cookbook',
                title: '美食',
                icon:(activeKey)=> activeKey? <HomeIcon />:<AppOutline />,
              },
              {
                key: 'category',
                title: '分类',
                icon: <UnorderedListOutline />,
              },
              {
                key: 'cookmap',
                title: '地图',
                icon: <MessageOutline />,
              },
              {
                key: 'more',
                title: '更多',
                icon: <MessageFill />,
                badge: '99+',
              },
      ]

function HomeIcon() {
  return( <div>
     <img className='adm-tab-bar-item-icon' src={homeicon} alt='首页icon'/>
  </div>)
}
function ActiveContent(props){
  const {activeKey}=props
   switch (activeKey) {
     case 'cookbook':
       return <Cookbook></Cookbook>  
     case 'category':
       return <Category></Category>
     case 'cookmap':
       return <Cookmap></Cookmap>
     case 'more':
       return <More></More>
     default:
       return null
   }
}


export default function Home() {
        const {checked}=useSelector(state=>state.moreReducer)
        const {activeKey}=useSelector(state=>state.categoryReducer.categoryInfo)
        const dispatch = useDispatch()
        const handleNav=useCallback((activeKey)=>{
            dispatch(activeKeySync(activeKey))
        },[dispatch])
        if(!checked){
          tabs=tabs.filter((i,index)=>i.key!=='cookmap')
        }
         return (
            <div className='home'>
                <main>
                    <ActiveContent activeKey={activeKey}></ActiveContent>
                </main> 
                <nav className='nav'>
                    <TabBar activeKey={activeKey} onChange={handleNav}>
                        {tabs.map(item => (
                            <TabBar.Item
                            key={item.key}
                            icon={item.icon}
                            title={item.title}
                            badge={item.badge}
                            />
                        ))}
                    </TabBar>
                </nav>
            </div>
        )
}







/**
 * TabBar添加路由的用法
 */
// import React, { Component } from "react";
// import { TabBar } from "antd-mobile";
// import {
//   Route,
//   Switch,
//   useHistory,
//   useLocation,
//   MemoryRouter as Router,
// } from 'react-router-dom';
// import {
//   AppOutline,
//   MessageOutline,
//   UnorderedListOutline,
//   UserOutline,
// } from 'antd-mobile-icons';
// import { connect } from 'react-redux'

// import {Category} from "./category";
// import Cookbook from "./cookbook/container/Cookbook";
// import Cookmap from "./cookmap/Cookmap";
// import More from "./more/More";


// import './home.less';


// const Bottom=function(props){
//   const history=useHistory();
//   const localhost=useLocation();
//   const {pathname}=localhost;
//   const setRouteActive=(value)=>{
//     history.push(value)
//   }
//   let tabs=[
//     {
//       key: '/cookbook',
//       title: '美食',
//       icon: <AppOutline />,
//     },
//     {
//       key: '/category',
//       title: '分类',
//       icon: <UnorderedListOutline />,
//     },
//     {
//       key: '/cookmap',
//       title: '地图',
//       icon: <MessageOutline />,
//     },
//     {
//       key: '/more',
//       title: '更多',
//       icon: <UserOutline />,
//     },
//   ]
//    if(!props.checked){
//      tabs=tabs.filter((i,index)=>index!==2)
//    }
   
//   return (
//     <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
//       {
//          tabs.map(item => (
//           <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
//         ))
//       }
//     </TabBar>
//   )

// }

// @connect(
//   state=>({
//     checked:state.moreReducer.checked
//   })
// )
// class Layout extends Component {
//   render(){
//     const {checked}=this.props
//     return (
//       <Router initialEntries={['/cookbook']}>
//         <div className='home'>
//             <div className='nav'>
//               <Bottom checked={checked} />
//             </div>
//             <Switch>
//               <Route exact path='/cookbook'>
//                 <Cookbook />
//               </Route>
//               <Route exact path='/category'>
//                 <Category />
//               </Route>
//               {
//                 checked&&
//                 <Route exact path='/cookmap'>
//                   <Cookmap />
//                 </Route>
//               }
//               <Route exact path='/more'>
//                 <More />
//               </Route>
//             </Switch>
//          </div>
//       </Router>
//     )
//   }
// }
// export default Layout;