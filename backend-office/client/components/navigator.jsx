import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

export default class Navigator extends Component {
    signOut = (history) => {
        Meteor.logout(function() {
			console.log('Logged out');
			history.push('/signin');
		});
    }
    render() {
        const SignOutButton = withRouter(({history}) => (
            <a onClick={() => this.signOut(history)}>退出</a>
        ));
        const {examUrl, questionUrl} = this.props.routes;

        return (
            <div className="bg-dark col-lg-2" style={{'height':'100vh'}} >
                <h2 className="text-white">社工在线答题管理系统</h2><SignOutButton />
                <nav className="navbar navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link" to={examUrl}>试卷</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={questionUrl}>问题</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}