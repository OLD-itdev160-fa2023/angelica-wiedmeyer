// welcome message 
var user = 'Frost';
var salutation = 'Hello, '; 
var greeting = salutation + user + '! Here are some reviews about Shudder.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting; 

// product price 
var price = 60,
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById(price),
    studentPriceEl = document.getElementById(studentPrice);

    priceEl.textContent = price.toFixed(2);
    studentPriceEl.textContent = studentPrice.toFixed(2);