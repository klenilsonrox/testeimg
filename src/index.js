import express from "express"
import cors from "cors"
import { fileURLToPath } from 'url';
import path,{ dirname} from "path"
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import {
    config
} from "dotenv"
import {
    connDB
} from "./database/connDB.js"
import router from "./routes/router-photo.js"
config()

const app = express()
app.use(express.json())
app.use(cors())
app.use("/", router)
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")))

connDB()



app.listen(process.env.PORT || 3333, () => {
    console.log("servidor rodando na porta")
})