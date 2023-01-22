const mongoose =require('mongoose');

const empSchema2 = new mongoose.Schema({
    usn:{
        type:String,
        unique:true
            },
    management : [{
        external :{type:Number} ,
        internal : {type:Number},
        totalmng:{type:Number}
      
         }],
         cns : [{
            external : {type:Number},
            internal : {type:Number}
             }],
             dbms : [{
                external : {type:Number},
                internal : {type:Number}
                 }],
                 atc: [{
                    external : {type:Number},
                    internal : {type:Number}
                     }],
                     python : [{
                        external :{type:Number},
                        internal : {type:Number}
                         }],
                         unix : [{
                            external : {type:Number},
                            internal :{type:Number}
                             }],
                             cnslab : [{
                                external : {type:Number},
                                internal : {type:Number}
                                 }],
                                 dbmslab: [{
                                    external : {type:Number},
                                    internal : {type:Number}
                                     }],
                                     evs: [{
                                        external : {type:String},
                                        internal : {type:String}
                                         }],
                                    studentname:[{
                                         names:{type:String}
                                      } ],


});

const empCollection2=new mongoose.model('studdata',empSchema2);
module.exports=empCollection2;