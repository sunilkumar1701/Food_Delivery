import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sunil:Sunilkumar1701%23@lms.m5olabk.mongodb.net/food-del').then(()=>console.log("DB Connected"));
} 