// Write a function called letterCapitalize which takes a single string parameter and 
// capitalizes the first letter of each word in the string. 
// You can assume that words in the input string will be separated by only one space.
var myString = "Hello today is your day!"
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