const express =require("express");
const router =express.Router();
const userSchema=require("../Module/userSchem");
const { body} = require('express-validator');

router.post("/register" , 
body('email').isEmail(), (req,res) =>{
    const {email,Age,name,password}=req.body

    if (email==null) {
        return res.status(400).json({error:"Please provide email"});
      }
      else if (Age==null) {
          return res.status(400).json({error:"Please provide Age"});
      }
      else if (name==null) {
        return res.status(400).json({error:"Please provide name"});
    }
    else if (password==null) {
        return res.status(400).json({error:"Please provide password"});
    }
    let indexLetter=email.indexOf('@')
    let value=(email.slice(indexLetter,(email.length)))
    if (value!="@gmail.com"){
        return res.status(400).json({error:"Please Educator email Like @gmail.com"});

    }

    const user = new userSchema({email,Age,name,password});
    user.save(  (err,user) => {
        if(err){
            res.json(err)
        }else{
            res.status(200).json({message:"user Register sucessfuly"})
        }
    }  )
}  )


// Login usre

router.post("/Login",async(req,res)=>{
    const{Age,email, password}=req.body;
    if(!Age){
            return res.status(400).send("Age required")
        }
    else if(!email){
            return res.status(400).send("email required")
        }
    else if(!password){
        return res.status(400).send("email required")

    }

    const user =  await userSchema.findOne( { email : email  } )
   if(user == null ){
      return res.status(404).json({ error : "no user is registered with this email" })
   }

   const result = password===user.password 
   if(result == true){
       res.status(200).send("Login Successful")
   }else{
    return res.status(400).send({error:"Invalid Login Credentials"})
   }
   return res.status(200).send("Login Successful")

});



module.exports = router

