import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App.js';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import { routerReducer,  } from 'react-router-redux'
//import { Route} from 'react-router'
import { Router, Route, browserHistory } from 'react-router';
import {createStore, combineReducers} from 'redux'
import rootReducer from './reducers'


//import thunk from 'redux-thunk'



// Build the middleware for intercepting and dispatching navigation actions


const store = createStore(combineReducers({rootReducer,  router: routerReducer})

//,applyMiddleware(thunk)
)

//const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route exact path="/" component={App}></Route>
            <Route path="/about" component={App}></Route>
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
