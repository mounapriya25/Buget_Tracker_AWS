import React from 'react'
import './lauth.css'
import {useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
//const backendUrl = import.meta.env.VITE_BACKEND_URL;
const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:8000";

function Sigin() {
    const [form,setForm]=useState({
        username:"",
        email:"",
        password:""
    })
    const [rp,setRp]=useState("")
    const nav=useNavigate()
    async function signfrm(e){ 
        e.preventDefault()
        console.log(form)
       // const resp=await axios.post("http://localhost:8000/siginform",form)
        let resp
        try{
            resp=await axios.post(`${backendUrl}/siginform`,form)
        }catch(err){
            console.log(err)
            setRp("Cannot reach the server. Is the backend running on "+backendUrl+" ?")
            return
        }
        setRp(resp.data.message)
        if(resp.data.message=="Sucessfully sigin"){
            localStorage.setItem("userEmail",resp.data.us.email)
            const u=localStorage.getItem("userEmail")
            console.log(u);
            nav("/rd")
            setForm({
                username:"",
                email:"",
                password:""
            })
        }
        
    }
    function sfrm(e){
        e.preventDefault()
       setForm({...form,[e.target.name]:e.target.value})

    }       
    
  return (
    <div className="login" style={{height:"460px"}}>
    <h2>Sign In </h2>
    
    
        <form onSubmit={signfrm} className='lgfrm'>
            <label className='label' >User name</label><br/>
            <input type="text" id="name" name="username" placeholder=" Enter your name" required  onChange={sfrm}/><br/>
        
                <label className='label'>Email</label><br/>
                <input type="Email" id="email" name="email" placeholder=" Enter email address" required onChange={sfrm}/><br/>
            
                <label className='label' >Password</label><br/>
                <input type="password" id="passwrd" name="password" placeholder="Enter your password" required onChange={sfrm}/><br/>
                <button type="submit" className="login-buttn">Sign in</button>
                <p style={{color:"red"}}>{rp}</p>
                <p className="switch-theme" style={{paddingLeft:"0px"}}>Already registered ? <a href="/login" style={{color:"blue"}}> Login</a></p>
                    
                </form>


</div> 
  )
}

export default Sigin