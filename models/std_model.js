import mongoose from "mongoose";
const Student= new mongoose.Schema({
    name:{
type: String
    },
    school:{
        type:String
    }
},{
    timestamps:true
});

let StudentSchema= mongoose.model("Std_class",Student)

export default StudentSchema
