// declaring variables
let age =20;
let fav_num =2;
let day_of_birth =2;
let month_of_birth =12;

/* do two calculations with same variables using
different pecedence to show how precedence works */

let calculations1=age + fav_num / day_of_birth * month_of_birth;

let calculations2=(age + fav_num) / day_of_birth * month_of_birth;

// send results of calculations to the web page
document.getElementById("result1").innerHTML = calculations1;

document.getElementById("result2").innerHTML = calculations2;