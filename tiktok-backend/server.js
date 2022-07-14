import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import data from "./data.js";
import Videos from './dbModel.js'

// App config
const app = express();
const PORT = process.env.PORT || 9000;

// Middlewares
app.use(express.json());
app.use(cors());

// DB Config
const connectionUrl = "mongodb+srv://tiktok:7NXAg8paTeskhahL@cluster0.eqvasmn.mongodb.net/tiktok?retryWrites=true&w=majority";

mongoose.connect(connectionUrl,()=>{
    console.log('mongoDB Connected');
})

// API Endpoints
app.get('/',(req,res)=>{
    res.status(200).send("Hello")
});

app.get('/v1/posts',(req,res)=>{
    res.status(200).send(data);
});

app.get('/v2/posts',(req,res)=>{
    Videos.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }else {
            res.status(200).send(data);
        }
    })
})

app.post('/v2/posts',(req,res)=>{
    const dbVideo = req.body;
    Videos.create(dbVideo,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    });

})

// Listen
app.listen(PORT,()=>{
    console.log(`Server Started on PORT ${PORT}`);
})