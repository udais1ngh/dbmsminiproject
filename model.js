const mongoose =require('mongoose');

const empSchema = new mongoose.Schema({
username:{
    type:String,
    unique:true,
    required:true
},
password:{
    type:String,
    required:true
},
note:{
    type:String,
    required:true
}

});

const empCollection=new mongoose.model('register',empSchema);
module.exports=empCollection;