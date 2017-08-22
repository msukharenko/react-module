import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import './AppContainer.css';
import AppHeader from '../../components/AppHeader.js';
import {MuiThemeProvider} from 'material-ui/styles';

const sidebartitle = 'discount service';

class AppContainer extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div className="App">
                        <AppHeader menus={this.props.navItems} login={this.props.login} title={sidebartitle}/>
                        <div className='Main'>{this.props.children}</div>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        navItems:  state.userDetails?state.userDetails.navItems:[],
        login:''
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
    //   onTodoClick: id => {
    //     dispatch(toggleTodo(id))
    //   }
    }
  }
AppContainer.propTypes = {
    navItems:PropTypes.array
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppContainer);