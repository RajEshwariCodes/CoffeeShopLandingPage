const btn = document.querySelectorAll(".add-to-cart-button");
console.log("harsh");
const class1= document.querySelectorAll(".card1");
for (var i = 0 ; i < class1.length; i++) {
    class1[i].addEventListener("click", (event)=>{
        const targetd= event.target;
        console.log(targetd);
    })
 }
 const slider = document.querySelector("#slide")
let j=0;
let arrayele = [];
let timeneed=3000;
arrayele[0]='https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2020/01/191213_How-to-shoot-Coffee-Elements-1.jpg?resize=1200%2C800&ssl=1';
arrayele[1]='https://img.freepik.com/free-photo/top-view-coffee-cup-coffee-beans-dark-table_176474-560.jpg?size=626&ext=jpg';
arrayele[2]='https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
function imgchange(){
    document.slide.src=arrayele[j];
    j++;
    if(j<arrayele.length-1){
        j++;
    }else{
        j=0;
    }
    setTimeout("imgchange()",timeneed);
}
window.onload=imgchange;