const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports = {
  /**Register User Api */
  registerApi: async (req, res) => {
    try{
      const {username, email, password} = req.body;
      const salt = await bcrypt.genSalt(10);
      const new_password = await bcrypt.hash(password, salt);

      return res.send(new_password);
      const newUser = await User({
        username,
        email,
        password:new_password
      })
    }catch(error){
      return res.json({status:'error', 'code':500, 'message':'Internal Sever Error', 'response': error.message});
    }
  }
}