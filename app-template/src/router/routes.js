import React, {Component, PropTypes} from 'react';
import {Router, Route, IndexRoute} from 'react-router';

// redux
import {connect} from 'react-redux';
import {fetchNavItemsIfNeeded} from '../actions/nav-items-actions';

// history
import createBrowserHistory from 'history/lib/createBrowserHistory';

import AppContainer from '../containers/app/AppContainer';
import Home from '../containers/home/Home';
import NotFound from '../containers/misc/NotFound';
import {importroutes} from '../utils/modules'

//import MountBasePage from 'xv-module-template/src/containers/MountBasePage'

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
        dispatch(fetchNavItemsIfNeeded());
    }

    render() {
        if (!this.props.navItems) 
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

//<Route path="/module-template" component={MountBasePage}/>

function mapStateToProps(state) {
    const {navItemsPerClient} = state;
    if (!navItemsPerClient) {
        return {isFetching: false, didInvalidate: false, navItems: [], error: null, login: ''};
    }

    return {error: navItemsPerClient.error, isFetching: navItemsPerClient.isFetching, didInvalidate: navItemsPerClient.didInvalidate, navItems: navItemsPerClient.navItems, login: ''};
}

Routes.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navItems: PropTypes.array
};

export default connect(mapStateToProps)(Routes);