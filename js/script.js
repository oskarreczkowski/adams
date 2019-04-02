/*ts 6 sroda  02.06 + 1call??*/
/*ts 3 sroda 02.06  */
/*ts 6 czwartek  02.07 */
/*ts 3 piatek  02.08 */
/*ts 4 piatek 02.08 */
/*ts 2 sobota 02.09 */
/*ts 6 niedziela 02.10 */
/*ts 3 poniedzialek 02.11 */
/*ts 3 wtorek 02.19 */
/*ts 3 czwartek 03.07 */
/*ts 4 piątek 03.08 */
/*ts 4 sobota 03.09 */
/*ts 1 niedziela 03.10 */
/*ts 2 sroda 03.13 */
/*ts 2 czwartek 03.14 */
/*ts 3 piatek 03.15 */
/*ts 1 wtorek 03.19 */
/*ts 2 sroda 03.20 */
/*ts 5 czwartek 03.21 */
/*ts 5 piątek 03.22 */
/*ts 1 czwartek 03.28 */
/*ts 3 czwartek 04.01 */

/*total 71 - 40 = 31 */



// Plugin @RokoCB :: Return the visible amount of px
// of any element currently in viewport.
// stackoverflow.com/questions/24768795/
  (function($, win) {
    $.fn.inViewport = function(cb) {
       return this.each(function(i,el){
         function visPx(){
           var H = $(this).height(),
               r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
           return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
         } visPx();
         $(win).on("resize scroll", visPx);
       });
    };
  }(jQuery, $('body')));




/*  HOME SET OF TWEENS */
var homepage = $(".homepage");
var txt1 = $(".text-1");
var txt2 = $(".text-2");
var tit1 = $(".title-1");
var vmore = $(".view-more");
var menubcont = $(".mb-cont");
var mbut = $("#menu");
var menubg = $('.menu-bg');
var pagebg = $('.page-bg');
var vmca = $(".view-more .circle-arrow");
var vmcabg = $(".view-more .ca-bg");
var line1 = $('.line-1');
var line2 = $('.line-2');
var mwrap = $('.menu-wrapper');
var circle = $('.orange-circle');
var square = $('.blue-square');
var triangle = $('.homepage-animation');
var character1 = $('.menu-character1');
var character2 = $('.menu-character2');
var character3 = $('.menu-character3');
var projects = $('.projects');



/*  MENU BG SIZE */
var diag = Math.sqrt($(window).height() * $(window).height() + $(window).width() * $(window).width())
//console.log(diag);
var sideA = $(window).height();
var sideB = $(window).width();

//console.log(sideA);

var angleB = Math.asin(sideA / diag) * 180 / Math.PI;

var offset = diag * Math.cos(Math.asin(sideA / diag));

//console.log(angleB+90);
//console.log("offset = "+offset);


var tltxt1 = new TimelineLite({
  paused: true
});
tltxt1.add(TweenLite.from(txt1, 1, {
  opacity: 0,
  ease: Power0.easeNone
}));
tltxt1.add(TweenLite.from(txt1, 1, {
  ease: CustomEase.create("custom", "M0,0 C0.246,0.36 0.156,0.562 0.268,0.698 0.3,0.736 0.504,1 1,1"),
  y: -50
}), "-=0.8");


var tltit1 = new TimelineLite({
  paused: true
});
tltit1.add(TweenLite.from(tit1, 1, {
  opacity: 0,
  ease: Power0.easeNone
}));
tltit1.add(TweenLite.from(tit1, 1, {
  ease: CustomEase.create("custom", "M0,0 C0.246,0.36 0.156,0.562 0.268,0.698 0.3,0.736 0.504,1 1,1"),
  y: -70
}), "-=0.7");

var tltxt2 = new TimelineLite({
  paused: true
});
tltxt2.add(TweenLite.from(txt2, 1, {
  opacity: 0,
  ease: Power0.easeNone
}));
tltxt2.add(TweenLite.from(txt2, 1, {
  ease: CustomEase.create("custom", "M0,0 C0.246,0.36 0.156,0.562 0.268,0.698 0.3,0.736 0.504,1 1,1"),
  y: +50
}), "-=0.8");

var acircle = new TimelineLite({
  paused: true
});
acircle.add(TweenLite.from(circle, 1, {
  opacity: 0,
  ease: Power3.easeOut,
  y: +50
}));

var atriangle = new TimelineLite({
  paused: true
});
atriangle.add(TweenLite.from(triangle, 1, {
  opacity: 0,
  ease: Power3.easeOut,
}));

var asquare = new TimelineLite({
  paused: true
});
asquare.add(TweenLite.from(square, 1, {
  opacity: 0,
  ease: Power3.easeOut,
  x: +50
}));

var achar1 = new TimelineLite({
  paused: true
});
achar1.add(TweenLite.from(character1, 1, {
  opacity: 0,
  ease: Power3.easeOut,
  y: +80,
  x: -80
}));
var achar2 = new TimelineLite({
  paused: true
});
achar2.add(TweenLite.from(character2, 1, {
  opacity: 0,
  ease: Power3.easeOut,
  y: +150,
  x: +150
}));
var achar3 = new TimelineLite({
  paused: true
});
achar3.add(TweenLite.from(character3, 1, {
  opacity: 0,
  ease: Power3.easeOut,
  y: -150,
  x: +150
}));


var tlvm1 = new TimelineLite({
  paused: true
});
tlvm1.add(TweenLite.from(vmore, 1, {
  opacity: 0,
  ease: Power0.easeNone
}));
tlvm1.add(TweenLite.from(vmore, 1, {
  ease: CustomEase.create("custom", "M0,0 C0.246,0.36 0.156,0.562 0.268,0.698 0.3,0.736 0.504,1 1,1"),
  y: +50
}), "-=1");


var tlmenu1 = new TimelineLite({
  paused: true
});
tlmenu1.add(TweenLite.from(menubcont, 1, {
  ease: CustomEase.create("custom", "M0,0 C0.246,0.36 0.156,0.562 0.268,0.698 0.3,0.736 0.504,1 1,1"),
  y: -150,
  delay:.55
}));
tlmenu1.add(TweenLite.to(menubcont, 1, {
  opacity: 1,
  ease: Power0.easeNone
}), "-=0.8");


//var tlmw1 = new TimelineLite({paused:true});
//tlmw1.add( TweenLite.to(menubg, 0, {opacity:1, ease: Power3.easeOut}));
//tlmw1.add( TweenLite.to(menubg, 1, {ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"), left:-0.5*sideB}), "0");
//tlmw1.add( function(){menubg.css('display','none')  });


var mline1 = new TimelineLite({
  paused: true
});
mline1.add(TweenLite.to(line1, 1, {
  ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
  left: "-50%"
}), "-=0.8");

var mbhover = new TimelineLite({
  paused: true
});
mbhover.add(TweenLite.to(mbut, 0.35, {
  padding: "15px 16px",
  y: "-=6px",
  x: "-=6px",
  ease: Power3.easeOut
}));
mbhover.add(TweenLite.to($('.mb-bg'), 0.35, {
  width: "69px",
  height: "70px",
  y: "-=6px",
  x: "-=6px",
  opacity: .8,
  ease: Power3.easeOut
}), "-=0.15");


