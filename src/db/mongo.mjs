import { MongoClient } from "mongodb";

const url = 'mongodb://127.0.0.1/properties_db';

const client = new MongoClient(url);

let connection;

try{
    connection = await client.connect();
} catch (e){
    console.error(e);
}

const db = connection.db('properties_db');

export default db;