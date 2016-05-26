// Write a function called letterCapitalize which takes a single string parameter and 
// capitalizes the first letter of each word in the string. 
// You can assume that words in the input string will be separated by only one space.
var myString = "Hello today is your day!";
//  Working output of passing the string into function that makes it into an array then passes
// array into a for of loop and returns to console log first index itemt

// function letterCapitalizatize(str){
// 	var results = str.split(" "); 
// 	for(thing of results){
// 		console.log(typeof thing[0])
// 	}
// }

//  #########   str.replace("initial-content", "final-ouput")

// The following returns Results all uppercase

// var upper = results.map(function(up){
// 	return up.toUpperCase()[0] + 
// 	(function(up){
// 		up.splice(2)
// 		;});

// Attempting make a function call
// the following works on results = {}
// var upper = results.map(function(up){return up.toUpperCase()[0];});

function letterCapitalize(str){
	var results = str.split(" "); 

	// upper = results.map(function(up){return up.toUpperCase()[0];});
	// remainder = results.map(function(rm){return rm.slice(1);});
	// the following statement combines the top two
	var remainder = results.map(function(rm){
		return (rm.toUpperCase()[0] + rm.slice(1));
		});
	var dopamine  = remainder.join(" ");
	console.log(dopamine);
}

letterCapitalize(myString);


// Write a function called wordCount which takes a single string parameter and 
// returns the number of words the string contains (ie. "Never eat shredded wheat" would return 4). 
// You can assume that words in the input string will be separated by only one space.

function wordCount(str) {
	var results = str.split(" ");
	console.log((results.length));

}

// Bonus was completed for admission
var userNumber = prompt("Enter a postive integer to check if it is a prime number");

function optimusPrime(passedNumber) {
  if (passedNumber == 0 || passedNumber == 1) {
    return prime = passedNumber + " is not composite nor is it prime."
  } else if (passedNumber == 2 || passedNumber == 3) {
    return prime = passedNumber + " is prime."
  }
  var ns = Math.sqrt(passedNumber);
  for (i = 2; i <= ns; i++) {
    var remainder = passedNumber % i
    if (remainder == 0) {
      return isItPrime = passedNumber + " is not prime as " + i + " divides evenly into it."
    }
    isItPrime = passedNumber + " is prime."
  }

};
optimusPrime(userNumber);
var display = isItPrime
console.log(display);