import {React,useState,useEffect} from 'react'
import useToken from './useToken'


// hook  to get the payload from the token and parse it
export const useUser=()=>{
    const [token]=useToken();

    const getPayloadFromToken=(token)=>{
        const encodedPayload=token.split('.')[1];
        return JSON.parse(atob(encodedPayload))
    }
    const [user,setUser]=useState(()=>{
        if(token){
            return getPayloadFromToken(token)
        }else{
            return null
        }
    })

    useEffect(()=>{
        if(token){
            setUser(getPayloadFromToken(token))
        }else{
            setUser(null)
        }
    },[token])

    return user
}