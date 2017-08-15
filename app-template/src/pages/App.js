import React, { Component } from 'react';
import AppHeader from '../components/AppHeader.js';
import logo from '../images/logo.svg';
import {MuiThemeProvider} from 'material-ui/styles';
import './App.css';
import { push } from 'react-router-redux'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menus: [{
                    label: 'testLabel',
                    permition: 'PERM',
                    onClick: () => {
                        window.location.href='/about';
                    }
                }],
            login:'login'
        };

    }

    render() {
        return (
                <MuiThemeProvider>
                    <div className="App">
                        <AppHeader menus={this.state.menus} login="{this.state.login}"/>
                        <p className="App-intro">
                            To get started, edit <code>src/App.js</code> and save to reload.
                        </p>
                    </div>
                </MuiThemeProvider>
                );
    }
}

export default App;
