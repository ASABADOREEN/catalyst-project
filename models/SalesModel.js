const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const salesSchema = new mongoose.Schema({
  nameofProduce: {
    type: String,
  },
  tonnage : {
    type: Number,
  },

  amount: {
    type: Number,
  },
  nameofBuyer:{
    type:String,
  },
  date:{
  type:Date,
  },
  agent:{
    type:String,
  },
});


module.exports = mongoose.model("Sales", salesSchema);