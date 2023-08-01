const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const dotenv = require('dotenv');
// const cors = require('cors');
const cookieParser = require('cookie-parser');
dotenv.config({ Path: "../.env" });
// app.use(cors());
app.use(express.static('../moviefrontend/build'));
app.use(cookieParser());
// Let Our project understand JSON middleware USED
app.use(express.json());

// DB connection is ESTABLISHED
require('../src/db/conn');

/// Router Middleware USED
app.use(require('./router/router'));

app.listen(PORT, () => {
    console.log(`listening to port number ${PORT}`);
});



/**
 * 
 * 
 * git remote add origin git@github.com:SameepAgarwal/hotstarclone.git
git branch -M main
git push -u origin main
 */