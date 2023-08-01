var jwt = require('jsonwebtoken');
const User = require("../model/auth");

const authenticate = async function (req, res, next) {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const ourUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

        if (!ourUser) {
            throw new Error('User Not Found');
        }

        req.token = token;
        req.ourUser = ourUser;
        req.userID = ourUser._id;
        next();
    } catch (e) {
        res.status(401).json({ error: "Unauthorized! OR No Token Generated" });
    }
};
module.exports = authenticate;