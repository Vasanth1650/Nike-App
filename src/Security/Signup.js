import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const usenavigate = useNavigate()
    const [user, setUser] = useState({
        username: "",
        email: "",
        phonenumber: "",
        password: "",
        roleCode: "",
        roleDescription: ""
    })


    function handle(e) {
        const newdata = { ...user }
        newdata[e.target.id]=e.target.value
        setUser(newdata)
        console.log(newdata)
    }



    return (
        <div >
            <input onChange={(e)=>handle(e)} value={user.username}></input>
            <input onChange={(e)=>handle(e)} value={user.email}></input>
            <input onChange={(e)=>handle(e)} value={user.phonenumber}></input>
            <input onChange={(e)=>handle(e)} value={user.password}></input>
            <input onChange={(e)=>handle(e)} value={user.roleCode}></input>
            <input onChange={(e)=>handle(e)} value={user.roleDescription}></input>
        </div>
    )
}

export default Signup