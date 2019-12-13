import React,{Component} from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import {mainRoutes} from './routes/index'

class App extends Component{
  render(){
    return (
      <Switch>
        {
          mainRoutes.map(route=>{
            return <Route key={route.pathname} path={route.pathname} render={()=><route.component/>}/>
          })
        }
      </Switch>
    )
  }
}

export default App;
