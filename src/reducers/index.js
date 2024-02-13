import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from './currentUser'
import questionsReducer from './Questions'
import usersReducer from "./UsersReducer";
import complaintReducer from './complaintsReducer'
export default combineReducers({
    authReducer,
    currentUserReducer,
    questionsReducer,
    usersReducer, 
    complaintReducer
})