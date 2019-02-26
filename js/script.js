/*ts 6 sroda  02.06 + 1call??*/
/*ts 3 sroda 02.06  */
/*ts 6 czwartek  02.07 */
/*ts 3 piatek  02.08 */
/*ts 4 piatek 02.08 */
/*ts 2 sobota 02.09 */
/*ts 6 niedziela 02.10 */
/*ts 3 poniedzialek 02.11 */
/*ts 3 wtorek 02.19 */
/*total 36 */

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
tlmenu1.add(TweenLite.from(menubcont, 1, {
  opacity: 0,
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
  left: -0.5 * sideB
}), "-=0.8");

var mbhover = new TimelineLite({
  paused: true
});
mbhover.add(TweenLite.to(mbut, 0.5, {
  padding: "15px 9px",
  y: "-=5px",
  x: "-=5px",
  ease: Power3.easeOut
}));
mbhover.add(TweenLite.to($('.mb-bg'), 0.5, {
  width: "66px",
  height: "66px",
  y: "-=5px",
  x: "-=5px",
  ease: Power3.easeOut
}), "-=0.2");


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
  //console.log(angletmp);

  $(menubg).css({
    left: -(2.5 * sideB),
    width: offset + sideB,
    height: $(window).height(),
    'transform': angletmp
  })

  $(pagebg).css({
    left: -(0.5 * sideB),
    width: offset + sideB,
    height: $(window).height(),
    'transform': angletmp
  })

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
        hidemenuhome.add(showmenuitems.reverse(), "-=1");
        hidemenuhome.add(TweenLite.to(menubg, 1, {
          ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
          left: -2.5 * sideB
        }), "+=0.2");
        hidemenuhome.add(tlhome.play(), "-=0.21");
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


      } else {
        $('body').addClass('working');
        $("#menu").addClass('is-active');
        //console.log($(this).data('page'));
        var showmenuhome = new TimelineLite();
        //showmenuhome.add(tlhome.reverse().timeScale(1.2));
        showmenuhome.add(TweenLite.to(menubg, 1, {
          ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
          left: -0.5 * sideB
        }).timeScale(.8));
        showmenuhome.add(TweenLite.to($(mwrap), 0.1, {
          ease: Power3.easeOut,
          display: "block"
        }));
        showmenuhome.add(showmenuitems.play());
        showmenuhome.add(function () {
          $(menubcont).addClass('is-active');
        });
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
        hidemenuhome.add(showmenuitems.reverse(), "-=1");
        hidemenuhome.add(TweenLite.to(menubg, 1, {
          ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
          left: -2.5 * sideB
        }), "-=0.2");
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


      } else {
        $('body').addClass('working');
        $("#menu").addClass('is-active');
        //console.log($(this).data('page'));
        var showmenuhome = new TimelineLite();
        showmenuhome.add(TweenLite.to(menubg, 1, {
          ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
          left: -0.5 * sideB
        }), "+=0.2");
        showmenuhome.add(TweenLite.to($(mwrap), 0.1, {
          ease: Power3.easeOut,
          display: "block"
        }));
        showmenuhome.add(showmenuitems.play());
        showmenuhome.add(function () {
          $(menubcont).addClass('is-active');
        });
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
        hidemenuhome.add(showmenuitems.reverse(), "-=1");
        hidemenuhome.add(TweenLite.to(menubg, 1, {
          ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
          left: -2.5 * sideB
        }), "-=0.2");
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


      } else {
        $('body').addClass('working');
        $("#menu").addClass('is-active');
        //console.log($(this).data('page'));
        var showmenuhome = new TimelineLite();
        showmenuhome.add(TweenLite.to(menubg, 1, {
          ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
          left: -0.5 * sideB
        }), "+=0.2");
        showmenuhome.add(TweenLite.to($(mwrap), 0.1, {
          ease: Power3.easeOut,
          display: "block"
        }));
        showmenuhome.add(showmenuitems.play());
        showmenuhome.add(function () {
          $(menubcont).addClass('is-active');
        });
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
        top: "-250px",
        right: "88px"
      }), "0");
      viewworkpage2.add(TweenLite.to(activeProject, 1, {
        ease: Power3.easeOut,
        top: "80px"
      }), "0.5");
      viewworkpage2.add(TweenLite.to($(this).parent().find('.roles'), 1, {
        ease: Power3.easeOut,
        opacity: 0,
        display: "none",
        top: "50px"
      }), "-=1.5");
      viewworkpage2.add(TweenLite.to($(this).parent().find('.pdesc'), 1, {
        ease: Power3.easeOut,
        opacity: 1
      }) );
      viewworkpage2.add(TweenLite.to($('.mb-cont'), 1, {
        ease: Power3.easeOut,
        left: "20px"
      }), "-=1.5");
      viewworkpage2.add(TweenLite.to($('.projects-indicator'), 1, {
        ease: Power3.easeOut,
        opacity: 1,
        top: "520px"
      }), "-=1.5");
      viewworkpage2.add(TweenLite.to($(activeProject).find('.vp-button-cont'), 1, {
        ease: Power3.easeOut,
        opacity: 1,
        top: "+=100px",
        "display": "block"
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
      }), "-=1");
      viewworkpage2.add(TweenLite.to($(this).parent().find('.pimg'), 1, {
        ease: Power3.easeOut,
        opacity: 0,
        margin: "120px 0 0 0",
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

      hidemenuhome.add(TweenLite.to(pagebg, 0, {
        ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
        left: -0.5 * sideB
      }), "+=0.2");

      hidemenuhome.add(showmenuitems.reverse(), "-=1");
      hidemenuhome.add(TweenLite.to($(projects), 0, {
        ease: Power3.easeOut,
        display: "none"
      }));
      hidemenuhome.add(TweenLite.to(menubg, 1, {
        ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
        left: -2.5 * sideB
      }), "+=0.2");
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
        changeproject($('.projects').data('currentproject') - 1, $('.projects').data('currentproject'));
      } else {
        changeproject(1, 1);
      }


      $('.project-container').hide();
      $('.project-container.activeProject').hide();
      $(pagebg).hide();
      $("#menu").removeClass('is-active');
      var hidemenuhome = new TimelineLite();
      hidemenuhome.add(showmenuitems.reverse(), "-=1");
      hidemenuhome.add(TweenLite.to(menubg, 1, {
        ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
        left: -2.5 * sideB
      }), "+=0.2");
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

      hidemenuhome.add(TweenLite.from($('.projects-indicator'), 1, {
        ease: Power3.easeOut,
        opacity: 0,
        y: "-=150px"
      }), "-=0.5");
      hidemenuhome.add(TweenLite.from([$('.navigation-left'), $('.navigation-right')], 1, {
        ease: Power3.easeOut,
        opacity: 0,
        y: "+=250px"
      }), "-=0.5");


      hidemenuhome.add(function () {
        $(homepage).hide();
      });
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
      $('.about').show();
      $(menubcont).data("page", "about");
      $("#menu").removeClass('is-active');
      var aboutanimation = new TimelineLite();
      aboutanimation.add(showmenuitems.reverse(), "-=1");
      aboutanimation.add(TweenLite.to(menubg, 1, {
        ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
        left: -2.5 * sideB
      }), "+=0.2");
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
        changeproject($('.projects').data('currentproject') - 1, $('.projects').data('currentproject'));
      } else {
        changeproject(1, 1);
      }
      $('.project-container').hide();
      $('.project-container.activeProject').hide();
      $("#menu").removeClass('is-active');
      var viewworkpage = new TimelineLite();
      //hidemenuhome.add(showmenuitems.reverse(), "-=1");
      viewworkpage.add(tlhome.reverse().timeScale(2));
      viewworkpage.add(TweenLite.to(pagebg, 1, {
        ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
        left: -2.5 * sideB
      }), "+=0.2");
      //hidemenuhome.add( TweenLite.to(menubg, 1, {ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"), left:-2.5*sideB}), "+=0.2"  );
      //hidemenuhome.add( hidemenubg );
      viewworkpage.add(TweenLite.to($('.projects'), 0, {
        ease: Power3.easeOut,
        display: "block"
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

      viewworkpage.add(TweenLite.from([$('.navigation-left'), $('.navigation-right')], 1, {
        ease: Power3.easeOut,
        opacity: 0,
        y: "-=50px"
      }), "-=0.2");

      viewworkpage.add(TweenLite.from($('.projects-indicator'), 1.5, {
        ease: Power3.easeOut,
        opacity: 0,
        y: "+=50px"
      }), "-=0.5");
      


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


  /*  MENU BUTTON HOVER */
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
  vmhover.add(TweenLite.to(vmca, 0.3, {
    width: "+=10",
    height: "+=10",
    y: "-=5px",
    x: "-=5px",
    ease: Power3.easeOut
  }));
  vmhover.add(TweenLite.to(vmcabg, 0.3, {
    width: "+=10",
    height: "+=10",
    y: "-=5px",
    x: "-=5px",
    opacity: 0.85,
    ease: Power3.easeOut
  }), "-=0.1");

  var vphover = new TimelineLite({
    paused: true
  });
  vphover.add(TweenLite.to($('.vp-button'), 0.3, {
    "line-height": 62,
    width: "+=22",
    height: "+=6",
    y: "-=3px",
    x: "-=11px",
    ease: Power3.easeOut
  }));
  vphover.add(TweenLite.to($('.vp-bg'), 0.3, {
    width: "+=22",
    height: "+=6",
    y: "-=3px",
    x: "-=11px",
    opacity: 0.85,
    ease: Power3.easeOut
  }), "-=0.15");


  /*  VIEW PROJECTS HOVER */
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
  );


  $('.view-more').hover(
    function () {
      if (!$("body").hasClass('working')) {
        vmhover.play();
      }
    },
    function () {
      vmhover.reverse();
    }
  );

  /*  MENU BUTTON HOVER */
  $('.mitem').hover(
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
  );

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


  /*  LEFT ARROW HOVER */
  $('.navigation-left').hover(
    function () {
      hovernavleft.play();
    },
    function () {
      hovernavleft.reverse();
    }
  );

  /*  RIGHT ARROW HOVER */
  $('.navigation-right').hover(
    function () {
      hovernavright.play();
    },
    function () {
      hovernavright.reverse();
    }
  );
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
  function changeproject(pccurrent, pcnew) {

    if (pcnew > pccurrent) {
      var currentpc = $('.project-container[data-projectid="' + pccurrent + '"]');
      var newpc = $('.project-container[data-projectid="' + pcnew + '"]');

      TweenLite.to(newpc, 0, {
        x: 400,
        y: 0,
        ease: Power3.easeOut
      });
      TweenLite.to(currentpc, 1.2, {
        bezier: [{
          x: 0,
          y: 0
        }, {
          x: -400,
          y: 0
        }],
        opacity: 0,
        "display": "none",
        ease: Power3.easeOut
      });
      TweenLite.to(newpc, 1, {
        bezier: [{
          x: 400,
          y: 0
        }, {
          x: 0,
          y: 0
        }],
        "display": "block",
        opacity: 1,
        ease: Power3.easeOut
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
        ease: Power3.easeOut
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
        ease: Power3.easeOut
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
        ease: Power3.easeOut
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
    changeproject(currentproject, newproject)
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
    changeproject(currentproject, newproject)
    //$('.project-container[data-projectid="'+currentproject+'"]').hide();
    //$('.project-container[data-projectid="'+newproject+'"]').show();
  });


  $('.indicator').click(function () {
    var currentproject = $('.projects').data('currentproject');
    var newproject = $(this).data('projectid');
    $('.projects').data('currentproject', newproject);
    //console.log(newproject);
    changeproject(currentproject, newproject)
    //$('.project-container[data-projectid="'+currentproject+'"]').hide();
    //$('.project-container[data-projectid="'+newproject+'"]').show();
  });


  /* VIEW PROJECT DETAILS */

  $('.vp-button-cont').click(function () {

    $(this).parent().addClass('activeProject');
    $(this).parent().addClass('detailedProject');
    var viewproject = $(this).parent().data('projectid');
    //console.log(viewproject);
    var viewworkpage = new TimelineLite();

    viewworkpage.add(TweenLite.to($('.projects-indicator'), 1, {
      ease: Power3.easeOut,
      opacity: 0,
      top: "-150px"
    }), "-=0.5");
    viewworkpage.add(TweenLite.to($(this).parent(), 1, {
      ease: Power3.easeOut,
      top: "50px"
    }), "-=0.5");
    viewworkpage.add(TweenLite.to($('.mb-cont'), 1, {
      ease: Power3.easeOut,
      left: "-20px"
    }), "-=1");
    viewworkpage.add(TweenLite.to($(this), 1, {
      ease: Power3.easeOut,
      opacity: 0,
      top: "-=100px",
      "display": "none"
    }), "-=1");
    viewworkpage.add(TweenLite.to($(this).parent().find('.pdesc'), 1, {
      ease: Power3.easeOut,
      opacity: 0
    }) );
    viewworkpage.add(TweenLite.to($(this).parent().find('.roles'), 1, {
      ease: Power3.easeOut,
      opacity: 1,
      display: "block",
      top: "160px"
    }), "-=0.5");
    viewworkpage.add(TweenLite.to($('.navigation-left'), 1, {
      ease: Power3.easeOut,
      opacity: 0,
      left: "-150px"
    }), "-=0.5");
    viewworkpage.add(TweenLite.to($('.navigation-right'), 1, {
      ease: Power3.easeOut,
      opacity: 0,
      right: "-150px"
    }), "-=1.0");
    viewworkpage.add(TweenLite.to($(this).parent().find('.pimg'), 1, {
      ease: Power3.easeOut,
      opacity: 1,
      margin: "20px 0 0 0",
      display: "block"
    }), "-=2");
    viewworkpage.add(TweenLite.to($('.back'), 1, {
      ease: Power3.easeOut,
      opacity: 1,
      top: "58px",
      right: "0px"
    }), "-=0.5");
    var pimgHeight = $(this).parent().find('.pimg').height();
    var maxHeight = $(this).parent().height();
    var curHeight = 0;
    //console.log(maxHeight);
    var inititalpos = -($('.pimg').offset().top);
    var thisproj = $(this).parent();
    var thispimg = $(this).parent().find(".pimg");
    var winheight = $(window).height();


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
            curHeight = curHeight - 200
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
            curHeight = curHeight + 200
            //console.log(curHeight + "scroll down");
            //console.log($(thispimg).offset().top);
            //console.log(pimgHeight - $(window).height() - (maxHeight - pimgHeight) + "asfdasfdn");
          }


        }
      }
    });
  });

  $('.back').click(function () {
    var activeProjectId = $('.project-container.activeProject').data('projectid');
    var activeProject = $('.project-container.activeProject');

    $('.project-container').unbind('wheel');
    var viewworkpage = new TimelineLite();

    viewworkpage.add(TweenLite.to($('.back'), 1, {
      ease: Power3.easeOut,
      opacity: 0,
      top: "-250px",
      right: "88px"
    }), "0");
    viewworkpage.add(TweenLite.to(activeProject, 1, {
      ease: Power3.easeOut,
      top: "80px"
    }), "0.5");
    viewworkpage.add(TweenLite.to($(this).parent().find('.roles'), 1, {
      ease: Power3.easeOut,
      opacity: 0,
      display: "none",
      top: "50px"
    }), "-=1.5");
    viewworkpage.add(TweenLite.to($(this).parent().find('.pdesc'), 1, {
      ease: Power3.easeOut,
      opacity: 1
    }) );
    viewworkpage.add(TweenLite.to($('.mb-cont'), 1, {
      ease: Power3.easeOut,
      left: "20px"
    }), "-=1.5");
    viewworkpage.add(TweenLite.to($('.projects-indicator'), 1, {
      ease: Power3.easeOut,
      opacity: 1,
      top: "520px"
    }), "-=1.5");
    viewworkpage.add(TweenLite.to($(activeProject).find('.vp-button-cont'), 1, {
      ease: Power3.easeOut,
      opacity: 1,
      top: "+=100px",
      "display": "block"
    }), "-=1.5");
    viewworkpage.add(TweenLite.to($('.navigation-left'), 1, {
      ease: Power3.easeOut,
      opacity: 1,
      left: "0"
    }), "-=1.5");
    viewworkpage.add(TweenLite.to($('.navigation-right'), 1, {
      ease: Power3.easeOut,
      opacity: 1,
      right: "88px"
    }), "-=1");
    viewworkpage.add(TweenLite.to($(this).parent().find('.pimg'), 1, {
      ease: Power3.easeOut,
      opacity:0,
      display: "none"
    }), "-=2");

    $(".activeProject").removeClass('activeProject');
    $(".detailedProject").removeClass('detailedProject');

  });


  /* END ON LOAD */
})