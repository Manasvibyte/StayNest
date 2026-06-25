const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
});

userSchema.plugin(passportLocalMongoose); 

//passport-Local-Mongoose will automatically define username, hash password, hashing and salting either we mention them 
//in above field or not using userSchema.plugin()

module.exports = mongoose.model("User", userSchema);
