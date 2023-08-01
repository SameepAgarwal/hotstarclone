const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');
const cookieParser = require('cookie-parser');

express().use(cookieParser());

const User = require('../model/auth');
router.post('/getsignin', async (req, res) => {
    try {
        const { name, email, phone, password, cpassword } = req.body;
        if (!name || !email || !phone || !password || !cpassword) {
            res.status(400).json("Fill Data Correctly");
        }
        if (password != cpassword) {
            res.status(404).json("Password Don't Match");
        }
        const user = new User({ name, email, phone, password, cpassword });
        await user.save();
        res.json({ message: 'Add To DB' });
    } catch (e) {
        res.status(400).json(e);
    }
});

router.post('/getlogin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json("Fill Data Correctly");
    }
    try {
        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatchFound = await bcrypt.compare(password, userLogin.password);

            if (!isMatchFound) {
                res.status(400).json({ error: "Invalid Credentials" });
            } else {

                const token = await userLogin.generateAuthToken();
                console.log(token);
                res.cookie('jwtoken', token, {
                    expires: new Date(Date.now() + 25982000000),
                    httpOnly: true,
                });
                // HERE is user found RIGHT we will generate a token for user
                res.json(userLogin);
            }
        }
    } catch (e) {
        res.status(400).json({ error: "Not Able to Sign You In" });
    }
});

router.get('/getlogindata', authenticate, (req, res) => {
    res.json(req.ourUser);
});
router.get('/logout', authenticate, (req, res) => {
    res.clearCookie('jwtoken').status(200).json('User Logged Out');
});

router.get('/userdb', async (req, res) => {
    const dataBase = await User.find();
    res.json(dataBase);
});

// router.get('/*', (req, res) => {
//     res.redirect('/');
// });
module.exports = router;