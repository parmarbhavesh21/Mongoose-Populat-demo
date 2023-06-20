import StudentSchema from "../models/std_model.js"

async function Studentcontrollers(req,resp){
let  {name,school}= req.body;
let std= await StudentSchema.create({
    name,
    school
 })
return await resp.send(std)

}
export {Studentcontrollers}
// console.log();