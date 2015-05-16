var libraryinfo = function(){ //final version, displays everything properly
	var library = [ 
  { title: 'Bill Gates', author: 'The Road Ahead', readingStatus: true }, 
  { title: 'Steve Jobs', author: 'Walter Isaacson', readingStatus: true }, 
  { title: 'Mockingjay: The Final Book of The Hunger Games', 
    author: 'Suzanne Collins', readingStatus: false } 
    ]; 
	//loops through objects, loops through and displays elements of each object
	for (var key in library){
		for (var element in library[key]){
			console.log(element+": "+String(library[key][element]))
		}
	}
}