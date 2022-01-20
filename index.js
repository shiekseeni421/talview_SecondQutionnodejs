const express=require("express");
const app=express();
const port=8085;
const mongoose = require("mongoose");
const userRouter=require("./views/LoginRoute");

app.use(express.json());
app.use(userRouter);



mongoose.connect("mongodb+srv://sheik123:16pA5A0421@cluster0.1d4sk.mongodb.net/UserDb?retryWrites=true&w=majority")
.then( () => {
    console.log(`DB Connected`)
} ).catch( err => {
    console.log(err)
}  )


app.listen(port,()=>{
    console.log(`serverstarts stars ${port}`)
})