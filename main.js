$(document).on('ready', function() {

	// Add a click event handler so that when you cick the button a message is printed to the console.
	// $('.btn').on('click', function() {
	// 	console.log("You clicked on button doe");
	// });

	// Change the behavior of the click handler to append some text to the body element.
	$('.btn').on('click', function(){
		$('body').append("Feel like appending somethang");
	});

	// Add another button with a click handler that appends an h1 element with some text to the body element.
	$('.btn-h1').on('click', function(){
		$('body').append("<h1>Feel like appending somethang h1 related</h1>");
	}); 

	// Add another button with a click handler that append an unordered list with three list items to the body element.
	$('.btn-list').on('click', function(){
		var list = "<ul><li>Item1</li><li>Item2</li><li>Item3</li></ul>"
		$('body').append(list);
	})
  
});