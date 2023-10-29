import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import methodOverride from "method-override";
import connectDB from "./db.js";
import pageRoot from "./roots/pageRoot.js";
import photoRoot from "./roots/photoRoot.js";

dotenv.config();

// connection to the db;
connectDB();

const app = express();
const port = process.env.PORT;

//ejs template engine
app.set("view engine","ejs");

app.use(morgan("tiny"));
app.use(methodOverride("_method"));

//static files middleware
app.use(express.static('public'));

app.use(express.json());


//roots
app.use('/',pageRoot);
app.use('/photos',photoRoot);

app.listen(port,()=>{
    console.log("Application running on port : %d",port);
});
