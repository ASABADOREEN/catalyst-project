const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const signupSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
  },
  selectrole:{
    type:String,
  },
  branch:{
    type:String,
  },
});

// Export Model
signupSchema.plugin(passportLocalMongoose, { usernameField: "email" });
module.exports = mongoose.model("UserSignUp", signupSchema);