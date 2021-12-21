const controller = {};
const connection = require('../dbConnection/connection');
const UserModel = require('../models/user.model')

controller.index = async (req, res)=>{
    try {
        res.send('la conexion ha sido exitosa desde index.controller')
        await connection();
        const allUsers = await UserModel.find()
        console.log(allUsers)
    }catch(error){
        console.error(error);
    }
};

module.exports = controller;