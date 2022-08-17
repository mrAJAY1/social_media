import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema({
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:60
    },
    credential:{
        type:String,
    },
    otp:{
        type:String
    }
})