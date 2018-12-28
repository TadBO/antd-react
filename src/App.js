import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import AppRouters from "./app.routers"
import store from "./store";


class App extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    isLogin() {
        if (store.getState().login.username) {
            return true;
        } else {
            return false;
        }
    }
    render() {
        return (
            <Router>
                <Switch>
                    {
                        AppRouters.map((item, index) => {
                            return (
                                <Route exact key={index} path={item.path} render={() => (
                                    !item.auth ? (<item.component/>) : (this.isLogin() ? <item.component/> : <Redirect to="/login"/>)
                                )}/>
                            )
                        })
                    }
                </Switch>
            </Router>
        );
    }
}

export default App;
