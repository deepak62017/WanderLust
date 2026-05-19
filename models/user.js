const { string, required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");


const UserSchema = new Schema({
    //  username:{
    //     type:String,
    //     required: true,
    // },
    email: {
        type: String,
        required: true,
        unique: true
    },
    //  password: {
    //        type: String,
    //        required: true,
        
    //  },
    
});

// This plugin adds username, hash, salt, authenticate, serializeUser, deserializeUser
UserSchema.plugin(passportLocalMongoose);
    // , { usernameField: "email" });

module.exports = mongoose.model("User", UserSchema);
