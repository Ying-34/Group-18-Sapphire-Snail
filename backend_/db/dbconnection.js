const url = 'mongodb+srv://cluster0.yxtjp.mongodb.net/test'
const dbName = 'myFirstDatabase'

let mongoose = require("mongoose");

connect();

function connect(callback){
    /**
     * Database connection function
     */
    console.log()
    return mongoose.connect(`mongodb+srv://Winona:Winona1522@cluster0.yxtjp.mongodb.net/myFirstDatabase`,{
        useNewUrlParser:true,
        useFindAndModify:false,
        useCreateIndex:true,
        useUnifiedTopology:true
    }, function (err){
        if(err){
            console.error("Failed to connect mongo");
            setTimeout(connect, 5000);
        }else{
            console.log("Connecting to DB ... Done");
        }
    });
}
module.exports ={
    mongoose
}