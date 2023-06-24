import {onRequest} from "firebase-functions/v2/https";
import logger from "firebase-functions/logger";

import express from "express"
import cors from "cors"
import { addEmployee } from "./src/employees.js";


const app = express()
app.use(cors())
app.use(express.json())


app.get("/test", (req, res) => {
    res.send("It's working.  Hello Cihan!")
})

app.post("/employee", addEmployee);



export const api = onRequest(app);






