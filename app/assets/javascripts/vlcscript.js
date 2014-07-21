$(document).ready(function(){

	$(".menutoggle").click(function(){
	    $("ul.menu_ulist").slideToggle();
	});

    var projects_offset = $('div.floatleft').offset();
    var logowidth = $(".header-left").width();
    both = projects_offset.left + logowidth;

    $('.consultingservices').mouseenter(function(){
            $(this).find('.header-submenu-wrap').stop(true, true).slideDown(700);
    })

    $('.consultingservices').mouseleave(function(){
            $(this).find('.header-submenu-wrap').stop(true, true).hide();
    });

    var window_widhths = $(window).width();
        $('.width_show').html(window_widhths);

    $('.submenu-box').hover(function(){
        $(this).find('.hideImage').show();
        $(this).find('.showImage').hide();
    },function(){
        $(this).find('.hideImage').hide();
        $(this).find('.showImage').show();
    });


    if($('.projectContiner_outer').size()){
        $('.leftrightContainer .projectContiner_outer').each(function(){
            var left_content = $(this).find('.left-content .headerImage');
            var right_content = $(this).find('.right-content .headerImage');
            if(left_content.outerHeight() == right_content.outerHeight() ){
            }

            else if(left_content.outerHeight() > right_content.outerHeight() ){
            }
            else {
                left_content.outerHeight(right_content.outerHeight());
            }
        });
    }

    $('body').on('click', '.right-menu-toggle a', function(){
        if($(this).hasClass('closed-view')){
            $.fn.open_side_view();
        }
        else {
            $.fn.close_side_view();
        }
    });

    $('body').on('click', '#fadelayer', function(){
        $.fn.close_side_view();
    })


    $.fn.open_side_view = function(){
        console.log('closed, opening now');
        $('body').append('<div id="fadelayer"></div>');
        $('#fadelayer').css({
            'filter' : 'alpha(opacity=70)'
        }).fadeIn();
        $('.right-menu-toggle').css('z-index', '10000');
        $('.sidebaright').css('z-index', '10000');
        $('.sidebaright').fadeIn();
        $('.right-menu-toggle a').removeClass('closed-view');
    }

    $.fn.close_side_view = function(){
        console.log('opened, closing now');
        $('#fadelayer').remove();
        $('#fadelayer').css({
            'filter' : 'alpha(opacity=100)'
        }).fadeOut();
        $('.right-menu-toggle').css('z-index', '9998');
        $('.sidebaright').css('z-index', '9998');
        $('.sidebaright').fadeOut();
        $('.right-menu-toggle a').addClass('closed-view');
    };

    $(".headerImage.projectSelect").click(function(){
       $(this).parents(".imagecontainer").find(".headerImage.projectSelect").removeClass("selected_project");
       $(this).addClass("selected_project");
        var idpass = $(this).attr("class");
                         idpass = idpass.replace('headerImage projectSelect','');
                          idpass = idpass.replace(' selected_project','');
                           idpass = idpass.trim();
                 $(this).parents('.popupopen').find('.projectInformation').find(".projectPartConatiner").fadeOut(0);
       $(this).parents('.popupopen').find('.projectInformation').find("#" + idpass ).fadeIn('slow');
     });

    $('body').on('click','.project-popup .close-reveal-modal', function(){
        var current_project_id = $(this).parents('.project-popup').find('.project-value').val();
        $(this).parents('.project-popup').find('.projectInformation .projectPartConatiner').fadeOut(function(){
              $(this).parents('.project-popup').find('#' + current_project_id).fadeIn();
              $(this).parents('.project-popup').find('.projectSelect').removeClass('selected_project');
              $(this).parents('.project-popup').find('.imagecontainer').children('.' + current_project_id).addClass('selected_project');
        });
    });

    $('.sidebarmenu.newsidebarmenu').addClass("bottom_org_content");
    var tst = $('.sidebarmenu.newsidebarmenu').html();
    $('.sidebarmenu.newsidebarmenu').clone(true, true).appendTo('.right_content_ner');
    $('.right_content_ner').find('.bottom_org_content').removeClass("bottom_org_content");
    $('.sidebarmenu.newsidebarmenu.bottom_org_content').remove();

    $('.right_content_old').clone(true, true).appendTo('.right_content_ner');
    $('.contentfulll > .right_content_old').remove();
    $('.breadcrumbs_menu.oldbreadcrumbs').clone(true, true).appendTo('.breadcrumbs_menu.newbreadcrumbs');

    //Sitemap
    $( ".sitemapMain > ul:first-child()").addClass( "homesitemap" );
    $( ".sitemapMain > ul:nth-child(2)").addClass( "zenithSitemap" );
    $( ".sitemapMain > ul:nth-child(3)").addClass( "outdoorSitemap" );
    $( ".sitemapMain > ul:nth-child(4)").addClass( "companySitemap" );
    $( ".sitemapMain > ul:nth-child(5)").addClass( "contactSitemap" );
    $( ".sitemapMain > ul:nth-child(6)").addClass( "servicesSitemap" );
    $( ".sitemapMain > ul:nth-child(7)").addClass( "legalSitemap" );
    $( ".sitemapMain > ul:nth-child(8)").addClass( "privacySitemap" );
    $( ".sitemapMain > ul:last-child").addClass( "newsSitemap" );


    $('#tab5').css("display","none");
    $(".tab_type li").click(function(){
        $(this).parents(".tab_type").find("li").removeClass("selected_tab");
        $(this).addClass("selected_tab");
        var idpass = $(this).attr("class");
        idpass = idpass.replace(' selected_tab','');
        $(this).parents('.tab').next(".tab_searchContainer").find(".tab_search").fadeOut(0);
        $(".tab_searchContainer").find("#" + idpass ).fadeIn('slow');
    });

    $('.projectImg').hover(function(){
        $(this).parent().find('.headerImage').next('.thumbhover').slideToggle("slow");
    });

    $('.projectContiner .projectImg').mouseenter(function(){
        $(this).next('.thumbhover').stop(true, true).slideUp("slow");
    });

    $('.projectContiner .projectImg').mouseleave(function(){
        $(this).next('.thumbhover').stop(true, true).slideDown("slow");
    });

    $('.projectContiner .thumbhover').mouseenter(function(){
        $(this).stop(true, true).show();
    });

    $('.projectContiner .thumbhover').mouseleave(function(){
        $(this).stop(true, true).hide();
    });


    //Sidebar selected page highlight

    if($('.sidebaright').length){
        $('.sidebarmenu #menu li').removeClass('selected');
        var page_title= $.trim($('#body_content_title').text().toLowerCase());
        $('.sidebarmenu #menu > ul > li a').each(function(){
          if(($(this).text().toLowerCase()) == page_title){
              $(this).parentsUntil('.sidebarmenu').addClass('selected');
          }
        });
    }

});	//Ready function ends here



$(window).resize(function(){
	var window_widhths = $(window).width();
	$('.width_show').html(window_widhths);
});

$(window).load(function(){
    if($('.projectBoxContainer').length){
        $('.projectBoxContainer').each(function(){
            var leftheight = $(this).find('.left').outerHeight();
            var righttheight = $(this).find('.right').outerHeight();
            if( leftheight > righttheight){
                $(this).find('.right').outerHeight(leftheight);
            }
            else{
                $(this).find('.left').outerHeight(righttheight);
            }
        });
    }

    $('.bwWrapper').BlackAndWhite({
        hoverEffect : true, // default true
        // set the path to BnWWorker.js for a superfast implementation
        webworkerPath : false,
        // for the images with a fluid width and height
        responsive:true,
        // to invert the hover effect
        invertHoverEffect: false,
        // this option works only on the modern browsers ( on IE lower than 9 it remains always 1)
        intensity:1,
        speed: { //this property could also be just speed: value for both fadeIn and fadeOut
            fadeIn: 200, // 200ms for fadeIn animations
            fadeOut: 800 // 800ms for fadeOut animations
        }
    });

});