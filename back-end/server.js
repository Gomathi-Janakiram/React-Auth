import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import Routes  from './src/routes/index';

const PORT = process.env.PORT || 8080;

const app = express();

// ************************ Mongodb Connection *******************

mongoose.connect("mongodb+srv://username:tZ5oK128XBbJXH6q@cluster0.4c39f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useUnifiedTopology:true,
    useNewUrlParser:true
},(err)=>{
    if(err){
        console.log("Error connecting to DB :(")
    }else{
        console.log("Connected to DB :)")
    }
})



// This allows us to access the body of POST/PUT
// requests in our route handlers (as req.body)
app.use(express.json());


// cors

app.use(cors())

// Add all the routes to our Express server
// exported from routes/index.js

Routes(app)


// ***************Starting the server ****************

app.listen(PORT,()=>{
    console.log(`Server listening to ${PORT}`)
})
