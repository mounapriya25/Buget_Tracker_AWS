import React from 'react'
import './lauth.css'
import { useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//const backendUrl = import.meta.env.VITE_BACKEND_URL;
const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:8000";
console.log("Backend URL:", backendUrl); 
function Login() {
    const [form,setForm]=useState({
        email:"",
        password:""
    });

    const nav = useNavigate()
     const [resp,setResp]=useState("")

    async function loginform(event){
        event.preventDefault();
        console.log(form.email,form.password)
        try{
        const res=await axios.post(`${backendUrl}/loginform`,form)
        if(res.data.message!=="success"){
            setResp(res.data.message)   // "User not found" / "Invalid Password"
            return
        }
        if(res.data.message=="success"){
            const rp=await axios.post(`${backendUrl}/home`,{},{headers:{Authorization:`Bearer ${res.data.token}`}}) 
            console.log(rp)
            if(rp.data.message=="successfully login"){
                localStorage.setItem("userEmail",rp.data.ud.email)
                const u=localStorage.getItem("userEmail")
                console.log(u);
                nav("/rd")
                setForm({
                    email:"",
                    password:""
                })
            }
        }
        }catch(err){
            console.log(err)
            setResp("Cannot reach the server. Is the backend running on "+backendUrl+" ?")
        }

    }
    
    function sform(event){
        event.preventDefault();
        setForm({...form,[event.target.name]:event.target.value});
    }
  return (
    
        <div className="login" style={{height:"400px"}}>
        <h2>Login </h2>
          <form onSubmit={loginform} className='lgfrm'>
                    <label  >Email</label><br/>
                    <input type="Email" id="email" name="email" placeholder=" Enter email address" onChange={sform}/><br/>
                
                    <label ><span>Password</span>
                     {/*   <span style={{color: "rgb(34, 139, 34)",float: "right", fontSize : "small", marginRight: "60px"}}>Forgot Password?</span>*/}
                    </label><br/>
                    <input type="password" id="passwrd" name="password" placeholder="Enter your password" required onChange={sform}/><br/>
                    <button type="submit" className="login-buttn">Login</button>
                    <p style={{color:"red"}}>{resp}</p>
                </form>  
                    
                    <p className="switch-theme">Don't have an account? <a href="/signin" style={{color:"blue"}}>Sign up</a></p>



                    </div> 
    
  )
}
export default Login