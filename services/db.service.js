const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL;
const ConnectDB = async () => {
    try{
        const con = await mongoose.connect(MONGO_URL, {autoIndex:true, useUnifiedTopology:true, useNewUrlParser:true})

        console.log(`Database Connection Established On :${con.connection.host}`);

    }catch(error){
        console.log(`Database Connection Error: ${error.message}`);
    }
}

ConnectDB();