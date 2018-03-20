import React, { Component } from 'react';
import Navigator from './navigator';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import QuestionsPageContainer from './questions_page_container';
import ExamsPageContainer from './exams_page_container';
export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const examUrl = '/exams';
        const questionUrl = '/questions';
        return (
            <Router>
                <div className="row">
                    <Navigator routes={{examUrl, questionUrl}} />
                    <div className="bg-light col-lg-10">
                        <Switch>
                            <Route path={questionUrl}  component={QuestionsPageContainer}/>
                            <Route path={examUrl}  component={ExamsPageContainer}/>
                            <Route render={() => <div>社工在线答题管理系统</div>} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )

    }
}