/*
The easiest way to create an object is an object literal.

An object literal is a comma-separated list of colon-separated name:value pairs, enclosed
within curly braces. 

A property name is a JavaScript identifier or a string literal. Quotes around
a property’s name in an object literal are optional if the name would be a legal
JavaScript name and not a reserved word. So quotes are required around "first-name",
but are optional around first_name.

A property value is any JavaScript expression.
*/
"use strict";

var empty_object = {};

var stooge = {
	"first-name": "Jerome",
	"last-name": "Howard"
};

console.log(stooge["first-name"]);   //=> "Jerome"
console.log(stooge["middle-name"]);  //=> undefined


/*
The values inside an object can be of any type, including strings, 
arrays, or even other objects.
*/ 

var g = {
	"name": "Gordon",
	"age": 36,
	"friends": ["Sara", "Andy", "Roger", "Brandon"],
	"dog": {"name":"Pi", "breed":"Lab Mix" }
}

console.log(g.friends[2]); //=> "Roger"
console.log(g.dog.breed);  //=> "Lab Mix"