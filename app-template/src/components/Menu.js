/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router'
import ExitButton from '../containers/app/ExitButton'

const Menu = ({menus}) => (
  <div>
    {menus.map((menuitem, i) => (
      <Link key={i} to={menuitem.linkto}>
        <FlatButton label={menuitem.label} onClick={menuitem.onClick}/>
      </Link>
    ))}
    <ExitButton/>
  </div>

)

Menu.propTypes = {
  menus: PropTypes
    .arrayOf(PropTypes.shape({label: PropTypes.string.isRequired, permition: PropTypes.string.isRequired, linkto: PropTypes.string.isRequired}).isRequired)
    .isRequired
}

export default Menu;
