const loginSchema = require("../models/login");

async function register(username, password){
    let dbLogin;
    var user = {
        username,
        password
    }
    try{
        dbLogin = new loginSchema(user);
        if(username == ""){
            return { success : false, errorMessage : " Username should not be empty " }
        }else if (password.length <= 6){
            return { success : false, errorMessage : " Password length should more than 6 digits " }
        }else{
            const findLogin = await loginSchema.findOne({ username : username });
            if(findLogin){
                return { success : false, errorMessage : " Username exists, please try another one " }
            }else{
                await dbLogin.save();
                return { success : true, username : username };
            }
        }
        
    } catch(err){
        console.log(err);
        return { success: false }
    }
}

async function login(username, password){
    const findLogin = await loginSchema.findOne({ username : username });
    if(findLogin){
        if(findLogin.password != password){
            return { success : false, errorMessage : " Password not match " }
        }else{
            return { success : true, username : username }
        }
    }else{
        return { success : false, errorMessage : " Username not exist " }
    }
}

async function deleteAllUsers(){
    await loginSchema.deleteMany({});
}

async function getUserByUsername(username){
    const findLogin = await loginSchema.findOne({ username : username });
    if(findLogin){
        return findLogin;
    }else{
        return null;
    }
}

module.exports = { register, login, deleteAllUsers, getUserByUsername }