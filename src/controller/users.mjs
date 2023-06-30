import bcrypt from 'bcrypt';
import { getUser as getUserByName, saveUser, getAllUsers } from '../services/users.mjs';


const getUser = async (name) => {
  const result = await getUserByName(name);
  return result;
}

const getUsers = async () => {
  const results = await getAllUsers();
  return results;
}

const createUser = async (body, res) => {
  const existingUser = await getUserByName(body.name);

  if(existingUser){
    return res.status(400).send('User already exists!');
  }

  const user = {
    name: body.name,
    email: body.email,
    passwordHash: bcrypt.hashSync(body.password, 8),
    createDate: Date.now()
  }

  const result = await saveUser(user);

  return result;
}

export {
  getUser,
  getUsers,
  createUser
}
