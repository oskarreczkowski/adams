/*ts6 +3*/
/*ts3*/
/*ts6*/


/*  HOME SET OF TWEENS */
  var homepage = $(".homepage");
  var txt1 = $(".text-1");
  var txt2 = $(".text-2");
  var tit1 = $(".title-1");
  var vmore = $(".view-more");
  var menubcont = $(".mb-cont");
  var mbut = $("#menu");
  var menubg = $('.menu-bg');
  var vmca = $(".view-more .circle-arrow");
  var vmcabg = $(".view-more .ca-bg");
  var line1 = $('.line-1');
  var line2 = $('.line-2');
  var mwrap = $('.menu-wrapper');
  var circle = $('.orange-circle');
  var square = $('.blue-square');
  var triangle = $('.pink-triangle');
  var character1 = $('.menu-character1');
  var character2 = $('.menu-character2');
  var character3 = $('.menu-character3');

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

var acircle = new TimelineLite({paused:true});
acircle.add( TweenLite.from(circle, 1, {opacity:0, ease: Power3.easeOut, y:+50}));

var atriangle = new TimelineLite({paused:true});
atriangle.add( TweenLite.from(triangle, 1, {opacity:0, ease: Power3.easeOut, y:-150}));

var asquare = new TimelineLite({paused:true});
asquare.add( TweenLite.from(square, 1, {opacity:0, ease: Power3.easeOut, x:+50}));

var achar1 = new TimelineLite({paused:true});
achar1.add( TweenLite.from(character1, 1, {opacity:0, ease: Power3.easeOut, y:+50}));
var achar2 = new TimelineLite({paused:true});
achar2.add( TweenLite.from(character2, 1, {opacity:0, ease: Power3.easeOut, y:+150}));
var achar3 = new TimelineLite({paused:true});
achar3.add( TweenLite.from(character3, 1, {opacity:0, ease: Power3.easeOut, y:-150}));





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


var vmhover = new TimelineLite({paused:true});
vmhover.add( TweenLite.to(vmca, 0.5, {    width:"+=10",height:"+=10", y:"-=5px", x:"-=5px", ease: Power3.easeOut}));
vmhover.add( TweenLite.to(vmcabg, 0.5, {    width:"+=10",height:"+=10", y:"-=5px", x:"-=5px", ease: Power3.easeOut}), "-=0.2");




