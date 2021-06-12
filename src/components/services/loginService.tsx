import * as React from 'react';

import { UserLogin } from "../interface/userLogin";
import Service from "../service";

export class LoginService extends React.Component {

    service: Service;

    public login(user: UserLogin) {
        return this.service.post("http://localhost:8080/user/login/", { user });
    }

}