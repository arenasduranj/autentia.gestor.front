import * as React from 'react';

import { UserLogin } from '../interface/userLogin';
import { LoginService } from '../services/loginService';

class Login extends React.Component{

    loginService: LoginService;

    state = {
        email: "",
        pass: ""
    }    

    public login() {
        const user: UserLogin = {
            email: this.state.email,
            pass: this.state.pass
        }

        this.loginService.login(user)
        .then(res => {
            
        });
    }

    public render(): JSX.Element {
        return (
            <div>
                <form onSubmit={e => this.login()}>
                    <div className="form-group">
                        <input type="email"
                        placeholder="Email"
                        name="email"                            
                        value={this.state.email}
                        className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input type="password"
                        placeholder="Pass"
                        name="pass"                            
                        value={this.state.pass}
                        className="form-control"
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