import mongoose from "mongoose";
const Book= new mongoose.Schema({
    std_id:{
type:mongoose.Schema.Types.ObjectId,
ref :"Std_class"
    },
    book:{
        type:String
    }
},{
    timestamps:true
});

let BookSchema= mongoose.model("Book_class",Book)

export default  BookSchema
