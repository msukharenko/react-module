import {BASE_ACTION} from '../actions/baseActions'

 const baseAction = (state={},action)=>{
    switch (action.type) {
        case BASE_ACTION:
            return state;
        default:
            return state;
    }
}
export default baseAction;