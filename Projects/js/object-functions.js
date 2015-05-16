var getProps = function(object){
	var props = [];
	//loops through object and pushes elements into array
	for (var key in object){
		props.push(key);
	}

	return props;
}