var showmenuitems = new TimelineLite({
  paused: true
});
showmenuitems.add(TweenLite.from(line1, 0.4, {
  ease: CustomEase.create("custom", "M0,0 C0.446,0.442 0.33,0.751 0.558,0.918 0.656,0.99 0.752,1 1,1"),
  width: 0
}));
showmenuitems.add(TweenLite.from(line2, 0.4, {
  ease: CustomEase.create("custom", "M0,0 C0.446,0.442 0.33,0.751 0.558,0.918 0.656,0.99 0.752,1 1,1"),
  width: 0
}), "-=0.1");
showmenuitems.add(TweenLite.from($('.link-home'), 0.5, {
  ease: Power3.easeOut,
  y: "-=50px",
  opacity: 0
}), "-=0.25");
showmenuitems.add(TweenLite.from($('.link-projects'), 0.5, {
  ease: Power3.easeOut,
  y: "-=50px",
  opacity: 0
}), "-=0.35");
showmenuitems.add(TweenLite.from($('.link-about'), 0.5, {
  ease: Power3.easeOut,
  y: "-=50px",
  opacity: 0
}), "-=0.35");
showmenuitems.add(TweenLite.from($('.email-info'), 0.5, {
  ease: Power3.easeOut,
  x: "-=50px",
  opacity: 0
}), "-=0.25");
showmenuitems.add(achar1.play(), "-=0.92");
showmenuitems.add(achar2.play(), "-=0.8");
showmenuitems.add(achar3.play(), "-=0.87");






/*  PROJECTS MAIN TIMELINE */
var tlprojects = new TimelineLite({
  paused: true
});
tlprojects.add(TweenLite.to(homepage, 0, {
  display: "block"
}));
tlprojects.add(tltit1.play());
tlprojects.add(tltxt1.play(), "-=0.9");
tlprojects.add(tltxt2.play(), "-=0.9");


/*  HOME MAIN TIMELINE */
var tlhome = new TimelineLite({
  paused: true
});
tlhome.add(TweenLite.to(homepage, 0, {
  display: "block"
}));

tlhome.add(tltit1.play());
tlhome.add(tltxt1.play(), "-=0.9");
tlhome.add(atriangle.play(), "-=0.7" );
tlhome.add(tltxt2.play(), "-=1.6" );
tlhome.add(tlvm1.play(), "-=1" );
tlhome.add(function () {
  $('body').removeClass('working')
});


