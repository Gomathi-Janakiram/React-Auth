import {Route,Redirect} from 'react-router-dom'
import {useUser} from '../auth/useUser'

const PrivateRoute=(props)=>{
    const user=useUser()

    if(!user){
        return <Redirect to='/login'/>
    }

    return <Route {...props}/>
}

export default PrivateRoute