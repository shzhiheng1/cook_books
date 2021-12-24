import React,{Component} from 'react'
import {Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './home/Home'
import List from './list/List'
import Page404 from './404Page/Page404';
import '@/assets/styles/reset.css';
import AnimatedSwitch from '@/components/animated/AnimatedSwitch'

@connect(
    state=>({
        animatedType:state.animatedReducer.animatedType
    })
)
class App extends Component {
    render(){
        return (
            <div>
                {/* <Switch> */}
                <AnimatedSwitch type={this.props.animatedType}>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/list' component={List}></Route>
                    <Redirect exact from='/' to='/home' ></Redirect>
                    <Route path='/*' component={Page404}></Route>
                </AnimatedSwitch>
                {/* </Switch> */}
            </div>
        )
    }
    
}

export default App