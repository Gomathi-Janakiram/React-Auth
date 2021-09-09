import {React,useState} from 'react'
import {useHistory} from 'react-router-dom'

const SignUpPage=()=>{

    const [emailValue,setEmailValue]=useState('');
    const [passwordValue,setPasswordValue]=useState('');
    const [confirmPasswordValue,setConfirmPasswordValue]=useState('')
    const [errorMessage,setErrorMessage]=useState('')

    const signUpClicked=()=>{
        alert('Sign up not implemented yet')
    }

    const history=useHistory()

    return(
        <div className='content-container'>
            <h1>Sign up</h1>
            {errorMessage && <div>{errorMessage}</div>}
            <input placeholder='someone@gmail.com' onChange={e=>setEmailValue(e.target.value)}/>
            <input type='password' placeholder='password' onChange={e=>setPasswordValue(e.target.value)}/>
            <input type='password' placeholder='confirm password' onChange={e=>setConfirmPasswordValue(e.target.value)}/>
            <hr/>
            <button disabled={!emailValue || !passwordValue || passwordValue!==confirmPasswordValue} onClick={signUpClicked}>Sign Up</button>
            <button onClick={()=>history.push('/login')}>Already have an account?Log In</button>
        </div>
    )
}

export default SignUpPage