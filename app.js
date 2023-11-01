import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import pageRoot from "./roots/pageRoot.js";
import photoRoot from "./roots/photoRoot.js";
import userRoot from "./roots/userRoot.js";

dotenv.config();

// connection to the db;
connectDB();

const app = express();
const port = process.env.PORT;

//ejs template engine
app.set("view engine","ejs");

//static files middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//roots
app.use('/',pageRoot);
app.use('/photos',photoRoot);
app.use('/users',userRoot);

app.listen(port,()=>{
    console.log("Application running on port : %d",port);
});
