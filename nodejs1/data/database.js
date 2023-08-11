import mongoose from "mongoose";
export const dbconnect=()=>{ 
    mongoose.connect(process.env.MONGO_URI, {
    dbName: "backendapi",

}).then((c) =>
    console.log(`database connected with host ${c.connection.host}`)).catch((e)=> console.log(e));
};