import { Meteor } from 'meteor/meteor'; 
import { withTracker } from 'meteor/react-meteor-data';
import HomePage from './home_page';

const HomePageContainer = withTracker(({}) => {
    return {'user': 'admin'}
})(HomePage);

export default HomePageContainer;