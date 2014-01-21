
// this java script impacts 5 different elements with 2 different states
$('.link').click(function(){
	console.log('linkcliked!!!');

	$(this).addClass('clicknav');
});

//this is prob better one a css transition
//impacts 3 elemts Total up to: 8Jquery examples
$('.highlight').hover(function(){
	console.log('worked');

	$(this).addClass('hovbanner');
});

// 
$('.smallimg').click(function(){
	
	console.log('linkcliked!!!');

	$('.smallimg').not(this).addClass('hidding');

	$(this).addClass('clickimg');

});


