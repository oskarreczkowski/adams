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
        return this.each(function(i, el) {
            function visPx() {
                var H = $(this).height(),
                    r = el.getBoundingClientRect(),
                    t = r.top,
                    b = r.bottom;
                return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H)));
            }
            visPx();
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
var diag = Math.sqrt($(window).height() * $(window).height() + $(window).width() * $(window).width());
var sideA = $(window).height();
var sideB = $(window).width();


var angleB = Math.asin(sideA / diag) * 180 / Math.PI;

var offset = diag * Math.cos(Math.asin(sideA / diag));


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
    delay: .55
}));
tlmenu1.add(TweenLite.to(menubcont, 1, {
    opacity: 1,
    ease: Power0.easeNone
}), "-=0.8");



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
tlhome.add(atriangle.play(), "-=0.7");
tlhome.add(tltxt2.play(), "-=1.6");
tlhome.add(tlvm1.play(), "-=1");
tlhome.add(function() {
    $('body').removeClass('working')
});


$(document).ready(function() {


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
    $(window).resize(function() {
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
    $(menubcont).click(function() {
        if ($('body').hasClass('working')) {

        } else if ($(this).data('page') == "home") {
            if ($(this).hasClass("is-active")) {

                $('body').addClass('working');
                $("#menu").removeClass('is-active');
                var hidemenuhome = new TimelineLite();
                hidemenuhome.add(TweenLite.to($(line1), 0.4, {
                    ease: Power3.easeOut,
                    width: 0
                }));
                hidemenuhome.add(TweenLite.to($(line2), 0.4, {
                    ease: Power3.easeOut,
                    width: 0
                }), '-=0.2');

                hidemenuhome.add(TweenLite.to($(character1), 0.3, {
                    ease: Power3.easeOut,
                    y: +80,
                    x: -80,
                    opacity: 0
                }), '-=0.1');
                hidemenuhome.add(TweenLite.to($(character2), 0.3, {
                    ease: Power3.easeOut,
                    y: +150,
                    x: +150,
                    opacity: 0
                }), '-=0.2');
                hidemenuhome.add(TweenLite.to($(character3), 0.3, {
                    ease: Power3.easeOut,
                    y: -150,
                    x: +150,
                    opacity: 0
                }), '-=0.3');
                hidemenuhome.add(TweenLite.to($('.menu-wrapper'), 0.8, {
                    ease: Power3.easeOut,
                    top: '20px',
                    opacity: 0
                }), '-=0.2');
                hidemenuhome.add(function() {
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
                hidemenuhome.add(function() {
                    $('body').removeClass('working');
                });


            } else {
                $('body').addClass('working');
                $("#menu").addClass('is-active');
                var showmenuhome = new TimelineLite();
                showmenuhome.add(function() {
                    $(menubcont).addClass('is-active');
                });

                showmenuhome.add(TweenLite.to($('.menu-wrapper'), 0, {
                    ease: Power3.easeOut,
                    opacity: 1,
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
                showmenuhome.add(function() {
                    $('body').removeClass('working');
                });

            }
        } else if ($(this).data('page') == "projects") {
            if ($(this).hasClass("is-active")) {

                $('body').addClass('working');
                $("#menu").removeClass('is-active');
                var hidemenuhome = new TimelineLite();
                hidemenuhome.add(TweenLite.to($(line1), 0.4, {
                    ease: Power3.easeOut,
                    width: 0
                }));
                hidemenuhome.add(TweenLite.to($(line2), 0.4, {
                    ease: Power3.easeOut,
                    width: 0
                }), '-=0.2');

                hidemenuhome.add(TweenLite.to($(character1), 0.3, {
                    ease: Power3.easeOut,
                    y: +80,
                    x: -80,
                    opacity: 0
                }), '-=0.1');
                hidemenuhome.add(TweenLite.to($(character2), 0.3, {
                    ease: Power3.easeOut,
                    y: +150,
                    x: +150,
                    opacity: 0
                }), '-=0.2');
                hidemenuhome.add(TweenLite.to($(character3), 0.3, {
                    ease: Power3.easeOut,
                    y: -150,
                    x: +150,
                    opacity: 0
                }), '-=0.3');
                hidemenuhome.add(TweenLite.to($('.menu-wrapper'), 0.8, {
                    ease: Power3.easeOut,
                    top: '20px',
                    opacity: 0
                }), '-=0.2');
                hidemenuhome.add(function() {
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
                hidemenuhome.add(function() {
                    $('body').removeClass('working');
                });


            } else {
                $('body').addClass('working');
                $("#menu").addClass('is-active');
                var showmenuhome = new TimelineLite();
                showmenuhome.add(function() {
                    $(menubcont).addClass('is-active');
                });
                showmenuhome.add(TweenLite.to($('.menu-wrapper'), 0, {
                    ease: Power3.easeOut,
                    opacity: 1,
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
                showmenuhome.add(function() {
                    $('body').removeClass('working');
                });

            }
        } else if ($(this).data('page') == "about") {
            if ($(this).hasClass("is-active")) {

                $('body').addClass('working');
                $("#menu").removeClass('is-active');
                var hidemenuhome = new TimelineLite();
                hidemenuhome.add(TweenLite.to($(line1), 0.4, {
                    ease: Power3.easeOut,
                    width: 0
                }));
                hidemenuhome.add(TweenLite.to($(line2), 0.4, {
                    ease: Power3.easeOut,
                    width: 0
                }), '-=0.2');

                hidemenuhome.add(TweenLite.to($(character1), 0.3, {
                    ease: Power3.easeOut,
                    y: +80,
                    x: -80,
                    opacity: 0
                }), '-=0.1');
                hidemenuhome.add(TweenLite.to($(character2), 0.3, {
                    ease: Power3.easeOut,
                    y: +150,
                    x: +150,
                    opacity: 0
                }), '-=0.2');
                hidemenuhome.add(TweenLite.to($(character3), 0.3, {
                    ease: Power3.easeOut,
                    y: -150,
                    x: +150,
                    opacity: 0
                }), '-=0.3');
                hidemenuhome.add(TweenLite.to($('.menu-wrapper'), 0.8, {
                    ease: Power3.easeOut,
                    top: '20px',
                    opacity: 0
                }), '-=0.2');
                hidemenuhome.add(function() {
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
                hidemenuhome.add(function() {
                    $('body').removeClass('working');
                });


            } else {
                $('body').addClass('working');
                $("#menu").addClass('is-active');
                var showmenuhome = new TimelineLite();
                showmenuhome.add(function() {
                    $(menubcont).addClass('is-active');
                });
                showmenuhome.add(TweenLite.to($('.menu-wrapper'), 0, {
                    ease: Power3.easeOut,
                    opacity: 1,
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
                showmenuhome.add(function() {
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
            }));
            viewworkpage2.add(TweenLite.to($('.mb-cont'), 1, {
                ease: Power3.easeOut,
                left: "20px"
            }), "-=1.5");
            viewworkpage2.add(function() {
                $(activeProject).find('.vp-button-cont').fadeIn()
            });

            viewworkpage2.add(function() {
                $('.projects-indicator').removeClass('outView').addClass('inView')
            });
            viewworkpage2.add(function() {
                $('.navigation-left').removeClass('outView').addClass('inView')
            });
            viewworkpage2.add(function() {
                $('.navigation-right').removeClass('outView').addClass('inView')
            });
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
    $('.link-home').click(function() {
        if ($('body').hasClass('working')) {

        } else {
            $('body').addClass('working');
            $(menubcont).data("page", "home");
            $('.about').hide();

            $(pagebg).show();
            $("#menu").removeClass('is-active');
            var hidemenuhome = new TimelineLite();
            hidemenuhome.add(function() {
                $(homepage).show();
            });

            hidemenuhome.add(TweenLite.to(pagebg, 0, {
                ease: Power3.easeOut,
                left: "-50%",
                opacity: 1,
                display: "block"
            }), "+=0.2");

            hidemenuhome.add(TweenLite.to($(line1), 0.4, {
                ease: Power3.easeOut,
                width: 0
            }));
            hidemenuhome.add(TweenLite.to($(line2), 0.4, {
                ease: Power3.easeOut,
                width: 0
            }), '-=0.2');

            hidemenuhome.add(TweenLite.to($(character1), 0.3, {
                ease: Power3.easeOut,
                y: +80,
                x: -80,
                opacity: 0
            }), '-=0.1');
            hidemenuhome.add(TweenLite.to($(character2), 0.3, {
                ease: Power3.easeOut,
                y: +150,
                x: +150,
                opacity: 0
            }), '-=0.2');
            hidemenuhome.add(TweenLite.to($(character3), 0.3, {
                ease: Power3.easeOut,
                y: -150,
                x: +150,
                opacity: 0
            }), '-=0.3');
            hidemenuhome.add(TweenLite.to($('.menu-wrapper'), 0.8, {
                ease: Power3.easeOut,
                top: '20px',
                opacity: 0
            }), '-=0.2');
            hidemenuhome.add(TweenLite.to($(projects), 0, {
                ease: Power3.easeOut,
                display: "none"
            }));
            hidemenuhome.add(TweenLite.to(menubg, 0.8, {
                ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
                left: "-250%"
            }), "-=0.7");
            hidemenuhome.add(tlhome.play());
            hidemenuhome.add(TweenLite.to($(mwrap), 0.5, {
                ease: Power3.easeOut,
                display: "none"
            }));
            hidemenuhome.add(function() {
                $(menubcont).removeClass('is-active');
            });
            hidemenuhome.add(function() {
                $('body').removeClass('working');
            });
        }
    });


    /* CLICK ON PROJECTS MENU ITEM */
    $('.link-projects').click(function() {
        if ($('body').hasClass('working')) {

        } else {
            $('body').addClass('working');
            $(menubcont).data("page", "projects");
            $('.about').hide();
            if ($('.projects').data('currentproject') != 1) {
                changeproject($('.projects').data('currentproject') - 1, $('.projects').data('currentproject'), '');
            } else {
                changeproject(1, 1, '');
            }


            $('.project-container').hide();
            $('.project-container.activeProject').hide();
            $(pagebg).hide();
            $("#menu").removeClass('is-active');
            var hidemenuhome = new TimelineLite();
            hidemenuhome.add(function() {
                $(homepage).hide();
            });
            hidemenuhome.add(TweenLite.to($(line1), 0.4, {
                ease: Power3.easeOut,
                width: 0
            }));
            hidemenuhome.add(TweenLite.to($(line2), 0.4, {
                ease: Power3.easeOut,
                width: 0
            }), '-=0.2');

            hidemenuhome.add(TweenLite.to($(character1), 0.3, {
                ease: Power3.easeOut,
                y: +80,
                x: -80,
                opacity: 0
            }), '-=0.1');
            hidemenuhome.add(TweenLite.to($(character2), 0.3, {
                ease: Power3.easeOut,
                y: +150,
                x: +150,
                opacity: 0
            }), '-=0.2');
            hidemenuhome.add(TweenLite.to($(character3), 0.3, {
                ease: Power3.easeOut,
                y: -150,
                x: +150,
                opacity: 0
            }), '-=0.3');
            hidemenuhome.add(TweenLite.to($('.menu-wrapper'), 0.8, {
                ease: Power3.easeOut,
                top: '20px',
                opacity: 0
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
            hidemenuhome.add(function() {
                $('.projects-indicator').removeClass('outView').addClass('inView')
            });
            hidemenuhome.add(function() {
                $('.navigation-right').removeClass('outView').addClass('inView')
            });
            hidemenuhome.add(function() {
                $('.navigation-left').removeClass('outView').addClass('inView')
            });

            hidemenuhome.add(function() {
                $(menubcont).removeClass('is-active');
            });
            hidemenuhome.add(function() {
                $('body').removeClass('working');
            });

        }
    });


    /* CLICK ON ABOUT MENU ITEM */
    $('.link-about').click(function() {
        if ($('body').hasClass('working')) {

        } else {
            $('body').addClass('working');

            $('.homepage').hide();
            $('.projects').hide();
            $('.about').show();

            $(menubcont).data("page", "about");
            $("#menu").removeClass('is-active');
            var aboutanimation = new TimelineLite();
            aboutanimation.add(TweenLite.to($(line1), 0.4, {
                ease: Power3.easeOut,
                width: 0
            }));
            aboutanimation.add(TweenLite.to($(line2), 0.4, {
                ease: Power3.easeOut,
                width: 0
            }), '-=0.2');

            aboutanimation.add(TweenLite.to($(character1), 0.3, {
                ease: Power3.easeOut,
                y: +80,
                x: -80,
                opacity: 0
            }), '-=0.1');
            aboutanimation.add(TweenLite.to($(character2), 0.3, {
                ease: Power3.easeOut,
                y: +150,
                x: +150,
                opacity: 0
            }), '-=0.2');
            aboutanimation.add(TweenLite.to($(character3), 0.3, {
                ease: Power3.easeOut,
                y: -150,
                x: +150,
                opacity: 0
            }), '-=0.3');
            aboutanimation.add(TweenLite.to($('.menu-wrapper'), 0.8, {
                ease: Power3.easeOut,
                top: '20px',
                opacity: 0
            }), '-=0.2');
            aboutanimation.add(TweenLite.to($(projects), 0, {
                ease: Power3.easeOut,
                display: "none"
            }));
            aboutanimation.add(TweenLite.to(menubg, 0.8, {
                ease: CustomEase.create("custom", "M0,0 C0.102,0.334 0.49,0.266 0.6,0.332 0.722,0.405 0.818,1 1,1"),
                left: "-250%"
            }), "-=0.7");
            $('.projects').hide();
            aboutanimation.add(TweenLite.to($('.about'), 0, {
                ease: Power3.easeOut,
                display: "block",
                "z-index": 1
            }, "0"));

            aboutanimation.add(TweenLite.to($(mwrap), 0.5, {
                ease: Power3.easeOut,
                display: "none"
            }));

            aboutanimation.add(function() {
                $(menubcont).removeClass('is-active');
            });
            aboutanimation.add(function() {
                $('body').removeClass('working');
            });
        }
    });


    /* CLICK ON VIEW WORK ITEM */
    $('.view-more').click(function() {
        if ($('body').hasClass('working')) {

        } else {
            $('body').addClass('working');
            $(menubcont).data("page", "projects");

            if ($('.projects').data('currentproject') != 1) {
                changeproject(1, 1, '');
            } else {
                changeproject(1, 1, '');
            }

            $('.project-container').hide();
            $('.project-container.activeProject').hide();
            $("#menu").removeClass('is-active');
            var viewworkpage = new TimelineLite();

            viewworkpage.add(TweenLite.to($('.projects'), 0, {
                ease: Power3.easeOut,
                display: "none",
                opacity: 0
            }, "0"));
            viewworkpage.add(TweenLite.to($('.homepage'), 1, {
                ease: Power3.easeOut,
                display: "none",
                opacity: 0
            }, "0"));

            viewworkpage.add(TweenLite.to(pagebg, 0.5, {
                ease: Power3.easeOut,
                opacity: 0,
                display: "none"
            }), "-=0");

            viewworkpage.add(TweenLite.to($('.homepage'), 0.1, {
                ease: Power3.easeOut,
                opacity: 1
            }, "0"));

            viewworkpage.add(TweenLite.to($('.projects'), 0, {
                ease: Power3.easeOut,
                display: "block",
                opacity: 1
            }, "0"));
            viewworkpage.add(TweenLite.to($('.project-container[data-projectid="1"]'), 0, {
                ease: Power3.easeOut,
                display: 'block'
            }, '0'));
            viewworkpage.add(TweenLite.to($(mwrap), 0.5, {
                ease: Power3.easeOut,
                display: "none"
            }));
            viewworkpage.add(function() {
                $('.projects-indicator').removeClass('outView').addClass('inView')
            }, '-=1');
            viewworkpage.add(function() {
                $('.navigation-left').removeClass('outView').addClass('inView')
            }, '-=1');
            viewworkpage.add(function() {
                $('.navigation-right').removeClass('outView').addClass('inView')
            }, '-=1');


            viewworkpage.add(function() {
                $(homepage).hide();
            });
            viewworkpage.add(function() {
                $(menubcont).removeClass('is-active');
            });
            viewworkpage.add(function() {
                $('body').removeClass('working');
            });

        }
    });


    function updatenumber(newNumber) {
        var upnumberanim = new TimelineLite({
            paused: true
        });
        if (newNumber < 10) newNumber = "0" + newNumber;
        upnumberanim.add(TweenLite.to($('.pnumber.active'), 0.5, {
            top: "+=50",
            opacity: 0,
            ease: Power3.easeOut
        }));
        upnumberanim.add(function() {
            $('.pnumber.active').text(newNumber);
        });
        upnumberanim.add(function() {
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
                setTimeout(viewProjectDetails, 0, ('project' + pcnew));
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
        }

        updatenumber(pcnew);
        $('.indicator.active').removeClass('active');
        $('.indicator[data-projectid="' + pcnew + '"]').addClass('active');
        $('.projects').data('currentproject', pcnew);
    }

    $('.navigation-right').click(function() {
        var currentproject = $('.projects').data('currentproject');

        if (currentproject >= 10) {
            newproject = 1;
        } else {
            newproject = currentproject + 1;
        }


        $('.projects').data('currentproject', newproject);
        changeproject(currentproject, newproject, '')
    });

    $('.navigation-left').click(function() {
        var currentproject = $('.projects').data('currentproject');

        if (currentproject <= 1) {
            newproject = 10;
        } else {
            newproject = currentproject - 1;
        }


        $('.projects').data('currentproject', newproject);
        changeproject(currentproject, newproject, '')
    });


    $('.indicator').click(function() {
        var currentproject = $('.projects').data('currentproject');
        var newproject = $(this).data('projectid');
        $('.projects').data('currentproject', newproject);
        changeproject(currentproject, newproject, '')
    });



    function viewProjectDetails(aProjectId) {

        $('#' + aProjectId).addClass('activeProject');
        $('#' + aProjectId).addClass('detailedProject');
        $('body').bind('mousewheel', function(event) {
            if ($('.activeProject').length) {
                if (event.originalEvent.wheelDelta >= 0) {
                    $('.navigation-top.outview').fadeIn().addClass('inview').removeClass('outview');
                } else {
                    $('.navigation-top.inview').fadeOut().addClass('outview').removeClass('inview');
                }
            }
        });




        $(".navigation-top").click(function() {
            $("body").animate({
                scrollTop: 0
            });
            $(this).fadeOut().removeClass('inview').addClass('outview');
            return false;
        });

        $(".fade-in.outview").inViewport(function(px) {
            if (px >= 150) {
                if ($(this).hasClass('outview')) {
                    $(this).removeClass("outview");
                    $(this).addClass("inview");
                    $(this).addClass('ovh')
                }
            } else {}
        });


        var viewproject = $('#' + aProjectId).data('projectid');
        var viewworkpage = new TimelineLite();

        viewworkpage.add(TweenLite.to($('#' + aProjectId).find('.pimg'), 0, {
            ease: Expo.easeOut,
            display: "block"
        }));
        viewworkpage.add(function() {
            $('.projects-indicator').removeClass('inView').addClass('outView')
        });
        viewworkpage.add(function() {
            $('.navigation-left').removeClass('inView').addClass('outView')
        });
        viewworkpage.add(function() {
            $('.navigation-right').removeClass('inView').addClass('outView')
        });
        viewworkpage.add(TweenLite.to($('#' + aProjectId), 1, {
            ease: Power3.easeOut,
            top: "0px"
        }), "-=0.2");

        viewworkpage.add(function() {
            $('#' + aProjectId + ' .vp-button-cont').fadeOut()
        }, '-=0.5');
        viewworkpage.add(TweenLite.to($('#' + aProjectId).find('.pdesc'), 1, {
            ease: Power3.easeInOut,
            opacity: 0
        }), "-=1");
        viewworkpage.add(TweenLite.to($('#' + aProjectId).find('.roles'), 1, {
            ease: Power3.easeInOut,
            opacity: 1,
            display: "block",
            top: "185px"
        }), "-=0.3");

        viewworkpage.add(TweenLite.to($('#' + aProjectId).find('.pimg'), 1, {
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
        viewworkpage.add(function() {
            createSlick()
        }, '-=3');

        viewworkpage.add(TweenLite.to($('.loading-cont'), 0.5, {
            ease: Expo.easeOut,
            opacity: 0,
            display: "block"
        }));
        viewworkpage.add(TweenLite.to($('.loading'), 0.5, {
            ease: Expo.easeOut,
            opacity: 0,
            display: 'none'
        }));

    }

    function createSlick() {
        $(".carousel-cont").each(function() {
            var ctmp = $(this);
            $(ctmp).not('.slick-initialized').slick({
                dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: 3,
                centerMode: true,
                variableWidth: true,
                cssEase: 'ease',
                appendArrows: $(ctmp).parent().find('.carousel-nav'),
                appendDots: $(ctmp).parent().find('.carousel-nav'),
                prevArrow: '<button type="button" class="slick-prev"><span class="prev-ico"><</span> PREV</button>',
                nextArrow: '<button type="button" class="slick-next"> NEXT <span class="prev-ico">></span></button>',
            });
        })
        $('.carousel-cont').slick('refresh');
    }



    /* VIEW PROJECT DETAILS */

    $('.vp-button-cont').click(function() {

        viewProjectDetails($(this).parent().attr('id'));

    });


    /* CLOSE PROJECT */
    $('.back').click(function() {
        var activeProjectId = $('.project-container.activeProject').data('projectid');
        var activeProject = $('.project-container.activeProject');

        $('body').unbind('wheel');
        $('.navigation-top.inview').removeClass('inview').addClass('outview').css('display', 'none');


        $('.projects-indicator').removeClass('outView').addClass('inView');
        $('.navigation-left').removeClass('outView').addClass('inView');
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
            opacity: 0,
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
        viewworkpage.add(function() {
            $(activeProject).find('.vp-button-cont').fadeIn()
        }, '-=0.5');

        $('.pimg section.fade-in').removeClass('inview').addClass('outview');

        $(".activeProject").removeClass('activeProject');
        $(".detailedProject").removeClass('detailedProject');

    });
    /* NEXT PROJECT */
    $('.next-project').click(function() {
        var activeProjectId = $('.project-container.activeProject').data('projectid');
        var activeProject = $('.project-container.activeProject');

        $('body').unbind('wheel');
        var viewworkpage = new TimelineLite();

        viewworkpage.add(TweenLite.to($('.loading'), 0, {
            ease: Expo.easeOut,
            opacity: 1,
            display: "block"
        }));
        viewworkpage.add(TweenLite.to($('.loading-cont'), 1, {
            ease: Expo.easeOut,
            opacity: 1,
            display: "block"
        }), '+=0.2');
        viewworkpage.add(TweenLite.to($(this).parent().parent().find('.pimg'), 0, {
            ease: Expo.easeOut,
            opacity: 0,
            top: '0',
            display: "none"
        }));
        viewworkpage.add(TweenLite.to($(this).parent().parent().find('.roles'), 0, {
            ease: Expo.easeOut,
            opacity: 0,
            display: "none",
            top: "230px"
        }));
        viewworkpage.add(TweenLite.to(activeProject, 0, {
            ease: Power3.easeOut,
            top: "80px"
        }));
        viewworkpage.add(TweenLite.to($(this).parent().parent().find('.pdesc'), 0, {
            ease: Power3.easeOut,
            opacity: 1
        }));
        viewworkpage.add(function() {
            $(activeProject).find('.vp-button-cont').fadeIn()
        });

        viewworkpage.add(function() {
            $('.projects-indicator').removeClass('inView').addClass('outView')
        });

        viewworkpage.add(function() {
            $('.navigation-left').removeClass('inView').addClass('outView')
        });
        viewworkpage.add(function() {
            $('.navigation-right').removeClass('inView').addClass('outView')
        });
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


    });



    /* END ON LOAD */
})