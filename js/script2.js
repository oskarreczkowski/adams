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
/*ts 3 poniedzialek 04.01 */
/*ts 5 czwartek 04.04 */
/*ts 3 niedziela 04.07 */
/*ts 2 poniedzialek 04.08 */
/*ts 2 piatek 04.12 */

/*total 84 - 40 = 44 */



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

function viewMenu() {
    $('body').addClass('working');
    $(menubcont).addClass('is-active');
    $('.menu-bg').addClass('showmenu');
    $('.menu-wrapper').delay(800).fadeIn();

    setTimeout(function() {
        $('.menu-wrapper').addClass('showmenu');
    }, 1000);

    $('body').removeClass('working');
}

function hideMenu() {
    $('body').addClass('working');
    $(menubcont).removeClass('is-active');
    $('.menu-wrapper').fadeOut().removeClass('showmenu');

    setTimeout(function() {
        $('.menu-bg').removeClass('showmenu');
        /* DELAY THE DIAGONAL LINE ANIMATION in miliseconds*/
    }, 1500);
    $('body').removeClass('working');
}

function viewAboutPage() {
    $(menubcont).fadeIn().addClass('viewMenu');

    $('body').addClass('working');

    $('.homepage').hide();
    $('.projects').hide();
    $('.about').show();

    $(menubcont).data("page", "about");
    $("#menu").removeClass('is-active');

    hideMenu();

    $(pagebg).fadeOut();
    $(projects).fadeOut();
    $(homepage).fadeOut().removeClass('viewHome');
    $('.about').fadeIn();

    $('body').removeClass('working');
    document.location.hash = "about";

}

