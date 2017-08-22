import moduletemplate,{applyrouters} from 'xv-module-template/src'

import { combineReducers } from 'redux';
import { Route } from 'react-router';

const modules = [moduletemplate];
const apply = [applyrouters];

export const importroutes = (routers)=>{
    apply.forEach((val)=>{
        val(routers);
    })
}

export const importRedusers = ()=>{
    let result = {};
    modules.forEach((el)=>{
       result[el.modulename]=(combineReducers(el.reducers))
    })
    return result;
}

export default  modules;

