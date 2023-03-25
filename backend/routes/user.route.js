require('dotenv').config();
const express = require("express");
const UserModel = require("../models/user.model");
const argon2 = require("argon2");

const app = express.Router();

app.get("/", async(req, res)=> {
    let users = await UserModel.find();
     return res.status(201).send(users);
});

app.post("/signup", async (req,res)=> {
    const {name, email, password} = req.body;
    const hash = await argon2.hash(password);

    let user = await UserModel.findOne({email});
    try{
        if(user){
            return res.status(400).send("This email is already in use try with other email.");
        }

        let newUser = new UserModel({name, email, password: hash});
        await newUser.save();
        return res.status(200).send(newUser);

    }catch(e){
        return res.status(500).send("code down",e.message);
    }
})

app.post("/login", async(req,res)=> {
    const {email, password} = req.body;
    const user = await UserModel.findOne({email});
    if(await argon2.verify(user.password, password)){

        return res.status(201).send({
            message: "User Logged in successfully",
            user: user.name,
            _id: user._id
        });

    }else{
        return res.status(401).send("Invalid credentials");
    }
})

module.exports = app;