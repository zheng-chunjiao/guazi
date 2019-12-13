import React,{Component} from 'react'
import {Route,Redirect,Switch,BrowserRouter} from 'react-router-dom'
import {mainRoutes} from './routes/index'

class App extends Component{
  render(){
    return (
      <BrowserRouter>
      <Switch>
        {
          mainRoutes.map(route=>{
            console.log(route)
            return <Route key={route.pathname} path={route.pathname} component={route.component}/>
          })
        }
        <Redirect to='/index' from='/' exact/>
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
