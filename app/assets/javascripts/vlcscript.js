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


});	


$(window).resize(function(){
	var window_widhths = $(window).width();
	$('.width_show').html(window_widhths);
})
