const express = require('express')
const routers = express.Router()
const datacol = require('../models/Routermodels')
const bcrypt = require('bcrypt')



routers.post('/signup', async(request, response)=>{

    const saltPassword = await bcrypt.genSalt(10)
    const securePass = await bcrypt.hash(request.body.password, saltPassword)


    const newtable = new datacol({
        fullname: request.body.fullname,
        username: request.body.username,
        email: request.body.email,
        password: securePass
    })
    newtable.save()
    .then(data=>{
        response.send(data)
    })
    .catch(error=>{
        response.send(error)
    })
})
module.exports = routers