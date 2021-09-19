import { combineReducers } from "redux";

import account from "./account";
import todo from "./todo";

const rootReducer = combineReducers({ account, todo });

export default rootReducer;
