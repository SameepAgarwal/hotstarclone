const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 0,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email Id");
            }
        }
    },
    phone: {
        type: Number,
        required: [true, "Number is Required"],
        unique: [true, "Phone Number Already Registered"],
        min: [10, 'Enter All Digits of Number'],
    },
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true,
    },
    tokens: [
        {
            token: {
                type: String
            }
        }
    ]
});


userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        console.log("password is hashed :");
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});

userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (e) {
        console.log(e);
    }
};

const User = mongoose.model('USER', userSchema);
module.exports = User;