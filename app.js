import express from "express";

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("INDEX SAYFASI2");
});

app.listen(port,()=>{
    console.log("Application running on port : %d",port);
});
