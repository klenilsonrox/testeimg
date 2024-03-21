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

export const editPhoto = async (req, res) => {
    const {name}=req.body
 const {id}= req.params
    const {filename} =req.file

    const fotoExist = await Photo.findById(id)
 
    const photo = await Photo.findByIdAndUpdate(id,{
     name,
     src:filename
    }, {new:true})
 
    return res.status(201).json({message:"foto atualizada"})
   
 }