require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const connect = require("./config/db");
const PORT = process.env.PORT || 8080;

const userRouter = require("./routes/user.route");
const taskRouter = require("./routes/task.route");

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/task", taskRouter);

app.get("/", (req,res)=> {
    res.send("Task Manager")
})

app.listen(PORT, async ()=> {
    await connect();
    console.log(`listening on http://localhost:${PORT}`)
})