import React,{Component, ReactType} from 'react'
import Login from '../Login/Login'
import { useHistory, Route, BrowserRouter as Router, Switch, Link, Redirect } from 'react-router-dom'
import {RouteProps} from 'react-router';
import Employe from '../Employe/Employe'
import ErrorPage from '../errorpage/ErrorPage'

function Auth() {
    const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
        // const user = JSON.parse(localStorage.getItem('user'))
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        if(!Component) return null;
        return (
            <Route
                {...rest}
                render={props => user === "admin" ?
                    <Component {...props} /> :
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: props.location }
                        }}
                    />

                }
            />

        )


    }
    return (
        <>
            <Router>
                <Switch>
                    <PrivateRoute path='/employe' exact component={Employe}/>
                    <Route path="/error/404" component={ErrorPage}/>
               
                    <Route  path="/" exact component={Login} />
                        
                    
                   </Switch> 
            </Router>

        </>
    )
}

export default Auth

