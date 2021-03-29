---
title: Functions
description: This is a post on Functions
date: 2018-05-01
tags:
  - another-tag
layout: layouts/post.njk
---

<script>

function outputMessage() {
  console.log("Hello");  
};

function combineString(FirstString, SecondString) {
  console.log(FirstString + " " + SecondString);
};

var Fn = "Joe";
var Sn =  "Spink";

combineString(Fn, Sn);


function putOnCoat(Temp) {
  if (Temp <= 50) {
      if (Temp <= 30) {
          console.log("Put On A Hat and gloves");
        } else{
          console.log("Put On A Coat");
        }
    } else{
        console.log("Don't Put On A Coat");
      }
    };

var Temp = "20";
putOnCoat(Temp);

function canYouVote(Age) {
  if (Age >= 18) {
      console.log("You can vote");
    } else{
        console.log("No voting for u");
      }
    };
var Age = "19";
canYouVote(Age);


function percentageCalculator(number,percentage){
  var Total = (number * (percentage/100));
  console.log(Total);
  return Total;
};

percentageCalculator(10,20);

function drinkOrder(size,drink) {
  sizeDetail = "";
  drinkDetail = "";
  switch (size) {
    case "small":
    sizeDetail = "A Small Drink. Why not a medium or large.";
    break;
    case "medium":
    sizeDetail = "A medium Drink. That's average.";
    break;
    default:
    sizeDetail = "A large Drink. More Money!";
};
  switch (drink){
    case "pepsi":
    drinkDetail = " A pepsi. That's too much like coke.";
    break;
    case "coke":
    drinkDetail = " A coke. That's too much like pepsi.";
    break;
    default:
    drinkDetail = " good choice.";    
  };
  console.log(sizeDetail + drinkDetail);

};

function calculator(fnumber, Snumber, operation) {
  var result = ""
  switch (operation) {
    case "+":
    result = (+fnumber + +Snumber);
        break;
    case "-":
    result = (fnumber - Snumber);
        break;
    case "x":
    result = (fnumber * Snumber);
        break;
    case "/":
    result = (fnumber/Snumber);
        break;
    case "%":
    result = (fnumber % Snumber);
        break;
};
    console.log(result);        
};

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if ((i % 3) == 0 && (i % 5) == 0) {
      console.log("FizzBuzz");  
      } else if ((i % 5) == 0) {
        console.log("Buzz");
      } else if ((i % 3) == 0) {
          console.log("Fizz");
      }
   else{
      console.log(i);
    };
  };
};

//fizzBuzz();

function times() {
  for (let i = 1; i <= 12; i++) {
    console.log(i*7);
  };

};

//times();

var Cats = ["Timmy", "Pixel", "Inka", "Leona"];
for (let i = 0; i < Cats.length; i++) {
  console.log(Cats[i]);
};

var Brownies = {
  recipeTitle: "Brownies",
  servings: "4",
  ingredients: ["185g unsalted butter, " + "185g best dark chocolate, " + "85g plain flour, "+ "40g cocoa powder, "+ "50g white chocolate, "+ "50g milk chocolate, "+ "3 large eggs, "+ "275g golden caster sugar "],
  directions:[".... Pour the mixture into the prepared tin .... Put in the oven and set your timer for 25 mins."]
};

  console.log(Brownies.recipeTitle + " For " + Brownies.servings + " People, You will need " + Brownies.ingredients + " And you will need to " + Brownies.directions);

function shoppingTotal(cart, discountAmount, type){
  let totalPrice = "0";
  for (let i = 0; i < carts.length; i++) {
    let itemPrice = cart[i].price;
    let itemQuanity =  cart[i].quantity;
    let totalQuantityPrice = totalPrice * itemQuanity;
    if (cart[i].type === "any") {
      itemTotalPrice = (100 - discountAmount) * itemTotalPrice;
    }
    else {   
      if (cart[i].type === "any") {
          itemTotalPrice = (100 - discountAmount) * itemTotalPrice;

      }
    }
  }
    totalPrice = itemPrice + itemTotalPrice;
    console.log(totalPrice);

}

function priceRangeItems(cart, lowprice, highprice) {
  let arritems = [];
  for (let i = 0; i > cart.length; i++) {
    if (cart[i].price >= lowprice && cart[i].price <= highprice) {
      arritems.push(cart[i]);
    }
  }
  return arritems;

}

console.log(priceRangeItems(shoppingCart, 0.1, 2));

<!-- var myNumbers[3,5,4,4,1,1,3];

function mean(Numbers) {
  let Numbers = 0
  for (let i = 0; i < Numbers.length; i++) {
    total = total + number[i];
  }
  return total/Numbers.length;
}

mean(myNumbers);

console.log(total);

var myNumbers1 = [10, 3, 90, 35, 24, 1];

function median(Numbers) {
  number.sort(compare)
  if (Numbers.length % 2 == 0) {
    let median = (Numbers[Numbers.length/2-1] + Numbers[Numbers.length/2-1])/2;
  };
  else{
    medain = Numbers[(Numbers.length -1)/2];

  }
  return medain;
}

function compare(a,b) {
  return a-b;
}


function mode(number) {
  let modeNum = [];
  let count = [];
  let numbers = 0;
  for (let i = 0; i < number.length; i++) {
    numbers = number[i];
    count[numbers] = (count[numbers]) || 0)+1;

    if (count[number] > maxIndex) {
      maxIndex = count[numbers];
    }
  }
  for (let i in count) {
    if(count[i] === maxIndex) {
      modes.push(Number)(i));
    }
  }
  return modes;
  } -->



</script>

<html>
<input type=button value="Click Me" onclick = "outputMessage()">
</html>
