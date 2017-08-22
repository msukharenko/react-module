import moduletemplate,{applyrouters} from 'xv-module-template/src'
import suppliersModule,{applyrouters as suppliersApply} from 'xv-suppliers/src'

import { combineReducers } from 'redux';
import { Route } from 'react-router';

const modules = [moduletemplate,suppliersModule];
const apply = [applyrouters,suppliersApply];

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

