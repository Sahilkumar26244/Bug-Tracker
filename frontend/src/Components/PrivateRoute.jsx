import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
    console.log(userInfo)
    const isAuth = userInfo;

    if(!isAuth)
    {
        return <Navigate to='/login' />
    }
    console.log(isAuth,"private")
  return children
}

export default PrivateRoute