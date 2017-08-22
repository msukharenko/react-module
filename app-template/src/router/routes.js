import React, {Component, PropTypes} from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {trylogin} from '../actions/userDetails'
// redux
import {connect} from 'react-redux';
// history
import createBrowserHistory from 'history/lib/createBrowserHistory';

import AppContainer from '../containers/app/AppContainer';
import Home from '../containers/home/Home';
import NotFound from '../containers/misc/NotFound';
import {importroutes} from '../utils/modules'


const history = createBrowserHistory();

class Routes extends Component {

    constructor() {
        super();
        this.state = {
            routes: []
        };
    }

    fetchMenuSystem(data) {
        const self = this;
        const currRoutesState = [];
        const routes = data === undefined
            ? this.props.navItems
            : data;

        routes.map((route) => {
            importroutes(currRoutesState);
        });
        return currRoutesState;
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(trylogin({login:"sampleLogin",password:"samplePassword"})); // TODD try login with fake login/password
    }

    render() {
        if (this.props.navItems.length==0) 
            return <div>Loading ...</div>;
        return (
            <Router history={history}>
                <Route path="/" component={AppContainer}>
                    <IndexRoute  component={Home}/>
                    {this.fetchMenuSystem()}                    
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        );
    }
}


function mapStateToProps(state) {
    const {userDetails} = state;
    if (!userDetails) {
        return { navItems: [], isFetching: false, login: ''};
    }

    return { isFetching: userDetails.isFetching, navItems: userDetails.navItems, login: userDetails.login};
}

Routes.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navItems: PropTypes.array
};

export default connect(mapStateToProps)(Routes);