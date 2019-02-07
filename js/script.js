/*ts6 +3*/
/*ts3*/


/*  HOME SET OF TWEENS */
  var txt1 = $(".text-1");
  var txt2 = $(".text-2");
  var tit1 = $(".title-1");
  var vmore = $(".view-more");
  var menubcont = $(".mb-cont");
  var mbut = $("#menu");
  var menubg = $('.menu-bg');
  var line1 = $('.line-1');
  var line2 = $('.line-2');
  var mwrap = $('.menu-wrapper');


/*  MENU BG SIZE */
var diag = Math.sqrt($(window).height()*$(window).height()+$(window).width()*$(window).width())
console.log(diag);
var sideA = $(window).height();
var sideB = $(window).width();

//console.log(sideA);

var angleB = Math.asin(sideA/diag) * 180/Math.PI;

var offset = diag*Math.cos(Math.asin(sideA/diag));

//console.log(angleB+90);
//console.log("offset = "+offset);


var tltxt1 = new TimelineLite({paused:true});
tltxt1.add( TweenLite.from(txt1, 1, {opacity:0, ease: Power3.easeOut}));
tltxt1.add( TweenLite.from(txt1, 1, {ease: Power3.easeOut, y:-50}), "-=0.8");


var tltit1 = new TimelineLite({paused:true});
tltit1.add( TweenLite.from(tit1, 1, {opacity:0, ease: Power3.easeOut}));
tltit1.add( TweenLite.from(tit1, 1, {ease: Power3.easeOut, y:-50}), "-=0.8");

var tltxt2 = new TimelineLite({paused:true});
tltxt2.add( TweenLite.from(txt2, 1, {opacity:0, ease: Power3.easeOut}));
tltxt2.add( TweenLite.from(txt2, 1, {ease: Power3.easeOut, y:+50}), "-=0.8");

var tlvm1 = new TimelineLite({paused:true});
tlvm1.add( TweenLite.from(vmore, 1, {opacity:0, ease: Power3.easeOut}));
tlvm1.add( TweenLite.from(vmore, 1, {ease: Power3.easeOut, y:+50}), "-=0.8");


var tlmenu1 = new TimelineLite({paused:true});
tlmenu1.add( TweenLite.from(menubcont, 1, {ease: Power3.easeOut, y:-150}));
tlmenu1.add( TweenLite.from(menubcont, 1, {opacity:0, ease: Power3.easeOut}), "-=0.8");


var tlmw1 = new TimelineLite({paused:true});
tlmw1.add( TweenLite.to(menubg, 1, {opacity:1, ease: Power3.easeOut}));
tlmw1.add( TweenLite.to(menubg, 1, {ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"), left:-0.5*sideB}), "-=0.8");


var mline1 = new TimelineLite({paused:true});
mline1.add( TweenLite.to(line1, 1, {opacity:1, ease: Power3.easeOut}));
mline1.add( TweenLite.to(line1, 1, {ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"), left:-0.5*sideB}), "-=0.8");

var mbhover = new TimelineLite({paused:true});
mbhover.add( TweenLite.to(mbut, 0.5, {    padding: "15px 9px", y:"-=5px", x:"-=5px", ease: Power3.easeOut}));
mbhover.add( TweenLite.to($('.mb-bg'), 0.5, {    width: "66px",height:"66px", y:"-=5px", x:"-=5px", ease: Power3.easeOut}), "-=0.2");


var showmenuitems = new TimelineLite({paused:true});
showmenuitems.add( TweenLite.from(line1, 0.5, {ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"), opacity:0,width:0 }));
showmenuitems.add( TweenLite.from(line2, 0.5, {ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"), opacity:0,width:0 }));
showmenuitems.add( TweenLite.from($('.link-home'), 0.5, {ease: Power3.easeOut, y:"-=50px",opacity:0}));
showmenuitems.add( TweenLite.from($('.link-projects'), 0.5, {ease: Power3.easeOut, y:"-=50px",opacity:0}),"-=0.2");
showmenuitems.add( TweenLite.from($('.link-about'), 0.5, {ease: Power3.easeOut, y:"-=50px",opacity:0}),"-=0.3");
showmenuitems.add( TweenLite.from($('.email-info'), 0.5, {ease: Power3.easeOut, x:"-=50px",opacity:0}));



/*  HOME MAIN TIMELINE */
var tlhome = new TimelineLite({paused:true});

tlhome.add( tltit1.play() );
tlhome.add( tltxt1.play(), "-=0.9"  );
tlhome.add( tltxt2.play(), "-=0.9"  );
tlhome.add( tlvm1.play(), "-=0.9"  );




$( document ).ready(function() {

var angletmp = "skew("+(angleB+90)+"deg)";
//console.log(angletmp);

$(menubg).css({
  left: -(2.5*sideB),
  width:offset+sideB,
  height:$(window).height(),
  'transform': angletmp
})

tlhome.play();
tlmenu1.play();


/*  MENU CLICK */
$( menubcont ).click(function() {
	if ( $(this).hasClass("is-active")) {
    $("#menu").removeClass('is-active');
  	var hidemenuhome = new TimelineLite();
    hidemenuhome.add(showmenuitems.reverse(), "-=1");
  	hidemenuhome.add(tlmw1.reverse());
    hidemenuhome.add(tlhome.play(), "-=0.21");
    hidemenuhome.add(TweenLite.to($(mwrap), 0.5, {ease: Power3.easeOut,display:"none"}));
    hidemenuhome.add(function(){$(menubcont).removeClass('is-active');});
    

	} else {
    $("#menu").addClass('is-active');
  	var showmenuhome = new TimelineLite();
    showmenuhome.add(tlhome.timeScale(1.2).reverse(),"-=1");
    showmenuhome.add(tlmw1.play(), "-=1");
    showmenuhome.add(TweenLite.to($(mwrap), 0.1, {ease: Power3.easeOut,display:"block"}));
    showmenuhome.add(showmenuitems.play());
    showmenuhome.add(function(){$(menubcont).addClass('is-active');});
    	
	}
});



/*  MENU BUTTON HOVER */
$('.mb-cont').hover(
  function() {
    mbhover.play();
  }, function() {
    mbhover.reverse();
  }
);
})