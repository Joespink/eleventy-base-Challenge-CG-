
alert("Hello");
console.log("Hello");


function sampleFunction() {
 var amount = document.getElementById("amount").value;
 var fname = document.getElementById("fname").value;
 submitOK = "true";

 if (fname.length > 10) {
 alert("The name may have no more than 10 characters");
 submitOK = "false";
 }

 if (isNaN(amount) || amount < 1 || amount > 1000) {
 alert("The Price must be a number between 1 and 1000");
 submitOK = "false";
 }

 if (submitOK == "false") {
 return false;}

 if (submitOK == "true") {
 var tip = (amount * 0.15);
 var tipTotal = (+tip + +amount );
 document.getElementById("output").innerHTML = "£" + tipTotal;
 }
}
