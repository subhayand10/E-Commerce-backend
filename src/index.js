const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

let server;

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port

app.listen(process.env.PORT,async()=>{
console.log("Connected to PORT "+process.env.PORT)   
try{
await mongoose.connect(process.env.MONGODB_URL)
console.log("Connected to DB at "+process.env.MONGODB_URL)
} 
catch(err)
{
console.log(err)
}
})
