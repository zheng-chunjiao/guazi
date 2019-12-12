import React , {Component} from 'react';
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom"
import {adminRoutes} from "./routes"

class App extends Component{
  render(){
    return (
      <BrowserRouter>
          <Switch>
             {
               adminRoutes.map(route=>{
               return <Route key={route.pathname} path={route.pathname} render={(routerProps)=>< route.component {...routerProps}/>}/>
             })
              }
          </Switch>
      </BrowserRouter>
       
    )
  }
}

export default App;
