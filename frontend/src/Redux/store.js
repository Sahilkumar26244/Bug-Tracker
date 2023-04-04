import { applyMiddleware, combineReducers, createStore, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { userLoginReducer, userRegisterReducer } from './UserAuth/userAuth.reducer';


const rootReducer = combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer
});

const userInfoFromStorage = localStorage.getItem("userInfoF")
? JSON.parse(localStorage.getItem("userInfoF")) : null;

const initialState = {
    userLogin:{
        userInfo:userInfoFromStorage
    }
}

const middleware = [thunk]

export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
)
