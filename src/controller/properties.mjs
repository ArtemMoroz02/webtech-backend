import { get, getByName, getAll, create, update, remove  } from '../services/properties.mjs';
import { ObjectId } from 'mongodb';

const getProperty = async (id, res) => {
  try
  {
    new ObjectId(id);
  }
  catch
  {
    return res.status(400).send('Invalid id!');
  }

  const result = await get(id);
  return result;
}

const getProperties = async () => {
  const results = await getAll();
  return results;
}

const createProperty = async (body, res) => {
  const existing = await getByName(body.name);

  if(existing){
    return res.status(400).send('Property already exists!');
  }

  const property = {
    name: body.name,
    price: body.price,
    totalSurface: body.totalSurface,
    type: body.type,
    status: body.status,
    createDate: Date.now(),
    updatedDate: Date.now()
  }

  const result = await create(property);

  return result;
}

const updateProperty = async (id, body, res) => {
  try
  {
    new ObjectId(id);
  }
  catch
  {
    return res.status(400).send('Invalid id!');
  }

  const result = await update(id, body);
  return result;
}

const deleteProperty = async (id, res) => {
  try
  {
    new ObjectId(id);
  }
  catch
  {
    return res.status(400).send('Invalid id!');
  }

  const result = await remove(id);
  return result;
}

export {
  getProperty,
  getProperties,
  createProperty,
  updateProperty,
  deleteProperty
}
