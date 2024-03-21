import mongoose from "mongoose"
import {config} from "dotenv"


config()

const mongo_URL=`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@images.ao8opn6.mongodb.net/`


export const connDB= async ()=>{
    await mongoose.connect(mongo_URL)
    console.log("conectado ao mongoDB")
}