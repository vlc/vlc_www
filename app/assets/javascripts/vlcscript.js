$(document).ready(function()
{
/* for menu responsive toggle**/		
	$(".menutoggle").click(function()
	{
	    $("ul.menu_ulist").slideToggle();
		
	});
/* for menu responsive toggle**/


/* For drop down menu **/
//Main menus drop down

//var leftoffset = $(".floatleft").offset();;

var projects_offset = $('div.floatleft').offset();	
console.log(projects_offset.left);

var logowidth = $(".header-left").width();
both = projects_offset.left + logowidth;
//alert(both);
//$('.sublink-multiple-wrapper').css("left",both+"px");

$('.consultingservices').mouseenter(function(){
		$(this).find('.header-submenu-wrap').stop(true, true).slideDown(700);
		//$(this).find('.submenu-pointer').show();
		//this.style.removeAttribute('filter'); 
})

$('.consultingservices').mouseleave(function(){
	
		$(this).find('.header-submenu-wrap').stop(true, true).hide();
		//$(this).find('.submenu-pointer').hide();
});





/* For drop down menu **/

/* for checking responsive width **/

var window_widhths = $(window).width();
	$('.width_show').html(window_widhths);
	
/* for checking responsive width **/	
/* Sebmenu image toggle */
$('.submenu-box').hover(function(){
	$(this).find('.hideImage').show(); 
	$(this).find('.showImage').hide(); 
},function(){
	$(this).find('.hideImage').hide(); 
	$(this).find('.showImage').show();
});
/* Sebmenu image toggle */



    //multimodaldemand page left right container heigh adjust

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



    //Side menu in mobile toggle

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
    }

});	


$(window).resize(function(){
	var window_widhths = $(window).width();
	$('.width_show').html(window_widhths);
})
