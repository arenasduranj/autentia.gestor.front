import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Components
import Login from './login/login';
import Main from './main/main';


function App(){
    return (
        <>
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="/">AUTENTIA</a>
                </nav>

                <div className="container p-4">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <Login />
                        </div>
                    </div>
                </div>
            </div>
            <Router>
                
            </Router>
        </>
    )
}

export default App;
