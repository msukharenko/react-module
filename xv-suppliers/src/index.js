import MountBasePage from './containers/MountBasePage'
import React from 'react'
import baseAction from './reducers/baseActions'
import ReactDOM from 'react-dom';
import {Route} from 'react-router';

const config = {
    modulename: 'suppliers',
    menulabel: 'Поставщики',
    permition: 'NONE',
    routes: [
        {
            location: '/',
            component: MountBasePage,
            isStart: true
        }
    ],
    reducers: {
        baseAction
    }
}
export default config;


export const applyrouters = (router) => {
   
    config
        .routes
        .map((curRoute, idx) => {
            const props = {
                key: idx,
                path: '/'+config.modulename+(curRoute.location!='/'?(curRoute.location):''),
                component: curRoute.component
            };
            router.push(<Route { ...props }/>);
        })
    
}
