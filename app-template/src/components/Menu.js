/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import React from 'react';

const Menu = ({menus})=>(
        <div>
        {menus.map(menuitem=> (
                 <FlatButton label={menuitem.label} onClick={menuitem.onClick}/>
            ))}
    </div>
        
)
        
    
Menu.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    permition: PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired
  }).isRequired).isRequired
}

export default Menu;


