import * as types from './userAuth.types';
import axios from 'axios';


export const login = (email,password) => async(dispatch) => {
    try {
        dispatch({type:types.USER_LOGIN_REQUEST});
        const {data} = await axios.post("http://localhost:8080/users/login",
        {
            email,
            password
        });
        dispatch({type:types.USER_LOGIN_SUCCESS,payload:data});
        localStorage.setItem("userInfoF",JSON.stringify(data));

    } catch (error) {
        dispatch({type:types.USER_LOGIN_FAIL,
        payload:error.response && error.response.data.message ? error.response.data.message : error.message})
    }
};

export const logout = () => async(dispatch) => {
    localStorage.removeItem("userInfoF");
    dispatch({type:types.USER_LOGOUT})
}

export const register = (name,email,password) => async(dispatch) => {
    try {
        dispatch({type:types.USER_REGISTER_REQUEST});
        const {data} = await axios.post("http://localhost:8080/users",
        {
            name,
            email,
            password
        });
        dispatch({type:types.USER_REGISTER_SUCCESS,payload:data});
        dispatch({type:types.USER_LOGIN_SUCCESS,payload:data});
        localStorage.setItem("userInfoF",JSON.stringify(data));
        

    } catch (error) {
        dispatch({type:types.USER_REGISTER_FAIL,
        payload:error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

