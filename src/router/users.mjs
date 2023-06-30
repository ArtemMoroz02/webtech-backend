import express from 'express';
import { getUser, getUsers, createUser } from '../controller/users.mjs';
import { authenticate } from '../middleware/authenticate.mjs';

const router = express.Router();

router.get('/:name', authenticate, async (req, res) => {
    const { name } = req.params;
    const result = await getUser(name);
    res.status(200).json(result);
})

router.get('/', async (req, res) => {
    const results = await getUsers();
    res.status(200).json(results);
});

router.post('/', async (req, res) => {
    const result = await createUser(req.body, res);
    if (!res.headersSent) res.status(200).json(result);
});

export default router;