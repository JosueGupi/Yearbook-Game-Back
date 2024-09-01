const { default: mongoose } = require("mongoose");
const UserSchema = new mongoose.Schema({

    username:{
        type:String,
    },

    password:{
        type:String,
    },

    hits:{
        type:Array
    },

    admin:{
        type:Boolean
    },
    listAccess:{
        type:Array
    }
});

const UserModel = mongoose.models.users || mongoose.model("users",UserSchema)
module.exports = UserModel