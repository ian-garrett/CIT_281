//define event handler
var selectImage = function () {

	     var roll1 = RandomInt(0, 5);
	     var imgName1 = '&#x268' + roll1 + ';';

	     //inset the new glyph into the span
	     $('#die').html(imgName1);
	 }

//NOTE how jQuery registers event handlers
$("button").on("click", selectImage);