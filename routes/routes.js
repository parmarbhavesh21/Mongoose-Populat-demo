import express from 'express'
const routes= express.Router()
import {bookcontrollers,stdbookscollations} from "../controllers/bookcontrollers.js"
import {Studentcontrollers} from "../controllers/stdcontrollers.js"
 

routes.route("/std").post(Studentcontrollers)
routes.route("/bookadd").post(bookcontrollers)
routes.route("/show").get(stdbookscollations)
// console.log();
export {routes}
