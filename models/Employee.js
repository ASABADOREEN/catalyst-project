const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const employeeSchema = new mongoose.Schema({
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
employeeSchema.plugin(passportLocalMongoose, { usernameField: "email" });
module.exports = mongoose.model("Employee", employeeSchema);