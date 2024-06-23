import './Login.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { login, signup } from '../../firebased' 

 const Login = () => {

   const [signState, setSignState] = useState("Sign In")
   const [name, setName] = useState("");
   const [email, setEmai] = useState("");
   const [password, setPassword] = useState("")

   const user_auth = async (event) =>{
       event.preventDefault();
       if(signState==="Sign In"){
         await login(email, password);
       }else {
        await signup(name, email, password);
       }
   }

  return (
    <div className='login'>
      <img src={logo} alt='' className='login-logo'/>
       <div className='login-form'>
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up" ? 
          <input value={name} onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='Your Name'/> : <></>}
          
          <input value={email} onChange={(e)=>{setEmai(e.target.value)}} type='email' placeholder='Your Email'/>
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='Your Password'/>
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className='form-help'>
           <div className='remember'>
           <input type='checkbox'/>
            <label htmlFor=''>Remember Me</label>
          </div>
          <p>Need Help?</p>
           </div>
        </form>
        <div className='form-switch'>
          {signState==="Sign In" 
          ? <p>New To Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p> 
          : <p>Already have account?<span onClick={()=>{setSignState("Sign In")}}>Sign in Now</span></p>
          }   
        </div>
       </div>
    </div>
  )
}
export default Login
