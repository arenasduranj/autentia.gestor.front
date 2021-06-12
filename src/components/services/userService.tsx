import * as React from 'react';

import { User } from "../interface/user";
import Service from "../service";

export class UserService extends React.Component {

    service: Service;

    public createUser(user: User) {
        this.service.post("http://localhost:8080/user/", { user });
    }

}