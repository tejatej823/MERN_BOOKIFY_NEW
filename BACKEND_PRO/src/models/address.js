const mongoose=require('mongoose');

const addressSchema=new mongoose.Schema({
    doorNo:{type:String,required:true},
    street:{type:String}
})