import {
    Router
} from "express";
import multer from "multer";
import {
    createPhoto,
    editPhoto,
    getAllPhotos
} from "../controllers/PhotoController.js";
import { upload } from "../config/multer.js";


const router = Router()





router.get("/photos", getAllPhotos)
router.post("/photos", upload.single("file"), createPhoto)
router.put("/photos/:id", upload.single("file") , editPhoto)


export default router