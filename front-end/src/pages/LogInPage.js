import {React,useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {useToken} from '../auth/useToken'

const LogInPage=()=>{

    const history=useHistory()

    const [emailValue,setEmailValue]=useState('');
    const [passwordValue,setPasswordValue]=useState('')
    const [errorMessage,setErrorMessage]=useState('')

    const [token,setToken]=useToken()

    const handleLogin=async ()=>{
        const response=await axios.post('http://localhost:8080/api/login',{
            email:emailValue,
            password:passwordValue
        })
        const {token}=response.data
        setToken(token)
        history.push('/')
        console.log(response)
    }

    return(
        <div className='content-container'>
            <h1>Log In</h1>
            {errorMessage && <div className='fail'>{errorMessage}</div>}
            <input placeholder='someone@gmail.com' onChange={e=>setEmailValue(e.target.value)}/>
            <input type='password' placeholder='password' onChange={e=>setPasswordValue(e.target.value)}/>
            <hr/>
            <button disabled={!emailValue || !passwordValue} onClick={handleLogin}>Log In</button>
            <button onClick={()=>history.push('/forgot-password')}>Forgot Password?</button>
            <button onClick={()=>history.push('/signup')}>Don't have an account? Sign up</button>
        </div>
    )
}

export default LogInPage