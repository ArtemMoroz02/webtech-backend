import db from '../db/mongo.mjs';

const collection = db.collection('users');

const getUser = async (name) => {
    let result = await collection.findOne({name});
    return result;
}

const getAllUsers = async () => {
    let cursor = collection.find({});
    const results = await cursor.toArray();
    return results;
}

const saveUser = async (data) => {
    let savedResult = await collection.insertOne(data);
    return savedResult;
}

export {
    getUser,
    saveUser,
    getAllUsers
}