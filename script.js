$(document).ready(function() {
	


	var fizzBuzz = function(count) {	//It's better to put the function expression at the top of the scope.
		count = +count;		/*Transfer the type from string to number*/
		var num;

			if (count % 1 != 0 || count < 1 || count > 100) {		/*Examine if the input is an integer between 1 and 100*/
				num="Please input an integer between 1 and 100";
			}
			else if (count % 3 === 0 && count % 5 === 0) {
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

			return num;
		
	}


	$('button').on('click',function() {
		var input = $('#input').val();
		var output = fizzBuzz(input);
		
		console.log(output);
		$('#output').text(output);
	});
	//$(document).on('keydown','13',calculate());


	

})



