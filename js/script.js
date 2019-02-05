/*  HOME SET OF TWEENS */
  var txt1 = $(".text-1");
  var txt2 = $(".text-2");
  var tit1 = $(".title-1");
  var vmore = $(".view-more");
  var menu = $("#menu");
  var menubg = $('.menu-wrapper');


var tltxt1 = new TimelineLite();
tltxt1.add( TweenLite.from(txt1, 1, {opacity:0, ease: Power3.easeOut}));
tltxt1.add( TweenLite.from(txt1, 1, {ease: Power3.easeOut, y:-50}), "-=0.8");


var tltit1 = new TimelineLite();
tltit1.add( TweenLite.from(tit1, 1, {opacity:0, ease: Power3.easeOut}));
tltit1.add( TweenLite.from(tit1, 1, {ease: Power3.easeOut, y:-50}), "-=0.8");

var tltxt2 = new TimelineLite();
tltxt2.add( TweenLite.from(txt2, 1, {opacity:0, ease: Power3.easeOut}));
tltxt2.add( TweenLite.from(txt2, 1, {ease: Power3.easeOut, y:+50}), "-=0.8");

var tlvm1 = new TimelineLite();
tlvm1.add( TweenLite.from(vmore, 1, {opacity:0, ease: Power3.easeOut}));
tlvm1.add( TweenLite.from(vmore, 1, {ease: Power3.easeOut, y:+50}), "-=0.8");



/*  MENU BG SIZE */
var diag = Math.sqrt($(window).height()*$(window).height()+$(window).width()*$(window).width())
console.log(diag);
var sideA = $(window).height();
var sideB = $(window).width();

console.log(sideA);

var angleB = Math.asin(sideA/diag) * 180/Math.PI;

var offset = diag*Math.cos(Math.asin(sideA/diag));

console.log(angleB+90);
console.log("offset = "+offset);

window.onload = function() {

var angletmp = "skew("+(angleB+90)+"deg)";

$(menubg).css({
	left: -(2.5*sideB),
	width:offset+sideB,
	height:$(window).height(),
	'transform': angletmp
})

console.log(angletmp);

/*  HOME MAIN TIMELINE */
var tlhome = new TimelineLite();

tlhome.add( tltit1 );
tlhome.add( tltxt1, "-=0.9"  );
tlhome.add( tltxt2, "-=0.9"  );
tlhome.add( tlvm1, "-=0.9"  );







/*  MENU CLICK */
$( menu ).click(function() {
	if ( $(this).hasClass("is-active")) {
		$(this).removeClass('is-active');
    	var showmenuhome = new TimelineLite();
    	showmenuhome.add(tlmw1.reverse(), "0.2s");
    	showmenuhome.add(tlhome.play());
	} else {
		$(this).addClass('is-active');
    	var showmenuhome = new TimelineLite();
    	showmenuhome.add(tlmw1.play(), "0.2s");
    	showmenuhome.add(tlhome.reverse());
    	
	}
});

var tlmw1 = new TimelineLite({paused:true});
tlmw1.add( TweenLite.to(menubg, 1, {opacity:1, ease: Power3.easeOut}));
tlmw1.add( TweenLite.to(menubg, 1, {ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"), left:-0.5*sideB}), "-=0.8");







}