import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";

dotenv.config();

// connection to the db;
conn();

const app = express();
const port = process.env.PORT;

//ejs template engine
app.set("view engine","ejs");

//static files middleware
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render("index");
});

app.get('/about',(req,res)=>{
    res.render("about");
});

app.get('/services',(req,res)=>{
    res.render("services");
});

app.get('/gallery',(req,res)=>{
    res.render("gallery");
});

app.get('/projects',(req,res)=>{
    res.render("projects");
});

app.get('/blog',(req,res)=>{
    res.render("blog");
});

app.get('/contact',(req,res)=>{
    res.render("contact");
});

app.listen(port,()=>{
    console.log("Application running on port : %d",port);
});
