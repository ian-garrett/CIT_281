var fizzBuzz = function(){
	var final_string = ""
	//checks for multiples of 3 and 5
	for (var i = 1; i <= 100; ++i){
		if (i%3===0)
			final_string += "Fizz";
		if (i%5===0)
			final_string += "Buzz";
		if ((i%3!=0)&&(i%5!=0))
			final_string += String(i);
		final_string += "\n";
	}
	return final_string;
}