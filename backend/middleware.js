const { JWT_SECRET } = require('./config');
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) { // Add a space after Bearer
        return res.status(403).json({});
    }

    // Getting token from bearer token
    const token = authHeader.split(' ')[1]; // Split on a space to get the token

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        return res.status(403).json({});
    }
};

module.exports = {
    authMiddleware
};
