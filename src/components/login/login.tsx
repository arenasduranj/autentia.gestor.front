import * as React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { UserLogin } from '../interface/userLogin';
import { LoginService } from '../services/loginService';

function Route(path: string) {
    const history = useHistory();
    history.push(path);
}

export default class Login extends React.Component{

    loginService: LoginService;   
    
    state = {
        email: "",
        pass: ""
    }
    

    public login(event: any) {        
        const user: UserLogin = {
            email: this.state.email,
            pass: this.state.pass
        }
        
        axios.post("localhost:8080/user/login/", { user })
        .then(res => {
            if(res.data) {
                //Route("/");
            } 
        })

    }

    changeEmail(email: string) {
        this.state.email = email;
    }

    changePass(pass: string) {
        this.state.pass = pass;
    }

    public render(): JSX.Element {
        return (
            <div>
                <form onSubmit={(event) => this.login(event)}>
                    <div className="form-group">
                        <input type="email"
                        placeholder="Email"
                        name="email"                            
                        className="form-control"
                        onChange={e => this.changeEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="password"
                        placeholder="Pass"
                        name="pass"                            
                        className="form-control"
                        onChange={e => this.changePass(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                        Save
                    </button>
                </form>
            </div>
        )
    }
}