require('dotenv').config();
const express = require("express");
const TaskModel = require("../models/task.model");

const app = express.Router();

app.get("/", async(req, res)=> {
    let list = await TaskModel.find();
     return res.status(201).send(list);
});

app.post("/", async(req,res)=>{
    try{
        const item = new TaskModel({...req.body});
        await item.save();
        return res.status(200).send(item);
    }catch(e){
        return res.status(409).send("code down during task post",e)
    }
})


module.exports = app;