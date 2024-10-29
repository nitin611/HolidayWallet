require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// userSchema-
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        minlength:3,
        maxlength:30,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxlength:20,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,

    }
})

// Bank related Schema
const accountSchema=new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,// Reference to User model
        ref:'User',
        required: true
    },
    balance:{
        type: Number,
        required: true
    }
})

const User=mongoose.model("User",userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports={
    User,
    Account,
};