import express from 'express';
import { Weapon } from '../weaponModels.js';
import statusCodes, { StatusCodes } from 'http-status-codes'

const weaponRoute = express.Router();



weaponRoute.get("/weapon", async (req, res) => {
    try {
        const weapon = await Weapon.find();
        if (!weapon)
            return res.json({ msg: "weapon not found" });
        res.status(StatusCodes.OK).json({ count: weapon.length, data: weapon });
        // res.json("working");
    }
    catch (error) {
        console.log(error);
    }
})
// tested
// import { StatusCodes } from 'http-status-codes';

weaponRoute.post("/weapon", async (req, res) => {
    try {
        const { name, manufacturingdate, qty, lastupdate, issuedate,type,features } = req.body;
        
        console.log(req.body);
        if (!lastupdate || !name || !manufacturingdate || !qty || !issuedate || !type || !features) {
            return res
                .status(StatusCodes.BAD_REQUEST)
                .json({ msg: "Please provide all fields dfdfsd" });
        }
        await Weapon.create(req.body);
        res.status(StatusCodes.CREATED).json({ msg: "Weapon Added", data: req.body });
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Internal Server Error" });
    }
})


//tested
weaponRoute.get("/weapon/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const weapon = await Weapon.findById(id);
        if (!weapon) {
            res
                .status(statusCodes.NOT_FOUND)
                .json({ msg: `Weapon with ${id} not found` });
        }
        res.status(statusCodes.OK).json({ msg: "weapon found", weapon });
    }
    catch (error) {
        res
            .status(StatusCodes.NOT_FOUND)
            .json({ msg: `weapon with ${id} not found` });
    }
})


//tested
weaponRoute.delete("/weapon/:id", async(req, res) => {

    const { id } = req.params;
    try {
        const book = await Weapon.findByIdAndDelete(id);
        if (!book) {
            res
                .status(statusCodes.NOT_FOUND)
                .json({ msg: `Weapon with ${id} not found` });
        }
    }
    catch (error) {
        res
            .status(StatusCodes.NOT_FOUND)
            .json({ msg: `Book with ${id} not found` });
    }
    res.send("Delete weapon");
})

// tested
weaponRoute.put("/weapon/:id", async(req, res) => {
    const { id } = req.params;
    const { name, manufacturingdate, qty,lastupdate } = req.body;
    try {
        if (!lastupdate || !name || !manufacturingdate || !qty) {
            return res
                .status(statusCodes.NOT_FOUND)
                .json({ msg: "Please Provide All Data"});
        }
        const result = await Weapon.findByIdAndUpdate(id, req.body);
        if(!result){
            return res 
                    .status(statusCodes.BAD_REQUEST)
                    .json({msg: "weapon not found"});
        }
        return res.status(statusCodes.OK).json({msg: "weapon update", result});
    }
    catch (error) {
        res
            .status(StatusCodes.BAD_REQUEST)
            .json({ msg: `Weapon not found` });
    }
})


export default weaponRoute