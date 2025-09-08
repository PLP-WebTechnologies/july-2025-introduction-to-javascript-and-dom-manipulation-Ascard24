
// Part 1: JavaScript Basics

// Variables, conditionals, and user input
document.getElementById("askNameBtn").addEventListener("click", function () {
  let userName = prompt("What is your name?");
  if (userName) {
    document.getElementById("greeting").textContent = "Hello, " + userName + "!";
  } else {
    document.getElementById("greeting").textContent = "Hello, stranger!";
  }
});

// ====================
// Part 2: Functions
// ====================

// Custom function for total calculation
function calculateTotal(a, b) {
  let sum = a + b;
  document.getElementById("totalResult").textContent =
    "The total is: " + sum;
}

// Another custom function for formatting a string
function formatString(str) {
  return str.toUpperCase();
}
console.log(formatString("javascript is fun!"));

// ====================
// Part 3: Loops
// ====================

document.getElementById("countBtn").addEventListener("click", function () {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear old items

  // Countdown from 5 to 1 using a for loop
  for (let i = 5; i > 0; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
});

// Example of while loop in console
let counter = 0;
while (counter < 3) {
  console.log("While loop count:", counter);
  counter++;
}

// Part 4: DOM Manipulation

// 1. Change text content
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("textToChange").textContent =
    "The text has been changed!";
});

// 2. Toggle highlight class
document.getElementById("toggleBtn").addEventListener("click", function () {
  document.getElementById("togglePara").classList.toggle("highlight");
});

// 3. Add new list item dynamically
document.getElementById("addItemBtn").addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent = "New Item " + (document.querySelectorAll("#dynamicList li").length + 1);
  document.getElementById("dynamicList").appendChild(li);
});
