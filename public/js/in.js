const mng1=document.getElementById('mng1').innerHTML;
const mng2=document.getElementById('mng2').innerHTML;

 let x=parseInt(mng1) + parseInt(mng2);
 document.getElementById('mng3').innerHTML=x;


 const cn1=document.getElementById('cn1').innerHTML;
const cn2=document.getElementById('cn2').innerHTML;

 let y=parseInt(cn1) + parseInt(cn2);
 document.getElementById('cn3').innerHTML=y;



 const db1=document.getElementById('db1').innerHTML;
const db2=document.getElementById('db2').innerHTML;

 let z=parseInt(db1) + parseInt(db2);
 document.getElementById('db3').innerHTML=z;




 const at1=document.getElementById('at1').innerHTML;
const at2=document.getElementById('at2').innerHTML;

 let a=parseInt(at1) + parseInt(at2);
 document.getElementById('at3').innerHTML=a;




 const py1=document.getElementById('py1').innerHTML;
const py2=document.getElementById('py2').innerHTML;

 let b=parseInt(py1) + parseInt(py2);
 document.getElementById('py3').innerHTML=b;



 const uni1=document.getElementById('uni1').innerHTML;
const uni2=document.getElementById('uni2').innerHTML;

 let c=parseInt(uni1) + parseInt(uni2);
 document.getElementById('uni3').innerHTML=c;



 const cnl1=document.getElementById('cnl1').innerHTML;
const cnl2=document.getElementById('cnl2').innerHTML;

 let d=parseInt(cnl1) + parseInt(cnl2);
 document.getElementById('cnl3').innerHTML=d;




 const dbl1=document.getElementById('dbl1').innerHTML;
const dbl2=document.getElementById('dbl2').innerHTML;

 let e=parseInt(dbl1) + parseInt(dbl2);
 document.getElementById('dbl3').innerHTML=e;



 const ev1=document.getElementById('ev1').innerHTML;
const ev2=document.getElementById('ev2').innerHTML;

 let f=parseInt(ev1) + parseInt(ev2);
 document.getElementById('ev3').innerHTML=f;


let tot=x + y + z + a + b + c + d + e + f;
 let per=(tot *100)/900;
 
document.getElementById('sp').innerHTML=tot;
document.getElementById('sp1').innerHTML=Math.round(per);



 


