const express=require('express')
const router=express.Router();
const zod=require('zod');
const jwt=require('jsonwebtoken')
const {JWT_SECRET}=require("../config")
const { User, Account } = require("../db");
const {authMiddleware}=require("../middleware")


const signupSchema=zod.object({
    username:zod.string().email(),
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string()
})
const signinSchema=zod.object({
    username:zod.string().email(),
    password:zod.string()
})
const updateSchema=zod.object({
    password:zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})


// signup route-
router.post("/signup",async(req,res)=>{
    const body=req.body;
    const { success, error } = signupSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            msg: "Incorrect Inputs",
            error: error.errors  // This will give details on which fields are invalid
        });
    }
    
    const existingUser=await User.findOne({
        username:body.username
    })
    if(existingUser){
        return res.status(411).json({
            msg:"Email or user already exist please sign in"
        })
    }

    const user=await User.create({
        username:body.username,
        password:body.password,
        firstName:body.firstName,
        lastName:body.lastName
    })
    const userId = user._id;
    //  Initialize balances on signup. This is so we don’t have to integrate with banks and give them random balances to start with.
    await Account.create({
        userId,
        balance:1000+Math.random()*5000
    })

    res.json({
        msg:"User created successfully",
        
    });

})

// signin route-
router.post("/signin",async(req,res)=>{
    const body=req.body;
    const {success}=signinSchema.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            msg:"incorrect inputs"
        })
    }

    // find the user in db-
    const user=await User.findOne({
        username:body.username,
        password:body.password
    });
    // if we found user then-
    if(user){
        const token=jwt.sign({
            userId:user._id
        },JWT_SECRET)

        res.json({
            token:token
        })
        return
    }

    // if not found user-
    res.status(400).json({
        msg:"Error while signin"
    });
})

// update firstname,lastname,password of the user-

router.put("/update",authMiddleware,async(req,res)=>{
    const body=req.body;
    const {success}=updateSchema.safeParse(req.body)
    if(!success){
        res.status(411).json({
            msg:"Error while updating information"

        })
    }
    await User.updateOne({ _id: req.userId }, req.body);
    res.json({
        message: "Updated successfully"
    })
})

//  Route to get users from the backend, filterable via firstName/lastName
// This is needed so users can search for their friends and send them money

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })
// Once the users are found, the results are returned as JSON.
// users.map(user => ({ ... })) transforms each user object from the database to only include specific fields: username, firstName, lastName, and _id.
// This helps ensure that sensitive information like passwords is not included in the response.

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})






module.exports=router;