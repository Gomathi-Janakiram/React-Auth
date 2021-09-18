import mongoose from 'mongoose';
import userSchema from '../models/userSchema'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const Users=mongoose.model("Users",userSchema)

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
            password:passwordHash,
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
                console.log(newUser)
                res.status(200).json({success:`${email} Registered successfully`})
            }
        })

        const {id}=newUser 
        console.log('newUser',newUser)
        console.log('id',id)

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
                    res.send(500).json({err})
                }else{
                    res.status(200).json({token})
                }
            }
        )

    }
}