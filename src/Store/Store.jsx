import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { AuthReducer } from "../Reducers/AuthReducer";
import { NewPostReducer } from "../Reducers/NewPostReducer";


const reducer = combineReducers({
  auth: AuthReducer,
  newpost: NewPostReducer
});

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);