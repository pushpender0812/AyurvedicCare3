const { default: mongoose } = require("mongoose");
const feedbackSchema = new mongoose.Schema({
    treatment:{
        
        // disease:{type:String,required:true,unique:true},
        // tm:{type:String,required:true,unique:true}
    },
    
})

module.exports = mongoose.model("Treatments",feedbackSchema)