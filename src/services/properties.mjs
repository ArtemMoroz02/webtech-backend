import db from '../db/mongo.mjs';
import { ObjectId } from 'mongodb';

const collection = db.collection('properties');

const get = async (id) => {
    let result = await collection.findOne({ _id: new ObjectId(id)});
    return result;
}

const getByName = async (name) => {
    let result = await collection.findOne({name});
    return result;
}

const getAll = async () => {
    const results = await collection.find({}).toArray();
    
    return results;
}

const create = async (data) => {
    let savedResult = await collection.insertOne(data);
    return savedResult;
}

const update = async (id, data) => {
    let savedResult = await collection.updateOne({ _id: new ObjectId(id) }, { $set: data });
    return savedResult;
}

const remove = async (id) => {
    let savedResult = await collection.deleteOne({ _id: new ObjectId(id)});
    return savedResult;
}

export {
    get,
    getByName,
    getAll,
    create,
    update,
    remove
}