$(document).ready(function () {

    
      var angletmp = "skew(" + (angleB + 100) + "deg)";
      $(menubg).css({
        left: "-250%",
        width: "200%",
        height: "100%",
        'transform': angletmp
      })

      $(pagebg).css({
        left: "-50%",
        width: "200%",
        height: "100%",
        'transform': angletmp
      });
/*START Adjust the diagonal line angle when resize */
  $( window ).resize(function() {
      var diag = Math.sqrt($(window).height() * $(window).height() + $(window).width() * $(window).width())
      var sideA = $(window).height();
      var sideB = $(window).width();
      var angleB = Math.asin(sideA / diag) * 180 / Math.PI;
      var offset = diag * Math.cos(Math.asin(sideA / diag));
      var angletmp = "skew(" + (angleB + 100) + "deg)";
      $(menubg).css({
        'transform': angletmp
      })
      $(pagebg).css({
        'transform': angletmp
      })
  });
/*END Adjust the diagonal line angle when resize */



  tlhome.play();
  tlmenu1.play();

  /*  MENU CLICK */
  $(menubcont).click(function () {
    if ($('body').hasClass('working')) {

    } else if ($(this).data('page') == "home") {
      if ($(this).hasClass("is-active")) {

        //console.log($(this).data('page'));
        $('body').addClass('working');
        $("#menu").removeClass('is-active');
        var hidemenuhome = new TimelineLite();
        //hidemenuhome.add(showmenuitems.reverse(), "-=0.5");
        hidemenuhome.add(TweenLite.to($(line1), 0.4, {
          ease:  Power3.easeOut,
          width: 0
        }));
        hidemenuhome.add(TweenLite.to($(line2), 0.4, {
          ease:  Power3.easeOut,
          width: 0
        }), '-=0.2');

        hidemenuhome.add(TweenLite.to($(character1), 0.3, {
          ease:  Power3.easeOut,
          y: +80,
          x: -80,
          opacity: 0
        }), '-=0.1');
        hidemenuhome.add(TweenLite.to($(character2), 0.3, {
          ease:  Power3.easeOut,
          y: +150,
          x: +150,
          opacity: 0
        }), '-=0.2');
        hidemenuhome.add(TweenLite.to($(character3), 0.3, {
          ease:  Power3.easeOut,
          y: -150,
          x: +150,
          opacity: 0
        }), '-=0.3');
        hidemenuhome.add(TweenLite.to($('.menu-wrapper'), 0.8, {
          ease:  Power3.easeOut,
          top:'20px',
          opacity:0
        }), '-=0.2');
        hidemenuhome.add(function () {
          $(menubcont).removeClass('is-active');
        });
        hidemenuhome.add(TweenLite.to(menubg, 0.8, {
          ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
          left: "-250%"
        }), "-=0.7");
        hidemenuhome.add(tlhome.play(), "-=0.21");
        hidemenuhome.add(TweenLite.to($(mwrap), 0.5, {
          ease: Power3.easeOut,
          display: "none"
        }));
        hidemenuhome.add(function () {
          $('body').removeClass('working');
        });


      } else {
        $('body').addClass('working');
        $("#menu").addClass('is-active');
        //console.log($(this).data('page'));
        var showmenuhome = new TimelineLite();
        //showmenuhome.add(tlhome.reverse().timeScale(1.2));
        showmenuhome.add(function () {
          $(menubcont).addClass('is-active');
        });

        showmenuhome.add(TweenLite.to($('.menu-wrapper'), 0, {
          ease:  Power3.easeOut,
          opacity:1,
          top: "calc(50% - 240px)"
        }));
        showmenuhome.add(TweenLite.to(menubg, 1, {
          ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
          left: "-50%"
        }));
        showmenuhome.add(TweenLite.to($(mwrap), 0.1, {
          ease: Power3.easeOut,
          display: "block"
        }), "-=0.8");
        showmenuhome.add(showmenuitems.play());
        showmenuhome.add(function () {
          $('body').removeClass('working');
        });

      }
    } else if ($(this).data('page') == "projects") {
      if ($(this).hasClass("is-active")) {

        //console.log($(this).data('page'));
        $('body').addClass('working');
        $("#menu").removeClass('is-active');
        var hidemenuhome = new TimelineLite();
        //hidemenuhome.add(showmenuitems.reverse(), "-=1");
        hidemenuhome.add(TweenLite.to($(line1), 0.4, {
          ease:  Power3.easeOut,
          width: 0
        }));
        hidemenuhome.add(TweenLite.to($(line2), 0.4, {
          ease:  Power3.easeOut,
          width: 0
        }), '-=0.2');

        hidemenuhome.add(TweenLite.to($(character1), 0.3, {
          ease:  Power3.easeOut,
          y: +80,
          x: -80,
          opacity: 0
        }), '-=0.1');
        hidemenuhome.add(TweenLite.to($(character2), 0.3, {
          ease:  Power3.easeOut,
          y: +150,
          x: +150,
          opacity: 0
        }), '-=0.2');
        hidemenuhome.add(TweenLite.to($(character3), 0.3, {
          ease:  Power3.easeOut,
          y: -150,
          x: +150,
          opacity: 0
        }), '-=0.3');
        hidemenuhome.add(TweenLite.to($('.menu-wrapper'), 0.8, {
          ease:  Power3.easeOut,
          top:'20px',
          opacity:0
        }), '-=0.2');
        hidemenuhome.add(function () {
          $(menubcont).removeClass('is-active');
        });
        hidemenuhome.add(TweenLite.to(menubg, 0.8, {
          ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
          left: "-250%"
        }), "-=0.7");
        hidemenuhome.add(TweenLite.to($(mwrap), 0.5, {
          ease: Power3.easeOut,
          display: "none"
        }));
        hidemenuhome.add(function () {
          $('body').removeClass('working');
        });


      } else {
        $('body').addClass('working');
        $("#menu").addClass('is-active');
        //console.log($(this).data('page'));
        var showmenuhome = new TimelineLite();
        showmenuhome.add(function () {
          $(menubcont).addClass('is-active');
        });
        showmenuhome.add(TweenLite.to($('.menu-wrapper'), 0, {
          ease:  Power3.easeOut,
          opacity:1,
          top: "calc(50% - 240px)"
        }));
        showmenuhome.add(TweenLite.to(menubg, 1, {
          ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
          left: "-50%"
        }), "+=0.2");
        showmenuhome.add(TweenLite.to($(mwrap), 0.1, {
          ease: Power3.easeOut,
          display: "block"
        }));
        showmenuhome.add(showmenuitems.play());
        showmenuhome.add(function () {
          $('body').removeClass('working');
        });

      }
    } else if ($(this).data('page') == "about") {
      if ($(this).hasClass("is-active")) {

        //console.log($(this).data('page'));
        $('body').addClass('working');
        $("#menu").removeClass('is-active');
        var hidemenuhome = new TimelineLite();
        //hidemenuhome.add(showmenuitems.reverse(), "-=1");
        hidemenuhome.add(TweenLite.to($(line1), 0.4, {
          ease:  Power3.easeOut,
          width: 0
        }));
        hidemenuhome.add(TweenLite.to($(line2), 0.4, {
          ease:  Power3.easeOut,
          width: 0
        }), '-=0.2');

        hidemenuhome.add(TweenLite.to($(character1), 0.3, {
          ease:  Power3.easeOut,
          y: +80,
          x: -80,
          opacity: 0
        }), '-=0.1');
        hidemenuhome.add(TweenLite.to($(character2), 0.3, {
          ease:  Power3.easeOut,
          y: +150,
          x: +150,
          opacity: 0
        }), '-=0.2');
        hidemenuhome.add(TweenLite.to($(character3), 0.3, {
          ease:  Power3.easeOut,
          y: -150,
          x: +150,
          opacity: 0
        }), '-=0.3');
        hidemenuhome.add(TweenLite.to($('.menu-wrapper'), 0.8, {
          ease:  Power3.easeOut,
          top:'20px',
          opacity:0
        }), '-=0.2');
        hidemenuhome.add(function () {
          $(menubcont).removeClass('is-active');
        });
        hidemenuhome.add(TweenLite.to(menubg, 0.8, {
          ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
          left: "-250%"
        }), "-=0.7");
        hidemenuhome.add(TweenLite.to($(mwrap), 0.5, {
          ease: Power3.easeOut,
          display: "none"
        }));
        hidemenuhome.add(function () {
          $('body').removeClass('working');
        });


      } else {
        $('body').addClass('working');
        $("#menu").addClass('is-active');
        //console.log($(this).data('page'));
        var showmenuhome = new TimelineLite();
        showmenuhome.add(function () {
          $(menubcont).addClass('is-active');
        });
        showmenuhome.add(TweenLite.to($('.menu-wrapper'), 0, {
          ease:  Power3.easeOut,
          opacity:1,
          top: "calc(50% - 240px)"
        }));
        showmenuhome.add(TweenLite.to(menubg, 1, {
          ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
          left: "-50%"
        }), "+=0.2");
        showmenuhome.add(TweenLite.to($(mwrap), 0.1, {
          ease: Power3.easeOut,
          display: "block"
        }));
        showmenuhome.add(showmenuitems.play());
        showmenuhome.add(function () {
          $('body').removeClass('working');
        });

      }
    }
    if ($(".detailedProject").length) {


      $('.project-container').unbind('wheel');
      var activeProjectId = $('.project-container.activeProject').data('projectid');
      var activeProject = $('.project-container.activeProject');
      var viewworkpage2 = new TimelineLite();

      viewworkpage2.add(TweenLite.to($('.back'), 1, {
        ease: Power3.easeOut,
        opacity: 0,
        top: "-100px",
        right: "-30px"
      }), "0");
      viewworkpage2.add(TweenLite.to(activeProject, 1, {
        ease: Power3.easeOut,
        top: "80px"
      }), "0.5");
      viewworkpage2.add(TweenLite.to($(this).parent().find('.roles'), 1, {
        ease: Power3.easeOut,
        opacity: 0,
        display: "none",
        top: "230px"
      }), "-=1.5");
      viewworkpage2.add(TweenLite.to($(this).parent().find('.pdesc'), 1, {
        ease: Power3.easeOut,
        opacity: 1
      }) );
      viewworkpage2.add(TweenLite.to($('.mb-cont'), 1, {
        ease: Power3.easeOut,
        left: "20px"
      }), "-=1.5");
      viewworkpage2.add( function(){$(activeProject).find('.vp-button-cont').fadeIn() });

      /*viewworkpage2.add(TweenLite.to($(activeProject).find('.vp-button-cont'), 1, {
        ease: Power3.easeOut,
        opacity: 1,
        //top: "+=100px",
        "display": "inline-block"
      }), "-=1.5");
      viewworkpage2.add(TweenLite.to($('.projects-indicator'), 1, {
        ease: Power3.easeOut,
        opacity: 1,
        y: "-=50px"
      }), "-=1.5");
      viewworkpage2.add(TweenLite.to($('.navigation-left'), 1, {
        ease: Power3.easeOut,
        opacity: 1,
        left: "0"
      }), "-=1.5");
      viewworkpage2.add(TweenLite.to($('.navigation-right'), 1, {
        ease: Power3.easeOut,
        opacity: 1,
        right: "88px"
      }), "-=1");*/

      viewworkpage2.add( function(){$('.projects-indicator').removeClass('outView').addClass('inView') });
      viewworkpage2.add( function(){$('.navigation-left').removeClass('outView').addClass('inView') });
      viewworkpage2.add( function(){$('.navigation-right').removeClass('outView').addClass('inView') });
      viewworkpage2.add(TweenLite.to($(this).parent().find('.pimg'), 1, {
        ease: Power3.easeOut,
        opacity: 0,
        margin: "0",
        top: '0',
        display: "none"
      }), "-=2");

      $(".activeProject").removeClass('activeProject');
      $(".detailedProject").removeClass('detailedProject');

    }
  });

  /* CLICK ON HOME MENU ITEM */
  $('.link-home').click(function () {
    if ($('body').hasClass('working')) {

    } else {
      $('body').addClass('working');
      $(menubcont).data("page", "home");
      $('.about').hide();

      $(pagebg).show();
      $("#menu").removeClass('is-active');
      var hidemenuhome = new TimelineLite();
      hidemenuhome.add(function () {
        $(homepage).show();
      });
      /*  
      hidemenuhome.add(TweenLite.to(pagebg, 0, {
        ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
        left: "-50%"
      }), "+=0.2");*/

      hidemenuhome.add(TweenLite.to(pagebg, 0, {
        ease: Power3.easeOut,
        left: "-50%",
        opacity:1,
        display:"block"
      }), "+=0.2");

      hidemenuhome.add(TweenLite.to($(line1), 0.4, {
        ease:  Power3.easeOut,
        width: 0
      }));
      hidemenuhome.add(TweenLite.to($(line2), 0.4, {
        ease:  Power3.easeOut,
        width: 0
      }), '-=0.2');

      hidemenuhome.add(TweenLite.to($(character1), 0.3, {
        ease:  Power3.easeOut,
        y: +80,
        x: -80,
        opacity: 0
      }), '-=0.1');
      hidemenuhome.add(TweenLite.to($(character2), 0.3, {
        ease:  Power3.easeOut,
        y: +150,
        x: +150,
        opacity: 0
      }), '-=0.2');
      hidemenuhome.add(TweenLite.to($(character3), 0.3, {
        ease:  Power3.easeOut,
        y: -150,
        x: +150,
        opacity: 0
      }), '-=0.3');
      hidemenuhome.add(TweenLite.to($('.menu-wrapper'), 0.8, {
        ease:  Power3.easeOut,
        top:'20px',
        opacity:0
      }), '-=0.2');
      hidemenuhome.add(TweenLite.to($(projects), 0, {
        ease: Power3.easeOut,
        display: "none"
      }));
      hidemenuhome.add(TweenLite.to(menubg, 0.8, {
        ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
        left: "-250%"
      }), "-=0.7");
      //hidemenuhome.add( hidemenubg );
      hidemenuhome.add(tlhome.play() );
      hidemenuhome.add(TweenLite.to($(mwrap), 0.5, {
        ease: Power3.easeOut,
        display: "none"
      }));
      hidemenuhome.add(function () {
        $(menubcont).removeClass('is-active');
      });
      hidemenuhome.add(function () {
        $('body').removeClass('working');
      });
    }
  });


  /* CLICK ON PROJECTS MENU ITEM */
  $('.link-projects').click(function () {
    if ($('body').hasClass('working')) {

    } else {
      //$(menubg).css('left', -(0.5*sideB));
      $('body').addClass('working');
      $(menubcont).data("page", "projects");
      $('.about').hide();
      if ($('.projects').data('currentproject') != 1) {
        changeproject($('.projects').data('currentproject') - 1, $('.projects').data('currentproject'),'');
      } else {
        changeproject(1, 1,'');
      }


      $('.project-container').hide();
      $('.project-container.activeProject').hide();
      $(pagebg).hide();
      $("#menu").removeClass('is-active');
      var hidemenuhome = new TimelineLite();
      hidemenuhome.add(function () {
        $(homepage).hide();
      });
      //hidemenuhome.add(showmenuitems.reverse(), "-=1");
      hidemenuhome.add(TweenLite.to($(line1), 0.4, {
        ease:  Power3.easeOut,
        width: 0
      }));
      hidemenuhome.add(TweenLite.to($(line2), 0.4, {
        ease:  Power3.easeOut,
        width: 0
      }), '-=0.2');

      hidemenuhome.add(TweenLite.to($(character1), 0.3, {
        ease:  Power3.easeOut,
        y: +80,
        x: -80,
        opacity: 0
      }), '-=0.1');
      hidemenuhome.add(TweenLite.to($(character2), 0.3, {
        ease:  Power3.easeOut,
        y: +150,
        x: +150,
        opacity: 0
      }), '-=0.2');
      hidemenuhome.add(TweenLite.to($(character3), 0.3, {
        ease:  Power3.easeOut,
        y: -150,
        x: +150,
        opacity: 0
      }), '-=0.3');
      hidemenuhome.add(TweenLite.to($('.menu-wrapper'), 0.8, {
        ease:  Power3.easeOut,
        top:'20px',
        opacity:0
      }), '-=0.2');
      hidemenuhome.add(TweenLite.to(menubg, 0.8, {
        ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
        left: "-250%"
      }), "-=0.7");
      hidemenuhome.add(TweenLite.to($('.projects'), 0, {
        ease: Power3.easeOut,
        display: "block"
      }, "0"));
      hidemenuhome.add(TweenLite.to($('.project-container[data-projectid="1"]'), 0, {
        ease: Power3.easeOut,
        display: 'block'
      }, '0'));
      hidemenuhome.add(TweenLite.to($(mwrap), 0.5, {
        ease: Power3.easeOut,
        display: "none"
      }));
      /*hidemenuhome.add(TweenLite.from([$('.navigation-left'), $('.navigation-right')], 1, {
        ease: Power3.easeOut,
        opacity: 0,
        y: "-=50px"
      }), "-=0.2");
      hidemenuhome.add(TweenLite.from($('.projects-indicator'), 1, {
        ease: Power3.easeOut,
        opacity: 0,
        y: "+=50px"
      }), "-=0.7");*/

      //hidemenuhome.add( function(){$('.projects-indicator').removeClass('outView').addClass('inView') });
      //hidemenuhome.add( function(){$('.navigation-left').removeClass('outView').addClass('inView') });
      hidemenuhome.add( function(){$('.projects-indicator').removeClass('outView').addClass('inView') });
      hidemenuhome.add( function(){$('.navigation-right').removeClass('outView').addClass('inView') });
      hidemenuhome.add( function(){$('.navigation-left').removeClass('outView').addClass('inView') });

      hidemenuhome.add(function () {
        $(menubcont).removeClass('is-active');
      });
      hidemenuhome.add(function () {
        $('body').removeClass('working');
      });

    }
  });


  /* CLICK ON ABOUT MENU ITEM */
  $('.link-about').click(function () {
    if ($('body').hasClass('working')) {

    } else {
      //$(menubg).css('left', -(0.5*sideB));
      $('body').addClass('working');

      $('.homepage').hide();
      $('.projects').hide();
      $('.about').show();

      $(menubcont).data("page", "about");
      $("#menu").removeClass('is-active');
      var aboutanimation = new TimelineLite();
      //aboutanimation.add(showmenuitems.reverse(), "-=1");
      aboutanimation.add(TweenLite.to($(line1), 0.4, {
        ease:  Power3.easeOut,
        width: 0
      }));
      aboutanimation.add(TweenLite.to($(line2), 0.4, {
        ease:  Power3.easeOut,
        width: 0
      }), '-=0.2');

      aboutanimation.add(TweenLite.to($(character1), 0.3, {
        ease:  Power3.easeOut,
        y: +80,
        x: -80,
        opacity: 0
      }), '-=0.1');
      aboutanimation.add(TweenLite.to($(character2), 0.3, {
        ease:  Power3.easeOut,
        y: +150,
        x: +150,
        opacity: 0
      }), '-=0.2');
      aboutanimation.add(TweenLite.to($(character3), 0.3, {
        ease:  Power3.easeOut,
        y: -150,
        x: +150,
        opacity: 0
      }), '-=0.3');
      aboutanimation.add(TweenLite.to($('.menu-wrapper'), 0.8, {
        ease:  Power3.easeOut,
        top:'20px',
        opacity:0
      }), '-=0.2');
      aboutanimation.add(TweenLite.to($(projects), 0, {
        ease: Power3.easeOut,
        display: "none"
      }));
      aboutanimation.add(TweenLite.to(menubg, 0.8, {
        ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
        left: "-250%"
      }), "-=0.7");
      //hidemenuhome.add( hidemenubg );
      $('.projects').hide();
      aboutanimation.add(TweenLite.to($('.about'), 0, {
        ease: Power3.easeOut,
        display: "block",
        "z-index": 1
      }, "0"));

      //hidemenuhome.add(tlhome.play(), "-=0.21");
      aboutanimation.add(TweenLite.to($(mwrap), 0.5, {
        ease: Power3.easeOut,
        display: "none"
      }));

      aboutanimation.add(function () {
        $(menubcont).removeClass('is-active');
      });
      aboutanimation.add(function () {
        $('body').removeClass('working');
      });
    }
  });


  /* CLICK ON VIEW WORK ITEM */
  $('.view-more').click(function () {
    if ($('body').hasClass('working')) {

    } else {
      //$(menubg).css('left', -(0.5*sideB));
      $('body').addClass('working');
      $(menubcont).data("page", "projects");

      if ($('.projects').data('currentproject') != 1) {
        changeproject(1, 1,'');
      } else {
        changeproject(1, 1,'');
      }

      $('.project-container').hide();
      $('.project-container.activeProject').hide();
      $("#menu").removeClass('is-active');
      var viewworkpage = new TimelineLite();

      viewworkpage.add(TweenLite.to($('.projects'), 0, {
        ease: Power3.easeOut,
        display: "none",
        opacity:0
      }, "0"));
      viewworkpage.add(TweenLite.to($('.homepage'), 1, {
        ease: Power3.easeOut,
        display: "none",
        opacity:0
      }, "0"));
      //hidemenuhome.add(showmenuitems.reverse(), "-=1");
      //viewworkpage.add(tlhome.reverse().timeScale(1.3));
      /*
      viewworkpage.add(TweenLite.to(pagebg, 1, {
        ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
        left: "-250%"
      }), "+=0.2"); */
      
      viewworkpage.add(TweenLite.to(pagebg, 0.5, {
        ease: Power3.easeOut,
        opacity:0,
        display: "none"
      }), "-=0"); 

      viewworkpage.add(TweenLite.to($('.homepage'), 0.1, {
        ease: Power3.easeOut,
        opacity:1
      }, "0"));


      //hidemenuhome.add( TweenLite.to(menubg, 1, {ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"), left:-2.5*sideB}), "+=0.2"  );
      //hidemenuhome.add( hidemenubg );
      viewworkpage.add(TweenLite.to($('.projects'), 0, {
        ease: Power3.easeOut,
        display: "block",
        opacity:1
      }, "0"));
      viewworkpage.add(TweenLite.to($('.project-container[data-projectid="1"]'), 0, {
        ease: Power3.easeOut,
        display: 'block'
      }, '0'));

      //hidemenuhome.add(tlhome.play(), "-=0.21");
      viewworkpage.add(TweenLite.to($(mwrap), 0.5, {
        ease: Power3.easeOut,
        display: "none"
      }));

      /*viewworkpage.add(TweenLite.from([$('.navigation-left'), $('.navigation-right')], 1, {
        ease: Power3.easeOut,
        opacity: 0,
        y: "-=50px"
      }), "-=0.2");

      viewworkpage.add(TweenLite.from($('.projects-indicator'), 1, {
        ease: Power3.easeOut,
        opacity: 0,
        y: "+=50px"
      }), "-=0.8");
      viewworkpage.add(TweenLite.from($('.picon'), 1.5, {
        ease: Expo.easeInOut,
        opacity: 0,
        y: "-=50px"
      }), "-=1.1");
      */

      viewworkpage.add( function(){$('.projects-indicator').removeClass('outView').addClass('inView') }, '-=1');
      viewworkpage.add( function(){$('.navigation-left').removeClass('outView').addClass('inView') }, '-=1');
      viewworkpage.add( function(){$('.navigation-right').removeClass('outView').addClass('inView') }, '-=1');


      viewworkpage.add(function () {
        $(homepage).hide();
      });
      viewworkpage.add(function () {
        $(menubcont).removeClass('is-active');
      });
      viewworkpage.add(function () {
        $('body').removeClass('working');
      });

    }
  });


  /*  MENU BUTTON HOVER 
  $('.mb-cont').hover(
    function () {
      mbhover.play();
    },
    function () {
      mbhover.reverse();
    }
  );
  var vmhover = new TimelineLite({
    paused: true
  });
  vmhover.add(TweenLite.to(vmca, 0.35, {
    width: "+=10",
    height: "+=10",
    y: "-=5px",
    x: "-=5px",
    ease: Power3.easeOut
  }));
  vmhover.add(TweenLite.to(vmcabg, 0.35, {
    width: "+=10",
    height: "+=10",
    y: "-=5px",
    x: "-=5px",
    opacity: 0.8,
    ease: Power3.easeOut
  }), "-=0.1");

  var vphover = new TimelineLite({
    paused: true
  });
  vphover.add(TweenLite.to($('.vp-button'), 0.35, {
    "line-height": 62,
    width: "+=22",
    height: "+=6",
    y: "-=3px",
    x: "-=11px",
    ease: Power3.easeOut
  }));
  vphover.add(TweenLite.to($('.vp-bg'), 0.35, {
    width: "+=22",
    height: "+=6",
    y: "-=3px",
    x: "-=11px",
    opacity: 0.85,
    ease: Power3.easeOut
  }), "-=0.15");

*/

  /*  VIEW PROJECTS HOVER 
  $('.vp-button-cont').hover(
    function () {
      if (!$("body").hasClass('working')) {
        vphover.play();
        //TweenLite.to($(this).parent().find('.pimg'),0.5, { delay:0.2, width:"+=10%", ease: Power3.easeOut})
      }
    },
    function () {
      vphover.reverse();
      //TweenLite.to($(this).parent().find('.pimg'),0.2, {  width:"-=10%", ease: Power3.easeOut})
    }
  );*/

/*
  $('.view-more').hover(
    function () {
      if (!$("body").hasClass('working')) {
        vmhover.play();
      }
    },
    function () {
      vmhover.reverse();
    }
  );*/

  /*  MENU BUTTON HOVER */
  /*$('.mitem').hover(
    function () {
      if (!$("body").hasClass('working')) TweenLite.to($(this).find('.bbar'), .8, {
        width: 100,
        'margin-right': 10,
        ease: Power4.easeOut
      });
      if (!$("body").hasClass('working')) TweenLite.to($(this), .8, {
        color: "#317bff",
        ease: Power4.easeOut
      });
    },
    function () {
      TweenLite.to($(this).find('.bbar'), .8, {
        width: 0,
        'margin-right': 0,
        ease: Power4.easeOut
      });
      TweenLite.to($(this), .8, {
        color: "#000",
        ease: Power4.easeOut
      });
    }
  );*/
/*
  var hovernavleft = new TimelineLite({
    paused: true
  });
  hovernavleft.add(TweenLite.to($('.navigation-left').find('.arrow'), 0.3, {
    width: "+=10",
    height: "+=10",
    y: "-=5px",
    x: "-=5px",
    ease: Power3.easeOut
  }));
  hovernavleft.add(TweenLite.to($('.navigation-left').find('.bg'), 0.3, {
    width: "+=10",
    height: "+=10",
    y: "-=5px",
    x: "-=5px",
    opacity: .85,
    ease: Power3.easeOut
  }),"-=0.1");
  hovernavleft.add(TweenLite.to($('.navigation-left').find('.line-left'), 0.3, {
    x: "-=30px",
    ease: Power3.easeOut
  }), "-=0.4");

  var hovernavright = new TimelineLite({
    paused: true
  });
  hovernavright.add(TweenLite.to($('.navigation-right').find('.arrow'), 0.3, {
    width: "+=10",
    height: "+=10",
    y: "-=5px",
    x: "-=5px",
    ease: Power3.easeOut
  }));
  hovernavright.add(TweenLite.to($('.navigation-right').find('.bg'), 0.3, {
    width: "+=10",
    height: "+=10",
    y: "-=5px",
    x: "-=5px",
    opacity: .85,
    ease: Power3.easeOut
  }),"-=0.1");
  hovernavright.add(TweenLite.to($('.navigation-right').find('.line-right'), 0.3, {
    x: "+=30px",
    ease: Power3.easeOut
  }), "-=0.4");

*/

  /*  LEFT ARROW HOVER 
  $('.navigation-left').hover(
    function () {
      hovernavleft.play();
    },
    function () {
      hovernavleft.reverse();
    }
  );
*/
  /*  RIGHT ARROW HOVER 
  $('.navigation-right').hover(
    function () {
      hovernavright.play();
    },
    function () {
      hovernavright.reverse();
    }
  );*/

  /* BACK HOVER 
  var hovernavback = new TimelineLite({
    paused: true
  });
  hovernavback.add(TweenLite.to($('.back').find('.circle-x'), 0.3, {
    width: "+=10",
    height: "+=10",
    y: "-=5px",
    x: "-=5px",
    ease: Power3.easeOut
  }));
  hovernavback.add(TweenLite.to($('.back').find('.btp-bg'), 0.3, {
    width: "+=10",
    height: "+=10",
    y: "-=5px",
    x: "-=5px",
    opacity: .85,
    ease: Power3.easeOut
  }),"-=0.1");

  $('.back').hover(
    function () {
      hovernavback.play();
    },
    function () {
      hovernavback.reverse();
    }
  );
*/


  function updatenumber(newNumber) {
    var upnumberanim = new TimelineLite({paused: true});
    if (newNumber < 10) newNumber = "0"+ newNumber;
    upnumberanim.add(TweenLite.to($('.pnumber.active'), 0.5, {
      top: "+=50",
      opacity: 0,
      ease: Power3.easeOut
    }));
    upnumberanim.add(function(){
      $('.pnumber.active').text(newNumber);
    });
    upnumberanim.add(function(){
      $('.pnumber.active').css("top", '-50px');
    });
    upnumberanim.add(TweenLite.to($('.pnumber.active'), 0.5, {
      top: "0",
      opacity: 1,
      ease: Power3.easeOut
    }));

    upnumberanim.play();



  }
  function changeproject(pccurrent, pcnew, openProject) {

    if (pcnew > pccurrent) {
      var currentpc = $('.project-container[data-projectid="' + pccurrent + '"]');
      var newpc = $('.project-container[data-projectid="' + pcnew + '"]');

      if (openProject == 'open') {
          setTimeout( viewProjectDetails , 0, ('project'+pcnew) );
      }
      TweenLite.to(newpc, 0, {
        x: 400,
        y: 0,
        ease: Expo.easeInOut,
        opacity: 0,
      });
      TweenLite.to(currentpc, 1.3, {
        bezier: [{
          x: 0,
          y: 0
        }, {
          x: -400,
          y: 0
        }],
        opacity: 0,
        "display": "none",
        ease: Expo.easeInOut,
      });
      TweenLite.to(newpc, 1.3, {
        bezier: [{
          x: 400,
          y: 0
        }, {
          x: 0,
          y: 0
        }],
        "display": "block",
        opacity: 1,
        ease: Expo.easeInOut,
      });
      /*TweenLite.to(currentpc, 1.2, {
        bezier: [{
          x: 0,
          y: 0
        }, {
          x: -150,
          y: 50
        }, {
          x: -200,
          y: 200
        }],
        opacity: 0,
        "display": "none",
        ease: Power3.easeOut
      });
      TweenLite.to(newpc, 1, {
        bezier: [{
          x: 200,
          y: 200
        }, {
          x: 150,
          y: 50
        }, {
          x: 0,
          y: 0
        }],
        "display": "block",
        opacity: 1,
        ease: Power3.easeOut
      });*/
      updatenumber(pcnew);
      $('.project-container.activeProject').removeClass('activeProject');
      $('.project-container[data-projectid="' + pcnew + '"]').addClass('activeProject');
      $('.projects').data('currentproject', pcnew);

    } else {
      var currentpc = $('.project-container[data-projectid="' + pccurrent + '"]');
      var newpc = $('.project-container[data-projectid="' + pcnew + '"]');

      TweenLite.to(newpc, 0, {
        x: -400,
        y: 0,
        ease: Expo.easeInOut,
      });
      TweenLite.to(currentpc, 1, {
        bezier: [{
          x: 0,
          y: 0
        }, {
          x: 400,
          y: 0
        }],
        opacity: 0,
        "display": "none",
        ease: Expo.easeInOut,
      });
      TweenLite.to(newpc, 1, {
        bezier: [{
          x: -400,
          y: 0
        }, {
          x: 0,
          y: 0
        }],
        opacity: 1,
        "display": "block",
        ease: Expo.easeInOut,
      });
      /*TweenLite.to(currentpc, 1, {
        bezier: [{
          x: 0,
          y: 0
        }, {
          x: 150,
          y: 50
        }, {
          x: 200,
          y: 200
        }],
        opacity: 0,
        "display": "none",
        ease: Power3.easeOut
      });
      TweenLite.to(newpc, 1, {
        bezier: [{
          x: -200,
          y: 200
        }, {
          x: -150,
          y: 50
        }, {
          x: 0,
          y: 0
        }],
        opacity: 1,
        "display": "block",
        ease: Power3.easeOut
      });*/
    }

      updatenumber(pcnew);
    $('.indicator.active').removeClass('active');
    $('.indicator[data-projectid="' + pcnew + '"]').addClass('active');
    $('.projects').data('currentproject', pcnew);
  }

  $('.navigation-right').click(function () {
    var currentproject = $('.projects').data('currentproject');

    if (currentproject >= 10) {
      newproject = 1;
    } else {
      newproject = currentproject + 1;
    }


    $('.projects').data('currentproject', newproject);
    //console.log(newproject);
    changeproject(currentproject, newproject,'')
    //$('.project-container[data-projectid="'+currentproject+'"]').hide();
    //$('.project-container[data-projectid="'+newproject+'"]').show();
  });

  $('.navigation-left').click(function () {
    var currentproject = $('.projects').data('currentproject');

    if (currentproject <= 1) {
      newproject = 10;
    } else {
      newproject = currentproject - 1;
    }


    $('.projects').data('currentproject', newproject);
    //console.log(newproject);
    changeproject(currentproject, newproject,'')
    //$('.project-container[data-projectid="'+currentproject+'"]').hide();
    //$('.project-container[data-projectid="'+newproject+'"]').show();
  });


  $('.indicator').click(function () {
    var currentproject = $('.projects').data('currentproject');
    var newproject = $(this).data('projectid');
    $('.projects').data('currentproject', newproject);
    //console.log(newproject);
    changeproject(currentproject, newproject,'')
    //$('.project-container[data-projectid="'+currentproject+'"]').hide();
    //$('.project-container[data-projectid="'+newproject+'"]').show();
  });



function viewProjectDetails( aProjectId ){

    $('#'+aProjectId).addClass('activeProject');
    $('#'+aProjectId).addClass('detailedProject');


    /*var lastScrollTop = 0;
    $('body').scroll(function(event){

      console.log(lastScrollTop)
      if( $('body').scrollTop() <= 200 ) {
          $('.navigation-top').fadeOut().addClass('outview').removeClass('inview');
      } else {
       var st = $(this).scrollTop();
       if (st > lastScrollTop){
          $('.navigation-top.inview').fadeOut().addClass('outview').removeClass('inview');
       } else {          

        if( $('body').scrollTop() >= 200 ) {
          $('.navigation-top.outview').fadeIn().addClass('inview').removeClass('outview');
        }
       }
       lastScrollTop = st;
      }
    });*/


      $('body').bind('mousewheel', function(event) {
        if ( $('.activeProject').length ){
          if (event.originalEvent.wheelDelta >= 0) {
            $('.navigation-top.outview').fadeIn().addClass('inview').removeClass('outview');
                        //console.log('Scroll up');

          }
          else {
            $('.navigation-top.inview').fadeOut().addClass('outview').removeClass('inview');
                        //console.log('Scroll down');

          }
       }
      });




    $(".navigation-top").click(function() {
      $("body").animate({ scrollTop: 0 });
      $(this).fadeOut().removeClass('inview').addClass('outview');
      return false;
    });

    $(".fade-in.outview").inViewport(function(px){
      //console.log('start')
        if(px >= 150) {
          if( $(this).hasClass('outview')){
            $(this).removeClass("outview") ;
            $(this).addClass("inview") ;
            $(this).addClass('ovh')


            //console.log('weszlo');
          }
        } else { 
          //console.log('weszlo');
          //$(this).find('.left-text, .img-right').removeClass("inview") ;
          //$(this).find('.left-text, .img-right').addClass("outview") ;
          //$(this).removeClass('ovh')
        }
    });


    var viewproject =  $('#'+aProjectId).data('projectid');
    //console.log(viewproject);
    var viewworkpage = new TimelineLite();

    viewworkpage.add(TweenLite.to($('#'+aProjectId).find('.pimg'), 0, {
      ease: Expo.easeOut,
      display: "block"
    }));
    /*viewworkpage.add(TweenLite.to($('.projects-indicator'), 1, {
      ease: Power3.easeInOut,
      opacity: 0,
      y: "+=50px"
    }), "+=0.1");*/
    viewworkpage.add( function(){$('.projects-indicator').removeClass('inView').addClass('outView') });
    viewworkpage.add( function(){$('.navigation-left').removeClass('inView').addClass('outView') });
    viewworkpage.add( function(){$('.navigation-right').removeClass('inView').addClass('outView') });
    /*viewworkpage.add(TweenLite.to($('.navigation-right'), 1, {
      ease: Power3.easeInOut,
      opacity: 0,
      right: "-150px"
    }), "-=1.0");*/
    viewworkpage.add(TweenLite.to( $('#'+aProjectId), 1, {
      ease: Power3.easeOut,
      top: "0px"
    }), "-=0.2");

    viewworkpage.add( function(){$('#'+aProjectId+' .vp-button-cont').fadeOut() } , '-=0.5');

    /*viewworkpage.add(TweenLite.to($('#'+aProjectId+' .vp-button-cont'), 1, {
      ease: Power3.easeInOut,
      opacity: 0,
      //top: "-=100px",
      "display": "none"
    }), "-=1");*/
    viewworkpage.add(TweenLite.to($('#'+aProjectId).find('.pdesc'), 1, {
      ease: Power3.easeInOut,
      opacity: 0
    }), "-=1");
    viewworkpage.add(TweenLite.to($('#'+aProjectId).find('.roles'), 1, {
      ease: Power3.easeInOut,
      opacity: 1,
      display: "block",
      top: "185px"
    }), "-=0.3");
    
    viewworkpage.add(TweenLite.to($('#'+aProjectId).find('.pimg'), 1, {
      ease: Expo.easeOut,
      opacity: 1,
      margin: "0",
      top: '-60px',
      display: "block"
    }), "-=0.1");
    viewworkpage.add(TweenLite.to($('.back'), 1.5, {
      ease: Expo.easeOut,
      opacity: 1,
      top: "58px",
      right: "-30px"
    }), "-=3");
    viewworkpage.add( function(){ createSlick()}, '-=3' );

    viewworkpage.add(TweenLite.to($('.loading-cont'), 0.5, {
          ease: Expo.easeOut,
          opacity:0,
          display: "block"
        }));
    viewworkpage.add(TweenLite.to($('.loading'), 0.5, {
      ease: Expo.easeOut,
      opacity: 0,
      display:'none'
    }));

}

function createSlick(){  
  $(".carousel-cont").each(function(){
    var ctmp = $(this);
    $(ctmp).not('.slick-initialized').slick({
          dots: true,
          infinite: false,
          speed: 300,
          slidesToShow: 3,
          centerMode: true,
          variableWidth: true,
          cssEase: 'ease',
          appendArrows:  $(ctmp).parent().find('.carousel-nav'),
          appendDots:  $(ctmp).parent().find('.carousel-nav'),
          prevArrow: '<button type="button" class="slick-prev"><span class="prev-ico"><</span> PREV</button>',
          nextArrow: '<button type="button" class="slick-next"> NEXT <span class="prev-ico">></span></button>',
    }); 
  })
  $('.carousel-cont').slick('refresh');
}



  /* VIEW PROJECT DETAILS */

  $('.vp-button-cont').click(function () {

    viewProjectDetails( $(this).parent().attr('id') );



    //console.log($(this).parent().attr('id'));
/*
    var pimgHeight = $(this).parent().find('.pimg').height();
    var maxHeight = $(this).parent().height();
    var curHeight = 0;
    //console.log(maxHeight);
    var inititalpos = -($('.pimg').offset().top);
    var thisproj = $(this).parent();
    var thispimg = $(this).parent().find(".pimg");
    var winheight = $(window).height();
*/
/*
    $('.project-container[data-projectid="' + viewproject + '"]').on('wheel', function (e) {
      if (e.originalEvent.wheelDelta / 120 > 0) {

        if (($(thispimg).offset().top) >= 419) {
          //console.log('poczatek' + pimgHeight + '   offset: ' + $(thispimg).offset().top)
          //console.log('poczatek');
          TweenLite.to(thisproj, 1, {
            top: 0,
            ease: Power3.easeOut
          });
        } else {
          if (219 <= ($(thispimg).offset().top)) {
            TweenLite.to(thisproj, 1, {
              top: 0,
              ease: Power3.easeOut
            });
          } else {
            TweenLite.to(thisproj, 1, {
              top: "+=200",
              ease: Power3.easeOut
            });
            curHeight = curHeight - 1
            //console.log(curHeight + "scroll up");
            //console.log($(thispimg).offset().top);
          }
        }
      } else {

        if (-($(thispimg).offset().top) > ($('#project' + viewproject).height() - $(window).height()) - 200) {

          //console.log('koniec' + pimgHeight + '   offset: ' + $(thispimg).offset().top);
          TweenLite.to(thisproj, 1, {
            top: -($('#project' + viewproject).height() - winheight),
            ease: Power3.easeOut
          });
          //console.log('maxheight' + maxHeight + '   winheight: ' + winheight);


        } else {
          if (-($(thispimg).offset().top) > ($('#project' + viewproject).height() - $(window).height() - 600)) {
            TweenLite.to(thisproj, 1, {
              top: -($('#project' + viewproject).height() - winheight),
              ease: Power3.easeOut
            });
          } else {

            TweenLite.to(thisproj, 1, {
              top: "-=200",
              ease: Power3.easeOut
            });
            curHeight = curHeight + 1
            //console.log(curHeight + "scroll down");
            //console.log($(thispimg).offset().top);
            //console.log(pimgHeight - $(window).height() - (maxHeight - pimgHeight) + "asfdasfdn");
          }


        }
      }
    });*/
  });


  /* CLOSE PROJECT */
  $('.back').click(function () {
    var activeProjectId = $('.project-container.activeProject').data('projectid');
    var activeProject = $('.project-container.activeProject');

    $('body').unbind('wheel');
    $('.navigation-top.inview').removeClass('inview').addClass('outview').css('display', 'none');


    $('.projects-indicator').removeClass('outView').addClass('inView') ;
    $('.navigation-left').removeClass('outView').addClass('inView') ;
    $('.navigation-right').removeClass('outView').addClass('inView');
    var viewworkpage = new TimelineLite();

    viewworkpage.add(TweenLite.to($('.back'), 1, {
      ease: Power3.easeOut,
      opacity: 0,
      top: "-100px",
      right: "-30px"
    }), "0.3");
    viewworkpage.add(TweenLite.to($(this).parent().find('.pimg'), 1, {
      ease: Expo.easeOut,
      opacity:0,
      top: '0',
      display: "none"
    }), "-=.9");
    viewworkpage.add(TweenLite.to($(this).parent().find('.roles'), 1, {
      ease: Expo.easeOut,
      opacity: 0,
      display: "none",
      top: "230px"
    }), "-=0.5");
    viewworkpage.add(TweenLite.to(activeProject, 1, {
      ease: Power3.easeOut,
      top: "80px"
    }), "1.2");
    viewworkpage.add(TweenLite.to($(this).parent().find('.pdesc'), 1, {
      ease: Power3.easeOut,
      opacity: 1
    }), "-=.8");
    viewworkpage.add( function(){$(activeProject).find('.vp-button-cont').fadeIn() }, '-=0.5');


    //$(this).parent().parent().find('.vp-button-cont').fadeIn();
    /*viewworkpage.add(TweenLite.to($(activeProject).find('.vp-button-cont'), 1, {
      ease: Power3.easeOut,
      opacity: 1,
      "display": "inline-block"
    }), "-=1");
    viewworkpage.add(TweenLite.to($('.projects-indicator'), 1, {
      ease: Power3.easeOut,
      opacity: 1,
      y: "-=50px"
    }), "-=1");
    
    viewworkpage.add(TweenLite.to($('.navigation-left'), 1, {
      ease: Power3.easeOut,
      opacity: 1,
      left: "0"
    }), "-=1");
    viewworkpage.add(TweenLite.to($('.navigation-right'), 1, {
      ease: Power3.easeOut,
      opacity: 1,
      right: "88px"
    }), "-=1");*/

    //viewworkpage.add( function(){$('.navigation-left').removeClass('outView').addClass('inView') });
    //viewworkpage.add( function(){$('.navigation-right').removeClass('outView').addClass('inView') });
    $('.pimg section.fade-in').removeClass('inview').addClass('outview');

    $(".activeProject").removeClass('activeProject');
    $(".detailedProject").removeClass('detailedProject');

  });
  /* NEXT PROJECT */
  $('.next-project').click(function () {
    var activeProjectId = $('.project-container.activeProject').data('projectid');
    var activeProject = $('.project-container.activeProject');

    $('body').unbind('wheel');
    var viewworkpage = new TimelineLite();

    /*viewworkpage.add(TweenLite.to($('.back'), 1, {
      ease: Power3.easeOut,
      opacity: 0,
      top: "-100px",
      right: "-30px"
    }), "0.3");*/
    viewworkpage.add(TweenLite.to($('.loading'), 0, {
          ease: Expo.easeOut,
          opacity:1,
          display: "block"
        }));
    viewworkpage.add(TweenLite.to($('.loading-cont'), 1, {
          ease: Expo.easeOut,
          opacity:1,
          display: "block"
        }), '+=0.2');
    viewworkpage.add(TweenLite.to($(this).parent().parent().find('.pimg'), 0, {
      ease: Expo.easeOut,
      opacity:0,
      top: '0',
      display: "none"
    }));
    viewworkpage.add(TweenLite.to($(this).parent().parent().find('.roles'), 0, {
      ease: Expo.easeOut,
      opacity: 0,
      display: "none",
      top: "230px"
    }));
    //viewworkpage.add(function(){$("body").animate({ scrollTop: 0 })});
    viewworkpage.add(TweenLite.to(activeProject, 0, {
      ease: Power3.easeOut,
      top: "80px"
    }));
    viewworkpage.add(TweenLite.to($(this).parent().parent().find('.pdesc'), 0, {
      ease: Power3.easeOut,
      opacity: 1
    }));
    viewworkpage.add( function(){$(activeProject).find('.vp-button-cont').fadeIn() });

    //viewworkpage.add( function(){$(activeProject).parent().find('.vp-button-cont').fadeIn() });

    /*viewworkpage.add(TweenLite.to($(activeProject).parent().find('.vp-button-cont'), 1, {
      ease: Power3.easeOut,
      opacity: 1,
      "display": "inline-block"
    }), "-=1");
    */
    viewworkpage.add( function(){$('.projects-indicator').removeClass('inView').addClass('outView') });
    /*viewworkpage.add(TweenLite.to($('.projects-indicator'), 1, {
      ease: Power3.easeOut,
      opacity: 1,
      y: "-=50px"
    }), "-=1");
    
    viewworkpage.add(TweenLite.to($('.navigation-left'), 1, {
      ease: Power3.easeOut,
      opacity: 1,
      left: "0"
    }), "-=1");
    viewworkpage.add(TweenLite.to($('.navigation-right'), 1, {
      ease: Power3.easeOut,
      opacity: 1,
      right: "88px"
    }), "-=1");*/

    viewworkpage.add( function(){$('.navigation-left').removeClass('inView').addClass('outView') });
    viewworkpage.add( function(){$('.navigation-right').removeClass('inView').addClass('outView') });
    $('.pimg section.fade-in').removeClass('inview').addClass('outview');

    $(".activeProject").removeClass('activeProject');
    $(".detailedProject").removeClass('detailedProject');

    var currentproject = $('.projects').data('currentproject');

    if (currentproject >= 10) {
      newproject = 1;
    } else {
      newproject = currentproject + 1;
    }


    $('.projects').data('currentproject', newproject);
    changeproject(currentproject, newproject, 'open');
    //$("body").animate({ scrollTop: 0 })
    //console.log(currentproject + '  ' + newproject)
    //viewProjectDetails( 'project'+newproject);




  });



  /* END ON LOAD */
})