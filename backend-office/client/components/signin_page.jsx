import React, { Component } from 'react';
import {loginUser, createAdmin} from '../../import/service/user_service';
import {withRouter, Redirect} from 'react-router-dom';


export default class SignInPage extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        createAdmin({username: 'admin', password:'admin'}, () => {
            this.setState({
                username: null,
                password: null
            });
        })
    }
    onUsernameChange = (e) => {
        this.setState({username: e.target.value});
    }
    onPasswordChange = (e) => {
        this.setState({password: e.target.value});
    }
    login = (history) => {
        const {username, password} = this.state;
        loginUser({username, password}, function(error, school) {
            if(error) {
                alert('wrong login');
            } else {
                //TODO use react-router to redirect
                history.push('/');
            }
        })
    }
    render() {
        const SubmitButton = withRouter(({history}) => (
            <button className="btn btn-primary mt-2 float-right" onClick={(e) => {
                e.preventDefault();
                this.login(history);
            }}>登陆</button>
        ));
        return (
            <div className="mt-5">
                <h1 className="mt-2 text-center">社工在线答题管理系统</h1>
                <div className="form-group d-flex flex-row justify-content-center row-hl">
                    <form>
                        <input type="text" onChange={this.onUsernameChange} className="form-control mt-2" placeholder="用户名" />
                        <input type="password" onChange={this.onPasswordChange} className="form-control mt-2" placeholder="密码" />
                        <SubmitButton />
                    </form>
                </div>
            </div>
        )

    }
}