var showmenuitems = new TimelineLite({paused:true});
showmenuitems.add( TweenLite.from(line1, 0.5, {ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"), opacity:0,width:0 }));
showmenuitems.add( TweenLite.from(line2, 0.5, {ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"), opacity:0,width:0 }));
showmenuitems.add( TweenLite.from($('.link-home'), 0.5, {ease: Power3.easeOut, y:"-=50px",opacity:0}));
showmenuitems.add( TweenLite.from($('.link-projects'), 0.5, {ease: Power3.easeOut, y:"-=50px",opacity:0}),"-=0.2");
showmenuitems.add( TweenLite.from($('.link-about'), 0.5, {ease: Power3.easeOut, y:"-=50px",opacity:0}),"-=0.3");
showmenuitems.add( TweenLite.from($('.email-info'), 0.5, {ease: Power3.easeOut, x:"-=50px",opacity:0}));
showmenuitems.add( achar1.play(),"-=0.8");
showmenuitems.add( achar2.play(),"-=0.8");
showmenuitems.add( achar3.play(),"-=0.8");


/*  PROJECTS MAIN TIMELINE */
var tlprojects = new TimelineLite({paused:true});
tlprojects.add( TweenLite.to(homepage, 0, {display:"block"} ));
tlprojects.add( tltit1.play() );
tlprojects.add( tltxt1.play(), "-=0.9"  );
tlprojects.add( tltxt2.play(), "-=0.9"  );



/*  HOME MAIN TIMELINE */
var tlhome = new TimelineLite({paused:true});
tlhome.add( TweenLite.to(homepage, 0, {display:"block"} ));
tlhome.add( tltit1.play() );
tlhome.add( tltxt1.play(), "-=0.9"  );
tlhome.add( tltxt2.play(), "-=0.9"  );
tlhome.add( tlvm1.play(), "-=0.9"  );
tlhome.add( acircle.play(), "-=0.9"  );
tlhome.add( atriangle.play(), "-=0.9"  );
tlhome.add( asquare.play(), "-=0.9"  );





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
  if ( $(this).hasClass('working')) {
    
  } else if ( $(this).data('page') == "home" ) {
  	if ( $(this).hasClass("is-active"))  {

      console.log($(this).data('page'));
      $(menubcont).addClass('working');
      $("#menu").removeClass('is-active');
    	var hidemenuhome = new TimelineLite();
      hidemenuhome.add(showmenuitems.reverse(), "-=1");
    	hidemenuhome.add(tlmw1.reverse());
      hidemenuhome.add(tlhome.play(), "-=0.21");
      hidemenuhome.add(TweenLite.to($(mwrap), 0.5, {ease: Power3.easeOut,display:"none"}));
      hidemenuhome.add(function(){$(menubcont).removeClass('is-active');});
      hidemenuhome.add(function(){$(menubcont).removeClass('working');});
      

  	} else {
      $(menubcont).addClass('working');
      $("#menu").addClass('is-active');
      console.log($(this).data('page'));
    	var showmenuhome = new TimelineLite();
      showmenuhome.add(tlhome.reverse().timeScale(1.2));
      showmenuhome.add(tlmw1.play(), "-=1");
      showmenuhome.add(TweenLite.to($(mwrap), 0.1, {ease: Power3.easeOut,display:"block"}));
      showmenuhome.add(showmenuitems.play());
      showmenuhome.add(function(){$(menubcont).addClass('is-active');});
      showmenuhome.add(function(){$(menubcont).removeClass('working');});
      	
  	}
  } else if ( $(this).data('page') == "projects" ) {
    if ( $(this).hasClass("is-active"))  {

      console.log($(this).data('page'));
      $(menubcont).addClass('working');
      $("#menu").removeClass('is-active');
      var hidemenuhome = new TimelineLite();
      hidemenuhome.add(showmenuitems.reverse(), "-=1");
      hidemenuhome.add(tlmw1.reverse());
      hidemenuhome.add(TweenLite.to($(mwrap), 0.5, {ease: Power3.easeOut,display:"none"}));
      hidemenuhome.add(function(){$(menubcont).removeClass('is-active');});
      hidemenuhome.add(function(){$(menubcont).removeClass('working');});
      

    } else {
      $(menubcont).addClass('working');
      $("#menu").addClass('is-active');
      console.log($(this).data('page'));
      var showmenuhome = new TimelineLite();
      showmenuhome.add(tlmw1.play(), "-=1");
      showmenuhome.add(TweenLite.to($(mwrap), 0.1, {ease: Power3.easeOut,display:"block"}));
      showmenuhome.add(showmenuitems.play());
      showmenuhome.add(function(){$(menubcont).addClass('is-active');});
      showmenuhome.add(function(){$(menubcont).removeClass('working');});
        
    }
  }
});

/* CLICK ON HOME MENU ITEM */
  $('.link-home').click(function(){
      $(menubcont).addClass('working');
      $(menubcont).data("page", "home");
      $("#menu").removeClass('is-active');
      var hidemenuhome = new TimelineLite();
      hidemenuhome.add(showmenuitems.reverse(), "-=1");
      hidemenuhome.add(tlmw1.reverse());
      hidemenuhome.add(tlhome.play(), "-=0.21");
      hidemenuhome.add(TweenLite.to($(mwrap), 0.5, {ease: Power3.easeOut,display:"none"}));
      hidemenuhome.add(function(){$(menubcont).removeClass('is-active');});
      hidemenuhome.add(function(){$(menubcont).removeClass('working');});
  });


/* CLICK ON HOME MENU ITEM */
  $('.link-projects').click(function(){
      $(menubcont).addClass('working');
      $(menubcont).data("page", "projects");
      $("#menu").removeClass('is-active');
      var hidemenuhome = new TimelineLite();
      hidemenuhome.add(showmenuitems.reverse(), "-=1");
      hidemenuhome.add(tlmw1.reverse());
      //hidemenuhome.add(tlhome.play(), "-=0.21");
      hidemenuhome.add(TweenLite.to($(mwrap), 0.5, {ease: Power3.easeOut,display:"none"}));
      hidemenuhome.add(function(){$(menubcont).removeClass('is-active');});
      hidemenuhome.add(function(){$(menubcont).removeClass('working');});
  });



/*  MENU BUTTON HOVER */
$('.mb-cont').hover(
  function() {
    mbhover.play();
  }, function() {
    mbhover.reverse();
  }
);

/*  VIEW PROJECTS HOVER */
$('.view-more').hover(
  function() {
    vmhover.play();
  }, function() {
    vmhover.reverse();
  }
);

/*  MENU BUTTON HOVER */
$('.mitem').hover(
  function() {
    TweenLite.to($(this).find('.bbar'), 1, {   width:100,'margin-right':30, ease: Power3.easeOut});
  }, function() {
    TweenLite.to($(this).find('.bbar'), 1, {   width:0,'margin-right':0, ease: Power3.easeOut});
  }
);



})