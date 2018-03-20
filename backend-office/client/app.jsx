import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import HomePageContainer from './components/home_page_container';
import ExamsPageContainer from './components/exams_page_container';
import QuestionsPageContainer from './components/questions_page_container';
import SignInPage from './components/signin_page';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const requireAuth = (nextState, replace) => {
  if(!Meteor.user()) {
    replace({
      pathname:'/signin'
    });
  }
}
const browserHistory = createBrowserHistory();
const renderRoutes = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={browserHistory}>
      <div>
        <Route exact path="/" component={HomePageContainer}/>
        <Route path='/exams' component={ExamsPageContainer}/>
        <Route path='/questions' component={QuestionsPageContainer} />
        <Route path="/signin" component={SignInPage}/>
      </div>
    </Router>
  </MuiThemeProvider>
);

Meteor.startup(() => {
  render(renderRoutes(), document.querySelector('.render-target'));
});