const mongoose = require('mongoose')

const dbConnection = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_CNN)

        console.log('DB online');
    }catch(err){
        console.log(err);
    }
}

module.exports ={
    dbConnection
}