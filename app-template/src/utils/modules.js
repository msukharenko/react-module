import moduletemplate,{applyrouters} from 'xv-module-template/src'
import { Route } from 'react-router';

const modules = [moduletemplate];
const apply = [applyrouters];

export const importroutes = (routers)=>{
    apply.forEach((val)=>{
        val(routers);
    })

}


export default  modules;

