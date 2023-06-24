import { db } from "./dbConnect.js"

//creating the collection inside employee-cluster db
const coll = db.collection('employees')


//write functions for operations

//POST

export const addEmployee = async (req, res) => {
    const employee = req.body;
    await coll.insertOne(employee);
    
    res.send({message: "employeed added"});
}