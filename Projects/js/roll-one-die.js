//define event handler
var selectImage = function () {

	     var roll1 = RandomInt(1, 6);
	     var imgName1 = '../images/die' + roll1 + '.gif';

	     //NOTE how jQuery handles attributes
	     $('#dieImg1').attr("src", imgName1);
	 }

//NOTE how jQuery registers event handlers
$("button").on("click", selectImage);