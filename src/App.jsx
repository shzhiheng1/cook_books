/*****************类组件*****************/

// import React,{Component} from 'react'
// import {Route,Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import Home from './home/Home'
// import List from './list/List'
// import Detail from './detail/Detail';
// import Page404 from './404Page/Page404';
// import '@/assets/styles/reset.css';
// import AnimatedSwitch from '@/components/animated/AnimatedSwitch'

// @connect(
//     state=>({
//         animatedType:state.animatedReducer.animatedType
//     })
// )
// class App extends Component {
//     render(){
//         return (
//             <div>
//                 <AnimatedSwitch type={this.props.animatedType}>
//                     <Route path='/home' component={Home}></Route>
//                     <Route path='/list' component={List}></Route>
//                     <Route path='/detail' component={Detail}></Route>
//                     <Redirect exact from='/' to='/home' ></Redirect>
//                     <Route path='/*' component={Page404}></Route>
//                 </AnimatedSwitch>
//             </div>
//         )
//     }
    
// }

// export default App

/*****************函数组件使用hooks*****************/
import React from 'react'
import {Route,Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux'
// import Home from './home/Home'
// import List from './list/List'
// import Detail from './detail/Detail';
import Page404 from './404Page/Page404';
// import Login from './login/Login';
import AnimatedSwitch from '@/components/animated/AnimatedSwitch'
import mapRoutes from '@/routes/mapRoutes'

import '@/assets/styles/reset.css';



const App=()=>{
    const {animatedType}=useSelector(state=>state.animatedReducer)
    const {token}=useSelector(state=>state.loginReducer)
    // 动态添加路由
    const addComponent=(props,item)=>{
        if (!item.auth || token) {
            return <item.component {...props} />
         }else {
            return  <Redirect to={{pathname:'/login',state:{from:props.location}}}  />
         }
    }
    return (
        <>
            <AnimatedSwitch type={animatedType} token={token}>
                {/* <Route path='/home' component={Home}></Route>
                <Route path='/list' component={List}></Route>
                <Route path='/detail' component={Detail}></Route>
                <Route path='/login' component={Login}></Route>
                <Redirect exact from='/' to={token==='true'?'/home':'/login'} ></Redirect> */}
                {
                    mapRoutes.map((item, index) => {
                        return (
                                <Route 
                                    key={index} 
                                    path={item.path} 
                                    exact 
                                    render={
                                        props=> addComponent(props,item)
                                        // props =>{
                                        //     if (!item.auth || token) {
                                        //         return <item.component {...props} />
                                        //     }else {
                                        //         return  <Redirect to={{pathname:'/login',state:{from:props.location}}}  />
                                        //     }
                                        // }
                                    //     (!item.auth ? (<item.component {...props} />) : (token ? <item.component {...props} /> : <Redirect to={{
                                    //     pathname: '/login',
                                    //     state: { from: props.location }
                                    //     }} />)
                                    // )
                                    } 
                                />
                        )   
                    }) 
                }
                <Route path='/*' component={Page404}></Route>
            </AnimatedSwitch>
        </>
    )
}
export default App
