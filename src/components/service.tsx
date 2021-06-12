import * as React from 'react';
import axios from 'axios';

export default class Service extends React.Component{

    public post(url: string, data: any) {
        return axios.post(url, { data });
    }

    public get(url: string) {
        axios.get(url);
    }

}