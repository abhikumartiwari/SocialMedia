const express = require("express")
const app = express()
const PORT = 4000 || env.port;
app.get('/',(req,res)=>{
    res.status(200).send("hello data bhai")
})

app.get('/api/v1/instagrame',(req,res)=>{
    const instagrame ={
        id:"tiwariAbhishek",
        follow:44,
        followers:57,
        date: Date.now()
    }

    res.status(200).json(instagrame)
})

app.use('/api/v1/facebook', (req,res)=>{
    const facebook ={
        id:"tiwariAbhishek",
        follow:44,
        followers:57,
        date: Date.now()
    }
    res.status(200).json(facebook)
})

app.use('/api/v1/linkedin', (req,res)=>{
    const linkedIn ={
        id:"linkedInAbhishek",
        follow:70,
        followers:50,
        date: Date.now()
    }
    res.status(200).json(linkedIn)
})

app.use('/api/v1/:token',(req,res)=>{
    res.status(200).json({token: req.params.token})
})
app.listen(PORT,()=>{
    console.log("App is running at",PORT);
})