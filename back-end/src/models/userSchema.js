import mongoose from 'mongoose'

const Schema=mongoose.Schema;

const userSchema=new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Info:{
        favouriteFood:{
            type:String
        },
        hairColor:{
            type:String
        },
        bio:{
            type:String
        }
    },
    isVerified:{
        type:Boolean
    }
})

export default userSchema