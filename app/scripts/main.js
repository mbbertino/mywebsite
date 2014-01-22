
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

	$('.addbox').first().before('Did I just cut in line???');

})

$('.clickhere2').click(function() {

	$('.addbox2').add('.addbox2').css( 'color', 'white' );
	$('.addbox2').add('.addbox2').css( 'text-align', 'center' );
	$('.addbox2').add('.addbox2').css( 'font-size', '45px' );
	$('.addbox2').add('.addbox2').css( 'background-color', 'black' );

})

$('.clickhere3').click(function() {

	$('.addbox3').add('.addbox3').css( 'color', 'white' );
	$('.addbox3').first().after(', WAIT NO ITS NOT ?!?!?!');
})

$('.name').hover(function(){
	$(this).append("<strong> below</strong>");
})

$('.hi').blur(function(){
	$(this).css('background-color','gray');
})

$('.hi').focus(function(){
	$(this).css('background-color','red');
})

$('.newbox.1').hover(function(){
	$('.newbox.1').addClass('circle1');
})

$('.newbox.2').hover(function(){
	$('.newbox.2').addClass('background2');
})

$('.newbox.3').hover(function(){
	$('.newbox.3').addClass('move3');
})

$('.newbox.4').hover(function(){
	$('.newbox.4').addClass('move4');
})

$('.newbox.5').hover(function(){
	$('.section3 .name').css('color','red');
})

$('.newbox.6').click(function(){
	$('.section3 .name').css('font-size','0px');
})

$('.newbox.7').click(function(){
	$('.section3 .name').css('font-size','20px');
})

$('.newbox.8').click(function(){
	$('.section3 .boxclick').css('text-transform','uppercase');
})

$('.newbox.9').click(function(){
	$('.section3 .boxclick').hide();
})

$('.newbox.10').dblclick(function(){
	$('.newbox.10').addClass('spinning')
})

$('.circles.1').hover(function(){
	$(this).addClass('shadow')
})

$('.circles.2').hover(function(){
	$(this).addClass('textline')
})

$('.circles.3').hover(function(){
	$(this).addClass('blink')
})

$('.circles.4').hover(function(){
	$(this).addClass('fullwidth')
})

$('.circles.5').hover(function(){
	$(this).addClass('boxshadow5')
})

$('.done').hover(function(){
	$('.newbox').addClass('bezier');
})

$('.done').click(function(){
	$('.section3').hide();
})


var car = {
	'name': 'Sally',
	'miles': 95000, 
	'color': 'gray', 
	'wheels': 4,
	'lights on': false
}

var person = {
	'name': 'Johnny',
	'age': 17, 
	'hair': 'black', 
	'arms': 2,
	'legs': 2,
	'brains': 1,
	'mph': 35
}

var tree = {
	'name': 'Wall',
	'age': 100, 
	'color': 'brown', 
	'trunks': 1,
	'branches': 5,
	'stance': 'still here'
}


car.crash = function(){
	alert('CRAP!!!! I these are bad mason I\'m just playin') 
}


person.speedup = function(){
	return(this.mph + 50)
}

tree.bigwind = function (){
	return(this.branches - 2)
}

car.ohcrap = function() {
	person.brains = person.brains - 1;
	return ("Wow, my car only has" + " "+(car.wheels - 1)+ " wheels and the tree is " + tree.stance +"."+" How many brains do I have now?");
}
