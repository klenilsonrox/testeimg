import Photo from "../models/Photo.js";



export const getAllPhotos = async (req, res) => {
    try {
        const photos = await Photo.find()
        return res.status(200).json(photos)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


export const createPhoto = async (req, res) => {
   const {name}=req.body

   const {filename} =req.file

   const photo = await Photo.create({
    name,
    src:filename
   })

   return res.status(201).json(photo)


  
}