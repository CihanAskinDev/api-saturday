import { MongoClient } from "mongodb";
import { mongodbURI } from "../secret.js";


//making your connection to the database
const client = new MongoClient(mongodbURI)

//connecting to a specific database
export const db = client.db("employee-cluster");