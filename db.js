import mongoose from "mongoose";

const conn = () =>{
    mongoose.connect(process.env.DB_URI,{
        dbName:"lenslight",
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(() => {
       console.log("Connected to the DB successfully") 
    }).catch((err) => {
       console.log('DB Connection Error:%s',err);
    });
};

export default conn