/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import Menu from '../components/Menu.js';
import AppBar from 'material-ui/AppBar';
import SvgIcon from 'material-ui/SvgIcon'
import PropTypes from 'prop-types';
import logoImg from '../images/logo.svg'

const Logo = ()=> (
       
        <img src={logoImg}  style={{width:57+'px'}}></img>
        )
 //<div><img src={logoImg} style={{height: 30+'%', 'width': 30+'%'}} ></img></div>

const AppHeader = ({menus,login,title}) => (
            <div>
                <AppBar
                    title={title}
                    titleStyle={{marginTop:-5+'px'}}
                    iconElementLeft={<Logo/>}
                    iconElementRight={<Menu  menus={menus}/>}
                    />
            </div>
        )
        AppHeader.propTypes = {
            menus: PropTypes.arrayOf(PropTypes.shape({
                label: PropTypes.string.isRequired,
                permition: PropTypes.string.isRequired,
                linkto: PropTypes.string.isRequired
            }).isRequired).isRequired,
            login: PropTypes.string.isRequired,
            title:PropTypes.string
        }
export default AppHeader;
