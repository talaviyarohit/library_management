import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import authontication from "./authontication";


const rootReducer = combineReducers({
    admin: adminReducer, 
   auth: authontication
});

export default rootReducer;
