import {message} from 'antd'
const authReducer = (state={data:null},action)=>{
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('Profile',JSON.stringify({...action?.data}))
            message.success("Login Sucessfull")
            return {...state,data:action?.data};
        case "LOGOUT":
            message.success("Logout sucessfull")
            localStorage.clear();
            
            return {...state , data :null};
        default:
            return state;
    }
}
export default authReducer;