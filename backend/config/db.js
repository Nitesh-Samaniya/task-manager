const mongoose = require("mongoose");

const connect = async()=> {
    return mongoose.connect(process.env.LOCAL_URL);
}

module.exports = connect;