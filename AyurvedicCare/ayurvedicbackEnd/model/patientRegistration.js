const mongoose = require("mongoose");
const { disease } = require('../utills/constants')
const userSchema = new mongoose.Schema({
  patient_name: { type: String, default: null },
  fathers_name: { type: String, default: null },
  age: { type: Number, default: null },
  gender: { type: String, default: null },
  disease: { type: String, default: null },
  no_of_days: { type: Number, default: null },
  contactNo: { type: Number, required: true,defaul:null },
  Alternate_contactNo: { type: Number, default: null },
  email: { type: String,defaul:null,unique:false    },
  address: { type: String, required: true },
  pincode: { type: Number, required: true, default: null },
  // token: { type: String },
  // session: {}
},//{ typeKey: '$type' }
);
// mongoose.set('strictQuery', true);

module.exports = mongoose.model("Registered_Patient", userSchema);
//   District:{type:String,required:true},
// productImage:{type:String,required:false},
// },
// instituteName: { type: String, default: null },
// password: { type: String, required: true },
// cofirmPassword: { type: String, required: false },