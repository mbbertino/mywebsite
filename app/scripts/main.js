
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
$('.imgbox').click(function(){
	console.log('linkcliked!!!');

	$('.imgbox').not(this).addClass('hidding');
	$(this).addClass('clickimg');

});

$('.imgbox').hover(function() {
  $('.caption').animate({
    opacity: 0.25,
    height: 'toggle',
    bottom: '-=50',
  }, 1000, function() {
    // Animation complete.
  });
});

$('.clickhere').click(function() {

	$('.addbox').first().before('Did I just cut in line???')

})

$('.clickhere2').click(function() {

	$('.addbox2').add('.addbox2').css( 'color', 'white' );
	$('.addbox2').add('.addbox2').css( 'text-align', 'center' );
	$('.addbox2').add('.addbox2').css( 'font-size', '45px' );
	$('.addbox2').add('.addbox2').css( 'background-color', 'black' );

})

$('.clickhere3').click(function() {

	$('.addbox3').add('.addbox3').css( 'color', 'white' );
	$('.addbox3').first().after(', WAIT NO ITS NOT ?!?!?!')
})


$('.newbox.1').hover(function(){
	$('.newbox').addClass('circle1')
})


