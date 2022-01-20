const mongoose =require("mongoose");
var Schema = mongoose.Schema;
var ObjectIdSchema = Schema.ObjectId;

const UserDetalis= new Schema({
   
    email:{
        type : String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    password :{
        type:Number,
        require:true
    },
    Age : {
        type : Number,
        require:true
    }
    
}
   
)

module.exports = mongoose.model("UserDetalis" , UserDetalis )
