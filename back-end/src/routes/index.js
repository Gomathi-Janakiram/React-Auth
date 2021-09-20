import {SignupUser,LoginUser,updateUserInfo} from '../controllers/userController'

const Routes=(app)=>{
    app.route('/')
        .get((req,res)=>{
            res.send("Hello welcome!!!!")
        })

    // sign-up route
    app.route('/api/signup')
        .post(SignupUser)

    
    // login route
    app.route('/api/login')
        .post(LoginUser)

    // user-info route

    app.route('/api/users/:userId')
        .put(updateUserInfo)

    app.route('*')
        .get((req,res)=>{
            res.send(`No page found for ${req.originalUrl}` )
        })

}

export default Routes