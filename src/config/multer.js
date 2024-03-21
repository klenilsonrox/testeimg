import path from "path"
import crypto from 'crypto';
import multer from 'multer';



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./tmp");
    },
    filename: function (req, file, cb) {
      cb(null, crypto.randomBytes(16).toString("hex") + path.extname(file.originalname));
    },
  });


  export const upload = multer({
    storage:storage
  })