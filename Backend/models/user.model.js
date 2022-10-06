const mongoose= require('mongoose');
const schema= mongoose.Schema;

let UserSchema= new schema({
    displayName:{
        type:String,
        required:true,
        max:100
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }

})
module.exports= mongoose.model('User',UserSchema);