const myexpress = require('express')
const routes = require('./routes/ToDoRoutes')
const userRoutes = require('./routes/UserRoutes')
// const cors = require('cors')
const mongoose = require('mongoose')

const app = myexpress()

app.use(myexpress.json())
// app.use(cors())
app.use(routes, userRoutes)

mongoose
    .connect('ADD MONGO URL', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(console.log('MongoDB Connected'))
    .catch((err)=>console.error(err))


app.listen(8000, (req, res)=>{
    console.log('Server is Running');

})
