//here we aacess the user input "date"
let userdate=document.querySelector("#DATE");

// here we split future dates so user can not select futures date 
userdate.max=new Date().toISOString().split("T")[0];

//here we access button to get how old are he/she
let btn1=document.querySelector("#BTN");

//here we access para
let paragraph =document.querySelector("#PARA");

//here we create a function to calculate the age
       function calculateAge(){

    //here we take a  new variable birthdate.......... so in this varible we stored userdate 
    let birthDate= new Date(userdate.value);

    let d1 = birthDate .getDate();
    let m1=birthDate.getMonth()+1;  // month start from 0 that we add 1
    let y1=birthDate.getFullYear();
      
    //this is a current date
    let today = new Date();
    let d2=today.getDate();
    let m2= today.getMonth()+1;
    let y2= today.getFullYear();

    //here we stored the difference in the year month date
    let d3,m3,y3;

    y3= y2-y1;

    if(m2>=m1){
        m3=m2-m1;
    }else{
        y3--;
        m3= 12+ m2-m1;
    }

    if(d2>=d1){
        d3= d2-d1;
    }else{
       m3--;
        d3=getDaysInMonth(y1,m1) +d2-d1;
    }

    if(m3<0){ //here month is negative so
        m3=11;
        y3--;
    }
    paragraph.innerHTML=`you are ${y3} years ,${m3} months and ${d3} days old`;
    console.log(y3,m3,d3);
}

//here this function calculate how many days in months left
  function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}

btn1.onclick=()=>{
    calculateAge();
}