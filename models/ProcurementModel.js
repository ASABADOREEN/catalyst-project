const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const procurementSchema = new mongoose.Schema({
    produce: {
    type: String,
  },
    typeofproduce: {
    type: String,
  },
  dateofProduce: {
    type: Date,
  },
  weight:{
    type:Number,
  },
  cost:{
    type:Number,
  },
  nameofDealer:{
    type:String,
  },
  contact:{
    type:Number,
  },
  Price:{
    type:Number,
  },
  branch:{
    type:String,
  },
});

// Export Model
//ManagerSchema.plugin(passportLocalMongoose, { usernameField: "email" });
module.exports = mongoose.model("Procurement", procurementSchema);