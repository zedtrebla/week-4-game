$(document).ready(function() {

	var win= 0;
	var loss= 0;
	var addition= 0;

	var random=Math.floor(Math.random() *100 + 10);

 	var red = Math.floor(Math.random() *10 + 1);
	var white = Math.floor(Math.random() *10 + 1);
	var yellow = Math.floor(Math.random() *10 + 1);
	var green = Math.floor(Math.random() *10 + 1);

	var updateAddition = function() {
		$('.addition').empty();
		$('.addition').append(addition);
		$('#wins').empty();
		$('#wins').append(wins);
		$('#losses').empty();
		$('#losses').append(losses);
	}
	
	$("#randomNumber").text(random);
	$("#red").click(red);

	var restart = function(){
	addition = 0;
    total = Math.floor((Math.random() *100) + 19);

	$('.total').empty();
	$('.total').append(total);

	red = Math.floor((Math.random() *10) + 1);
    blue = Math.floor((Math.random() *10) + 1);
    yellow = Math.floor((Math.random() *10) + 1);
    green = Math.floor((Math.random() *10) + 1);

   
    //alert('restart');
    updateAddition();
}


})


