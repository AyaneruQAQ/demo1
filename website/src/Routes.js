import React,{Suspense,lazy} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Modal} from 'antd'
// import App from './App'
// import Hooks from './hooks'
// import BannerDemo from './motion'

//动态引入，实现代码分隔;lazy+suspense实现组件加载中的提示内容
const Hooks = lazy(()=>slowImport(import('./hooks')))
const BannerDemo = lazy(()=>import('./motion'))
const App = lazy(()=>import('./App'))

 function slowImport(value, ms = 3000){
    return new Promise(resolve=>{
        setTimeout(()=> resolve(value),ms);
    })
}

const getUserConfirmation = (message,callback)=>{
    Modal.confirm({
        title:message,
        onCancel:()=>{
            callback(false)
        },
        onOk:()=>{
            callback(true);
        }
    })
}

 function Routes (){
    return(
        <Router getUserConfirmation={getUserConfirmation}>
            {/* fallback展示在子组件加载完成前的内容 */}
            <Suspense  fallback={<div>loading...</div>}>
                <Switch>
                    <Route path='/banner' component={BannerDemo}></Route>
                    <Route path='/app' component={App}></Route>
                    <Route path='/hooks' component={Hooks}></Route>
                    <Route path='/' component={App}></Route>
                </Switch>
            </Suspense>

        </Router>
    )
}

export default Routes