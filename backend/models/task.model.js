const {Schema, model} =  require("mongoose");

const TaskSchema = new Schema({
    userName: {type: String, required: true}, 

    userID: {type: String, required: true}, 
    
    list: {type: Array, required: true}, 
}, {
    timestamps: true,
    versionKey: false
})

const TaskModel = model ("task", TaskSchema);

module.exports = TaskModel;