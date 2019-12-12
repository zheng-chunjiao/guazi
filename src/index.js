import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"
import './index.css';
import App from './App';
import {mainRoutes} from "./routes"

ReactDOM.render( (
    <Router>
      <Switch>
      <Route path="/admin" render={()=><App/>}/>
      {
         mainRoutes.map(route=>{
           return <Route key={route.pathname} path={route.pathname} component={route.component}/>
         })
      }
      <Redirect to="/admin" from="/" exact/>
      </Switch>
    </Router>
 ),document.getElementById('root'));

