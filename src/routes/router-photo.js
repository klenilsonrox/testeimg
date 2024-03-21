import {
    Router
} from "express";
import multer from "multer";
import {
    createPhoto,
    getAllPhotos
} from "../controllers/PhotoController.js";
import { upload } from "../config/multer.js";


const router = Router()





router.get("/photos", getAllPhotos)
router.post("/photos", upload.single("file"), createPhoto)


export default router