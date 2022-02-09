/* var time = document.getElementById("time").value
var aliance = document.getAnimations("aliance").value;
var show = document.getElementById("showRes");
 */
var t =1000;
var aliance =10;

const calcTime =(t, aliance)=>{
if(aliance>10){
    aliance = 10;
}
var result = aliance * Math.floor(t*0.1);
if (result<60){
    result = 60;
}

var total = t - result;
console.log(total)

}

calcTime(t,aliance);