import React from 'react'
import { Switch,Route,Redirect } from 'react-router-dom';
import Home from './home/Home'
import List from './list/List'
import Page404 from './404Page/Page404';
import '@/assets/styles/reset.css';

export default function App() {
    return (
        <div>
            <Switch>
                <Route path='/home' component={Home}></Route>
                <Route path='/list' component={List}></Route>
                <Redirect exact from='/' to='/home' ></Redirect>
                <Route path='/*' component={Page404}></Route>
            </Switch>
        </div>
    )
}
