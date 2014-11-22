$(document).ready(function() {
	var count;
	var num;

	for (count = 1 ; count <= 100 ; count++) {

		if (count % 3 === 0 && count % 5 === 0) {
			num="Fizz Buzz";	
		}
		else if (count % 3 === 0) {
			num="Fizz";
		}
		else if (count % 5 === 0) {
			num="Buzz";
		}
		else {
			num=count;
		}
		var listNum="<p>" + num + "</p>";

		$('body').append(listNum);
		console.log(num);
	}
})



