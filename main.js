

let cscore=[];
let tscore=[0,0];
let running=false;
let p=0;
const limit=20;
let count=0;


function start(){
    if(p==0){
        document.getElementById("pl1").style.boxShadow= "10px 10px 40px 20px #0ff";
        document.getElementById("pl2").style.boxShadow = "10px 10p 10px 10px grey";
    }
    else{
        document.getElementById("pl2").style.boxShadow=  "10px 10px 40px 20px #0ff";
        document.getElementById("pl1").style.boxShadow= "10px 10px10px 10px grey";
    }
    if  (document.getElementById("s").innerHTML=="START")
    {
    document.getElementById("s").innerHTML="STOP";
    document.getElementById("s").style.background="red";
    
    }
    else{  
    document.getElementById("s").innerHTML="START";
    document.getElementById("s").style.background="green";
    document.getElementById("pl1").style.boxShadow=   "10px 10px 40px 20px #0ff";
    document.getElementById("pl2").style.boxShadow =  "10px 10px 10px 10px grey";
    document.getElementById("c1").innerHTML=0;
    document.getElementById("c2").innerHTML=0;
    document.getElementById("t1").innerHTML=0;
    document.getElementById("t2").innerHTML=0;
    p=0;
    cscore=[0,0];
    tscore=[0,0];


    }
}





function t_score1()
{
    cscore[0] =2;
    tscore[0]=tscore[0]+ cscore[0];
    
     document.getElementById("c1").innerHTML=cscore[0];
     document.getElementById("t1").innerHTML=tscore[0];
    
    
}
function t_score2(){
    cscore[1] =Math.floor(Math.random()*7);
    tscore[1]=tscore[1]+ cscore[1];
    document.getElementById("c2").innerHTML=cscore[1];
    document.getElementById("t2").innerHTML=tscore[1];
        
}
function hold()
{
    
    if(p==0)
        document.getElementById("c1").innerHTML=0;
    else
        document.getElementById("c2").innerHTML=0;

    p=(p==0)?1:0;
    if(p==0){
        document.getElementById("pl1").style.boxShadow=   "10px 10px 40px 20px #0ff";
        document.getElementById("pl2").style.boxShadow =  "10px 10px 10px 10px grey";
    }
    else{
        document.getElementById("pl2").style.boxShadow=  "10px 10px 40px 20px #0ff";
        document.getElementById("pl1").style.boxShadow= "10px 10px 10px 10px grey";
    }

    
}


