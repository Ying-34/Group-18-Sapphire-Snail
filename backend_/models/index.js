const MongoDB = require('mongodb').MongoClient

const url = 'mongodb+srv://cluster0.yxtjp.mongodb.net/test'
const dbName = 'myFirstDatabase'

function connect(callback){
    /**
     * Database connection function
     */
    MongoDB.connect(url,function(err,client){
        if(err){
            console.log('err:',err);
            return false
        }
        if(callback){
            var db = client.db(dbName)
            callback(db)
            client.close()
        }
    })
}
module.exports ={
    connect
}