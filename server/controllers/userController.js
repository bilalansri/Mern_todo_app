const jsonwebtoken = require('jsonwebtoken')
const UserModel = require('../Models/UserSchema')



module.exports.saveUser = async (req, res) => {

    let NewUser = new UserModel()
    let euser = await UserModel.findOne({ email: req.body.email })

    if(euser){

        res.send('Change Email')

    } else {
    
    NewUser.username = req.body.username
    NewUser.email = req.body.email
    NewUser.password = req.body.password

    let dbuser = await NewUser.save()

    res.json(dbuser)

    }
    
}

module.exports.loginUser = async (req, res) => {

    const allusers = await UserModel.findOne({
        email: req.body.email,
        password: req.body.password
    })

    res.json(allusers)

    // jsonwebtoken.sign({ id: allusers._id }, 'token secret code', { expiresIn: '10m' }, (err, codeddata) => {
    //     res.json({
    //         allusers,
    //         tokencode: codeddata
    //     })
    // })

    
}
