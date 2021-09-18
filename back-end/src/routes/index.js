import {SignupUser} from '../controllers/userController'

const Routes=(app)=>{
    app.route('/')
        .get((req,res)=>{
            res.send("Hello welcome!!!!")
        })

    // sign-up route
    app.route('/api/signup')
        .post(SignupUser)

    app.route('*')
        .get((req,res)=>{
            res.send(`No page found for ${req.originalUrl}` )
        })

}

export default Routes