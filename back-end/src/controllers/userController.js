import mongoose from 'mongoose';
import userSchema from '../models/userSchema'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const Users=mongoose.model("Users",userSchema)

// SIGN UP

export const SignupUser=async (req,res)=>{
    // destructuring user info
    const {email,password}=req.body;
    // check in db whether a user is present or not
    const isUser= await Users.findOne({email:email})
    if(isUser){
        // if present he cannot signup
        res.status(409).json({error:`User ${email} already exists`})
    }
    else{
        // else, hash the password of the user
        const passwordHash=await bcrypt.hash(password,10);

        const startingInfo={
            favouriteFood:'',
            hairColor:'',
            bio:''
        }

        
        // create a new entry
        const newUser=await new Users({
            email:email,
            passwordHash:passwordHash,
            Info:startingInfo,
            isVerified:false
        })
        // save the email and password in db
        await newUser.save((err,user)=>{
            if(err){
                console.log(newUser)
                console.log(err)
                res.json({err})
            }else{
                const {id}=newUser
                // JWT 
                // JWT token is a string created by signing the payload with a private key

                jwt.sign(
                    {
                        Id:id,
                        email,
                        Info:startingInfo,
                        isVerified:false
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn:'2d'
                    },
                    (err,token)=>{
                        if(err){
                            res.status(500).json({err})
                        }else{
                            res.status(200).json({token})
                        }
                    }
                )
            }
        })
    }
}


// LOGIN

export const LoginUser=async (req,res)=>{
    const {email,password}=req.body;
    const user=await Users.findOne({email:email})
    if(!user){
        res.status(401).json("User Not Found")
    }else{
        const {id,passwordHash,isVerified,Info}=user

        const isPasswordCorrect=await bcrypt.compare(password,passwordHash)

        if(isPasswordCorrect){
            jwt.sign(
                {
                id,
                email,
                Info,
                isVerified
                },
                process.env.JWT_SECRET,
                {expiresIn:'2d'},
                (err,token)=>{
                    if(err){
                        res.status(500).json({err})
                    }else{
                        res.status(200).json({token})
                    }
                }
            )
        }
        else{
            res.status(401).json('Password does not match')
        }
    }
}


// UPDATE USER INFO

export const updateUserInfo=(req,res)=>{
    const {authorization}=req.headers;

    const {userId}=req.params;

    const updates=({favouriteFood,hairColor,bio})=>({
         favouriteFood,hairColor,bio
    })(req.body)

    if(!authorization){
        return res.status(401).json({'No Authorization headers present'})
    }else{
        const token=authorization.split(' ')[1];
        
    }

}