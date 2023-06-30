import express from 'express';
import { getToken } from '../controller/auth.mjs';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { name, password } = req.body;

  const { accessToken } = await getToken(name, password);

  if(!accessToken){
    return res.status(401).send('Unauthorised')
  }

  res.status(200).json({accessToken})
});

export default router;