function viewProjectsPage() {
    $(menubcont).fadeIn().addClass('viewMenu');

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



    $('body').removeClass('working');
    $(menubcont).removeClass('is-active');
    $(homepage).fadeOut().removeClass('viewHome');
    $(pagebg).fadeOut();
    $(projects).delay(800).fadeIn();


    setTimeout(function() {
        $('.projects-indicator').removeClass('outview').addClass('inview');
        $('.navigation-left').removeClass('outview').addClass('inview');
        $('.navigation-right').removeClass('outview').addClass('inview');
    }, 1100);
    document.location.hash = "projects";

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

function viewProjectDetails(aProjectId) {

    $('#' + aProjectId).addClass('activeProject');
    $('#' + aProjectId).addClass('detailedProject');
    $('body').bind('mousewheel', function(event) {
        if ($('.activeProject').length) {
            if (event.originalEvent.wheelDelta >= 0) {
                if ( $('body').scrollTop() > 600) {
                    $('.navigation-top.outview').fadeIn().addClass('inview').removeClass('outview');
                } else {
                    $('.navigation-top.inview').fadeOut().addClass('outview').removeClass('inview');
                }

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

    $('.projects-indicator').removeClass('inview').addClass('outview').delay(1200).fadeOut();
    $('.navigation-right').removeClass('inview').addClass('outview')
    $('.navigation-left').removeClass('inview').addClass('outview')

    $('.back').fadeIn().addClass('inview').removeClass('outview');


    var viewproject = $('#' + aProjectId).data('projectid');


    $('#' + aProjectId).addClass('inview').removeClass('outview');

    $('#' + aProjectId + ' .vbc').addClass('outview').removeClass('inview').delay(2000).fadeOut();
    
    $('#' + aProjectId).find('.pdesc').removeClass('inview').addClass('outview');
    
    $('#' + aProjectId).find('.roles').fadeIn().delay(500).addClass('inview').removeClass('outview');

    $('#' + aProjectId).find('.pimg').fadeIn().delay(200).addClass('inview').removeClass('outview');


    createSlick()
    setTimeout(function() {

        $('.loading-cont').removeClass('inview');
        $('.loading').delay(1000).fadeOut();
    }, 2000); 
}

function goBack(){

        var activeProjectId = $('.project-container.activeProject').data('projectid');
        var activeProject = $('.project-container.activeProject');

        $('body').unbind('wheel');
        $('.navigation-top.inview').removeClass('inview').addClass('outview').css('display', 'none');




        $('.back').addClass('outview').removeClass('inview').delay(800).fadeOut();
        $(activeProject).find('.pimg').removeClass('inview').addClass('outview').delay(1000).fadeOut();


        $(activeProject).addClass('inview').removeClass('outview');

        $(activeProject).find('.vbc').fadeIn().addClass('inview').removeClass('outview');
        
        $(activeProject).find('.pdesc').fadeIn().delay(200).addClass('inview').removeClass('outview');
        
        $(activeProject).find('.roles').addClass('outview').removeClass('inview').delay(1400).fadeOut();

        setTimeout(function() {
        $('.navigation-left').removeClass('outview').addClass('inview');
        $('.navigation-right').removeClass('outview').addClass('inview');
        $('.projects-indicator').fadeIn().removeClass('outview').addClass('inview');
        }, 1400);
        


        $('.pimg section.fade-in').removeClass('inview').addClass('outview');

        $(".activeProject").removeClass('activeProject');
        $(".detailedProject").removeClass('detailedProject');
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


function pageLocal(){
    var pagelocation = document.location.hash;
    if (pagelocation == "#projects") {
        viewProjectsPage();
    } else if (pagelocation == "#about") {
        viewAboutPage();
    } else {
        $('.projects').fadeOut();
        $('.about').fadeOut();
        setTimeout(function() {
            $(homepage).fadeIn('slow').addClass('viewHome');
            $(menubcont).fadeIn().addClass('viewMenu');
            $('body').removeClass('working')

        }, 1000);
        $(menubcont).fadeIn().addClass('viewMenu');
    }
}

function fullWidth(){


    if ( $(window).width() > 1024 ) {
        $('.fullWidth').each(function(){
            $(this).find('.secbanner').css( {
                'margin-left': -( $(window).width() - 1024 )*0.5, 
                'margin-right': -( $(window).width() - 1024 )*0.5,
                'height': $(this).data('sectionheight')+'px'
            }  )
            $(this).css ({
                'height': $(this).data('sectionheight')+'px'
            })
        })
    }

}
$(document).ready(function() {

    var angletmp = "skew(" + (angleB + 100) + "deg)";
    $(menubg).css({
        'transform': angletmp
    })

    $(pagebg).css({
        'transform': angletmp,
        left: "-50%",
        width: "200%",
        height: "100%"
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
        fullWidth();
    });
    /*END Adjust the diagonal line angle when resize */

    pageLocal();
    fullWidth();
    $(window).on('hashchange', function() {
        pageLocal();
    });



    /*  MENU CLICK */
    $(menubcont).click(function() {
        if ($('body').hasClass('working')) {

        } else if ($(this).data('page') == "home") {
            if ($(this).hasClass("is-active")) {
                hideMenu();
            } else {
                viewMenu();
            }
        } else if ($(this).data('page') == "projects") {
            if ($(this).hasClass("is-active")) {
                hideMenu();
            } else {
                viewMenu();
            }
        } else if ($(this).data('page') == "about") {
            if ($(this).hasClass("is-active")) {
                hideMenu();
            } else {
                viewMenu();
            }
        }

        if ($(".detailedProject").length) {

            $('.project-container').unbind('wheel');
            var activeProjectId = $('.project-container.activeProject').data('projectid');
            var activeProject = $('.project-container.activeProject');

            $('.back').addClass('outview').removeClass('inview').fadeOut();

            $(activeProject).addClass('inview').removeClass('outview');

            $(activeProject).find('.vbc').fadeIn().addClass('inview').removeClass('outview');
            
            $(activeProject).find('.pdesc').fadeIn().delay(200).addClass('inview').removeClass('outview');
            
            $(activeProject).find('.roles').addClass('outview').removeClass('inview').delay(50000).fadeOut();
        
            $('.projects-indicator').fadeIn().addClass('inview').removeClass('outview');

            $(this).parent().find('.pimg').addClass('outview').removeClass('inview').delay(35000).fadeOut();

            $('.projects-indicator').removeClass('outview').addClass('inview')  ;              
            $('.navigation-left').removeClass('outview').addClass('inview');
            $('.navigation-right').removeClass('outview').addClass('inview');


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
            $('.navigation-right,.navigation-left').removeClass('inview').addClass('outview');
            $('.about').hide();

            $(pagebg).show();
            $("#menu").removeClass('is-active');

            hideMenu();

            setTimeout(function() {
                $(projects).fadeOut();
                $(homepage).fadeIn().addClass('viewHome');
                document.location.hash = "";
                /*adjust delay here */
            }, 1500);

        }
    });


    /* CLICK ON PROJECTS MENU ITEM */
    $('.link-projects').click(function() {
        if ($('body').hasClass('working')) {

        } else {
            $('body').addClass('working');
            $(menubcont).data("page", "projects");
            $('.about').hide();

            changeproject(1, 1, '');
            $('.project-container').hide();
            $('.project-container.activeProject').hide();
            $(pagebg).hide();
            $("#menu").removeClass('is-active');

            hideMenu();

            $(homepage).fadeOut().removeClass('viewHome');
            $(projects).fadeIn();
            setTimeout(function() {
                $('.projects-indicator').removeClass('outview').addClass('inview');
                $('.navigation-right').removeClass('outview').addClass('inview');
                $('.navigation-left').removeClass('outview').addClass('inview');
                document.location.hash = "projects";
                /*adjust delay here */
            }, 1500);

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

            hideMenu();

            setTimeout(function() {
                $(pagebg).fadeOut();
                $(projects).fadeOut();
                $(homepage).fadeOut().removeClass('viewHome');
                $('.about').fadeIn();

                $('body').removeClass('working');
                document.location.hash = "about";
                /*adjust delay here */
            }, 1500);

        }
    });


    /* CLICK ON VIEW WORK ITEM */
    $('.view-more').click(function() {
        if ($('body').hasClass('working')) {

        } else {

            viewProjectsPage();
            document.location.hash = "projects";
        }
    });

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


    /* VIEW PROJECT DETAILS */

    $('.vbc').click(function() {

        viewProjectDetails($(this).parent().attr('id'));

    });


    /* CLOSE PROJECT */
    $('.back').click(function() {

        goBack();


    });
    /* NEXT PROJECT */
    $('.next-project').click(function() {
        var activeProjectId = $('.project-container.activeProject').data('projectid');
        var activeProject = $('.project-container.activeProject');

        $('body').unbind('wheel');


        $('.loading').show();
        $('.loading-cont').delay(500).addClass('inview');
        
        
        $("body").animate({
            scrollTop: 0
        });
        $(activeProject).find('.pimg').delay(500).fadeOut().addClass('outview').removeClass('inview');





        $(activeProject).addClass('inview').removeClass('outview');

        $(activeProject).find('.vbc').fadeIn().addClass('inview').removeClass('outview');
        
        $(activeProject).find('.pdesc').fadeIn().delay(200).addClass('inview').removeClass('outview');
        
        $(activeProject).find('.roles').fadeOut().delay(500).addClass('outview').removeClass('inview');
    
        $('.projects-indicator').fadeIn().addClass('inview').removeClass('outview');


        $('.pimg section.fade-in').removeClass('inview').addClass('outview');            
        $('.navigation-right').removeClass('inview').addClass('outview')
        $('.navigation-left').removeClass('inview').addClass('outview')
        $('.projects-indicator').removeClass('inview').addClass('outview')


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