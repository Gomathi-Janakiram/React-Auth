import {React,useState} from 'react'
import {useHistory} from 'react-router-dom'

const LogInPage=()=>{

    const history=useHistory()

    const [emailValue,setEmailValue]=useState('');
    const [passwordValue,setPasswordValue]=useState('')
    const [errorMessage,setErrorMessage]=useState('')

    const LoginClicked=()=>{
        alert('Login functionality not implemented')
    }

    return(
        <div className='content-container'>
            <h1>Log In</h1>
            {errorMessage && <div className='fail'>{errorMessage}</div>}
            <input placeholder='someone@gmail.com' onChange={e=>setEmailValue(e.target.value)}/>
            <input type='password' placeholder='password' onChange={e=>setPasswordValue(e.target.value)}/>
            <hr/>
            <button disabled={!emailValue || !passwordValue} onClick={LoginClicked}>Log In</button>
            <button onClick={()=>history.push('/forgot-password')}>Forgot Password?</button>
            <button onClick={()=>history.push('/signup')}>Don't have an account? Sign up</button>
        </div>
    )
}

export default LogInPage