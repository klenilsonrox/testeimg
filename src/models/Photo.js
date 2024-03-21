import { Schema, model } from "mongoose";



const PhotoSchema = new Schema({
    name:{
        type:String
    },
    src:{
        type:String
    }
})

const Photo = model("Photo", PhotoSchema)

export default Photo