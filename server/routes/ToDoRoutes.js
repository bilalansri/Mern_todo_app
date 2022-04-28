const {Router} = require('express')
const {getToDo, saveToDo, deleteToDo, updateToDo} = require('../controllers/ToDoController')

const router = Router()


router.post('/get-todo', getToDo)
router.post('/save-todo', saveToDo)
router.post('/delete-todo', deleteToDo)
router.put('/update-todo', updateToDo)

module.exports = router