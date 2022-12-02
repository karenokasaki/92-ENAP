import express from "express"
import * as dotenv from "dotenv"
import connect from "./config/db.config.js"

dotenv.config()

//conectar com o banco de dados
connect()

const app = express()
app.use(express.json())





app.listen(process.env.PORT, () => {
    console.log(`Server up and running on port: http://localhost:${process.env.PORT}`)
})