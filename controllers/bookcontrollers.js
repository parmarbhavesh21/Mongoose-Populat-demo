// const Right = require ("../models/rightModels")
import BookSchema from "../models/book_model.js"

async function  bookcontrollers(req,resp){
    const book= await BookSchema.create({
        std_id:req.body.std_id,
        book : req.body.book
    });
    const bookData= await book.save();
    return resp.send(bookData)
}

async function stdbookscollations(req,resp){
    const bookdata= await BookSchema.find({_id: req.body.book_id}).populate("std_id")
    resp.send (bookdata)
}
export {bookcontrollers,stdbookscollations}
// module.exports={
//     create: async (req,resp)=>{
//      const right= await   Right.create({
//             staff_id:req.body.staff_id,
//             right: req.body.right
//         });
//         const rightData= right.save();
//         return resp.send(rightData);
//     },
//     staffByRight:async (req,resp)=>{
//    const rightData= await Right.find({_id:req.body.right_id}).populate("staff_id")
//    resp.send(rightData)
//     }
// }
// console.log();