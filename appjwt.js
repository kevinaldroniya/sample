const express = require('express');
const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');
const User = require('./userModel');

const app = express();

app.use(express.json());

app.post("/login",
    async(req, res, next) => {
        let {email, password} = req.body;

        let existingUser;
        try{
            existingUser = await User.findOne({email: email});
        } catch {
            const error = new Error("Error! something went wrong");
            return next(error);
        }

        if (!existingUser || existingUser.password != password) {
            const error = Error("Wrong details please check at once");
            return next(error)
        }

        let token;
        try{
            token = jwt.sign(
                {
                    userId: existingUser.id,
                    email: existingUser.email
                },
                "secretkeyappearshare",
                {expiresIn}
            )
        }
    }
)