
const express=require("express");
const hbs = require("hbs");
const app=new express();
const port=process.env.PORT || 8000;
//const path=require("path");
app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));
require('./db/db');
const path=require("path");
const templatepath= path.join(__dirname,"./templates/views");
const partialpath= path.join(__dirname,"./templates/partials");

app.set("view engine", "hbs");
app.set("views",templatepath);
hbs.registerPartials(partialpath);
// const routes=require('./routes/rt')

// app.use('',routes)



const empCollection=require('./model');
const empCollection2=require('./model2');

app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/sign.html")
});
app.get("/login",(req,res)=>{
    res.sendFile(__dirname +"/log.html")
});

// app.post('/data',async(req,res)=>{
// try {
//     const usern=req.body.usern;
//     const cpass=req.body.cpass;
//    const pass=req.body.pass;
// if(cpass===pass){
//     const empdata= new empCollection({
//         username:req.body.usern,
//         password:req.body.cpass
//     });
//     const postdata= await empdata.save();
   
// }else{
//     res.send("Password are not matching...")
// }
// } catch (error) {
//     res.send(error)
// }

// })
app.get('/delt',(req,res)=>{
    res.render("delete")
})

app.post('/ln',async(req,res)=>{

try {
    const userna=req.body.userna;
    const cpasss=req.body.cpasss;
     
    const usnm=await empCollection.findOne({username:userna});

    if(usnm.password===cpasss){
        res.render("main");
    }else{
        res.send("Account does not exist...");
    }


} catch (error) {
    res.send("error");
}
})

app.post('/result',async(req,res)=>{

    try {
        const naa=req.body.nm;
        const usn=req.body.usn;
        const e1=req.body.e1;
        const e2=req.body.e2;
        const e3=req.body.e3;
        const e4=req.body.e4;
        const e5=req.body.e4;
        const e6=req.body.e6;
        const e7=req.body.e7;
        const e8=req.body.e8;
        const e9=req.body.e9;
        const i1=req.body.i1;
        const i2=req.body.i2;
        const i3=req.body.i3;
        const i4=req.body.i4;
        const i5=req.body.i4;
        const i6=req.body.i6;
        const i7=req.body.i7;
        const i8=req.body.i8;
        const i9=req.body.i9;
        const sum= req.body.e1 +req.body.i1;

        
            const empdata2= new empCollection2({
               
                usn:req.body.usn,
                studentname:{names:req.body.naa},
                management:{external:req.body.e1,internal:req.body.i1,totalmng:sum},
                cns:{external:req.body.e2,internal:req.body.i2},
                dbms:{external:req.body.e3,internal:req.body.i3},
                atc:{external:req.body.e4,internal:req.body.i4},
                python:{external:req.body.e5,internal:req.body.i5},
                unix:{external:req.body.e6,internal:req.body.i6},
                cnslab:{external:req.body.e7,internal:req.body.i7},
                dbmslab:{external:req.body.e8,internal:req.body.i8},
                evs:{external:req.body.e9,internal:req.body.i9},

            });
            const postdata= await empdata2.save();
           res.send("posted")
       
        } catch (error) {
            res.send(error)
        }
        
    })
    
app.post('/data',async(req,res)=>{
    try {
        const userusn=req.body.userusn;
        const resal=await empCollection2.findOne({usn:userusn});
if(resal){
    res.render("index",{
        resal:resal
    })
    
}else{
    res.send("usn not found.....")
}

    } catch (error) {
        console.log(error);
    }
})




app.post('/delt',async(req,res)=>{
    try {
        const dusn=req.body.dusn;
        const dresal=await empCollection2.findOne({usn:dusn});
if(dresal){
   await empCollection2.deleteOne({usn:dusn});
   res.send("RESULT DELETED....")
    }
    
else{
    res.send("usn not found.....")
}

    } catch (error) {
        console.log(error);
    }
})


app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})