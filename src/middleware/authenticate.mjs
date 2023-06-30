import jwt from "jsonwebtoken";
import config from '../config/config.mjs';

const extractToken = (req) => {
    const authHeader = req.headers['authorization'];

    if(authHeader){

    }

    const pattern = new RegExp('^bearer', 'i');
    const bearer = pattern.test(authHeader);
    return bearer ? authHeader : authHeader;
}

const authenticate = (req, res, next) => {
    const token = extractToken(req);
    try {
        jwt.verify(token, config.JWT_SECRET);
        next();
    } catch (e) {
        console.log(e)
        res.status(401).send('Not authorised!');
    }
}

export {
    authenticate
}