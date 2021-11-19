import React from 'react'
import LoginComp from "../components/LoginComp/Login"

const Login = ({ history,location }) => {
    const redirect = location.search ? location.search.split("=")[1] : "/"
   
    return (
        <>
           <LoginComp history={history} redirect={redirect}/>
        </>
    )
}

export default Login
