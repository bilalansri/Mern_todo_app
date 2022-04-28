const ToDoModel = require('../Models/ToDoSchema')


module.exports.getToDo = async (req, res) => {

    const {  logid } = req.body

    const ToDo = await ToDoModel.find({ userId: logid })

    res.send(ToDo)
}

module.exports.saveToDo = async (req, res) => {
    const { text, logid } = req.body

    const TOdo = new ToDoModel({
        text: text,
        userId: logid,
    });

    TOdo.save();

    res.send("Added SuccessFully")
}


module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body

    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send('Deleted SuccessFully'))
        .catch((err) => console.log(err.message))

}


module.exports.updateToDo = async (req, res) => {
    const { _id, text } = req.body

    ToDoModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.set(201).send('Updated SuccessFully'))
        .catch((err) => console.log(err.message))

}

