import React from 'react'
import RegisterComp from "../components/RegisterComp/Register"

const Register = ({history,location}) => {
    const redirect = location.search ? location.search.split("=")[1] : "/"
    return (
        <>
       <RegisterComp history={history} redirect={redirect}/>
        </>
    )
}

export default Register
