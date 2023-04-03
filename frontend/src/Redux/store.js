import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import {reducer as userAuthReducer} from './UserAuth/userAuth.reducer';



const rootReducer = combineReducers({
    userAuthReducer
});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
