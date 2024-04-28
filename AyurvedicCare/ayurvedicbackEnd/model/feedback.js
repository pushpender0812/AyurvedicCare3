const { default: mongoose } = require("mongoose");
const feedbackSchema = new mongoose.Schema({
    name:{type:String,required:false},
    email:{type:String,required:true},
    phoneNo:{type:Number,require:true},
    satisfaction:{type:String,enum:['yes','No'],required:true,default:'Yes'},
    feedback:{type:String,required:true}
})

module.exports = mongoose.model("FeedBack SC",feedbackSchema)