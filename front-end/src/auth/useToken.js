import {React,useState} from 'react'


// hook to set the jwt we get from server in the localstorage
export const useToken=()=>{
    const [token,setTokenInternal]=useState(()=>{
        return localStorage.getItem('token')
    })

    const setToken=(newToken)=>{
        localStorage.setItem('token',newToken)
        setTokenInternal(newToken)
    }

    return [token,setToken]
}