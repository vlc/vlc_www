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
//console.log(projects_offset.left);

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




    //tab on project pop up page

    $(".headerImage.projectSelect").click(function(){

			   $(this).parents(".imagecontainer").find(".headerImage.projectSelect").removeClass("selected_project");

			   $(this).addClass("selected_project");

				var idpass = $(this).attr("class");
                                 

                                 idpass = idpass.replace('headerImage projectSelect','');
                                 
                                  idpass = idpass.replace(' selected_project','');

                                   idpass = idpass.trim();
                                   
				//console.log(idpass);
                               
                         $(this).parents('.popupopen').find('.projectInformation').find(".projectPartConatiner").fadeOut(0);

			   $(this).parents('.popupopen').find('.projectInformation').find("#" + idpass ).fadeIn('slow');

     });



     //Project page popup close reset data

    // $('body').on('click','.project-popup .close-reveal-modal', function(){
      //   var current_project_id = $(this).parents('.project-popup').find('.project-value').val();
       //  $(this).parents('.project-popup').find('.projectInformation .projectPartConatiner').fadeOut(function(){
         //   $(this).parents('.project-popup').find('#' + current_project_id).fadeIn();
         //    $(this).parents('.project-popup').find('.projectSelect').removeClass('selected_project');
         //   $(this).parents('.project-popup').find('.imagecontainer').children('.' + current_project_id).addClass('selected_project');
       //  });
    // })


     //n outer fade layer click
   //  $('body').on('click','.reveal-modal-bg', function(){
         
   //  })

  

//hiding menu from sidebarright
 $('.sidebarmenu.newsidebarmenu').addClass("bottom_org_content");
  var tst = $('.sidebarmenu.newsidebarmenu').html();
  $('.sidebarmenu.newsidebarmenu').clone(true, true).appendTo('.right_content_ner');
  $('.right_content_ner').find('.bottom_org_content').removeClass("bottom_org_content");
  $('.sidebarmenu.newsidebarmenu.bottom_org_content').remove();


//cloning of testimonial
$('.right_content_old').clone(true, true).appendTo('.right_content_ner');
  $('.contentfulll > .right_content_old').remove();


  //cloning of breadcrums
  $('.breadcrumbs_menu.oldbreadcrumbs').clone(true, true).appendTo('.breadcrumbs_menu.newbreadcrumbs');
  //$('.breadcrumbs_menu.oldbreadcrumbs').remove();

  

 //new page

 /*var page_name = $('input[name="news"]').val();
     console.log(page_name);
     $('.right-menu-toggle').remove();
 */

  
    
  



});	


$(window).resize(function(){
	var window_widhths = $(window).width();
	$('.width_show').html(window_widhths);
})
