import express from "express";
import cors from "cors";
import { dbconnect } from "./dbconnect.js"
import "dotenv/config";
import statusCodes, { StatusCodes } from 'http-status-codes'

import weaponRoute from "./routes/weaponRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000

const start = async () => {
    try {
        await dbconnect(process.env.MONGO_URI);
        console.log("Database Connected...");
        app.listen(PORT, () => {
            console.log("Server is running...");
        })
    }
    catch (error) {
        console.log("Error");
    }
}

start();
app.get("/", (req, res) => {
    res.send("<h1>Welcome to BookStore<h1>");
})

app.use(weaponRoute);

// app.get('*', (res,req) => {
//     res.status(statusCodes.NOT_FOUND).json({msg: "Page N/A"});
// })