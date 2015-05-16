var isElement = function(arr, str){ //GRADE THIS ONE
	//loops through array, checks if any of its objects is the same as the str given
	for (var i = 0; i < arr.length; ++i){
		if (arr[i]===str)
			return true;
	}

	return false;
}


//performs same task but using the search function instead of loop iteration
var isElementalt = function(arr, str){ //DO NOT GRADE THIS ONE
	if (arr.join('').search(str) !== -1)
		return true;
	else
		return false;
}