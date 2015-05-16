//database of books
var library = [ 
  { title: 'The Road Ahead', author:'Bill Gates', readingStatus: true }, 
  { title: 'Steve Jobs', author: 'Walter Isaacson', readingStatus: true }, 
  { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', readingStatus: false },
  { title: "The Handmaid's Tale", author: 'Margaret Atwood', readingStatus: true },
  { title: 'Dhalgren', author: 'Samuel R. Delany', readingStatus: false },  
  { title: 'The Moon Is a Harsh Mistress', author: 'Robert A. Heinlein', readingStatus: false },
  { title: "Kindred", author: 'Octavia Butler', readingStatus: false },
  { title: 'The Once and Future King', author: 'T.H. White', readingStatus: true }, 
  { title: 'Zone One', author: 'Colson Whitehead', readingStatus: true }, 
  { title: 'The Castle trilogy', author: 'Diana Wynne Jones', readingStatus: false },
  { title: 'Harry Potter', author: 'J. K. Rowling', readingStatus: true } 
];

var ucfirst= function(str) {
    var firstLetter = str.substr(0, 1);
    return firstLetter.toUpperCase() + str.substr(1);
}

var db_search = function(list, string) {
	for (var entry in list) {
		if (list[entry].title===string)
			return list[entry];
	}
	return false;
}

var format_results = function(object) {
		for (var entry in object) {
				var status = "";
				for (var element in object) {
					if (element==="readingStatus")
						status+=("Available: "+String(object[element]));
					else
						status+=(ucfirst(element)+": "+String(object[element])+". ");
				}
		}
		return status;
}

var main = function () {
    "use strict";

    var addCommentFromInputBox = function () {
        var $new_comment;
        var searchResults = db_search(library, $(".comment-input input").val())

        if ($(".comment-input input").val() !== "") {
        	if (searchResults) {
            	$new_comment = $("<p>").text(format_results(db_search(library,$(".comment-input input").val())));
            	$new_comment.hide();
            	$(".comments").append($new_comment);
            	$new_comment.fadeIn();
            	$(".comment-input input").val("");
            }
            else {
            	$new_comment = $("<p>").text("Sorry, the Library does not have "+$(".comment-input input").val());
            	$new_comment.hide();
            	$(".comments").append($new_comment);
            	$new_comment.fadeIn();
            	$(".comment-input input").val("");
        	}
        }
    };

    $(".comment-input button").on("click", function (event) {
        addCommentFromInputBox();
    });

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });
};

$(document).ready(main);