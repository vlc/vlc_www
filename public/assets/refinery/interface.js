(function(){this.init_interface=function(){var e;return parent&&parent.document.location.href!==document.location.href&&$("body#dialog_container.dialog").addClass("iframed"),$("input:submit:not(.button)").addClass("button"),$.browser.msie||($("#page_container, .wym_box").corner("5px bottom"),$(".wym_box").corner("5px tr"),$(".field > .wym_box").corner("5px tl"),$(".wym_iframe iframe").corner("2px"),$('.form-actions:not(".form-actions-dialog")').corner("5px")),$("#recent_activity li a, #recent_inquiries li a").each(function(){return $(this).textTruncate({width:$(this).width(),tooltip:!1})}),$("textarea.wymeditor").each(function(){var e,t,n,i;return i=$(this),null!=(e=WYMeditor.INSTANCES[$((i.next(".wym_box").find("iframe").attr("id")||"").split("_")).last().get(0)])&&(null!=(t=i.parent().next())&&t.length>0&&t.find("input, textarea").keydown($.proxy(function(e){var t;return t=e.shiftKey,t&&e.keyCode===$.ui.keyCode.TAB?(this._iframe.contentWindow.focus(),e.preventDefault()):void 0},e)).keyup(function(){var e;return e=!1}),null!=(n=i.parent().prev())&&n.length>0)?n.find("input, textarea").keydown($.proxy(function(e){return e.keyCode===$.ui.keyCode.TAB?(this._iframe.contentWindow.focus(),e.preventDefault()):void 0},e)):void 0}),(e=$("#menu")).length>0&&(e.jcarousel({vertical:!1,scroll:1,buttonNextHTML:"<img src='/assets/refinery/carousel-right.png' alt='down' height='15' width='10' />",buttonPrevHTML:"<img src='/assets/refinery/carousel-left.png' alt='up' height='15' width='10' />",listTag:e.get(0).tagName.toLowerCase(),itemTag:e.children(":first").get(0).tagName.toLowerCase()}),e.outerWidth()<$("#page_container").outerWidth()?$("#page_container:not('.login #page_container')").corner("5px tr"):$("#page_container:not('.login #page_container')").uncorner()),$("#current_locale li a").click(function(e){return $("#current_locale li a span").each(function(){return $(this).css("display","none"===$(this).css("display")?"":"none")}),$("#other_locales").animate({opacity:"toggle",height:"toggle"},250),$("html,body").animate({scrollTop:$("#other_locales").parent().offset().top},250),e.preventDefault()}),$("#existing_image img").load(function(){return $("form.edit_image .form-actions").css({"margin-top":$("#existing_image").height()-$("form.edit_image").height()+8})}),$(".form-actions .form-actions-left input:submit#submit_button").click(function(){return $("<img src='/assets/refinery/ajax-loader.gif' width='16' height='16' class='save-loader' />").appendTo($(this).parent())}),$(".form-actions.form-actions-dialog .form-actions-left a.close_dialog").click(function(e){var t;return t=$(".ui-dialog-titlebar-close"),parent&&(t=parent.$(".ui-dialog-titlebar-close")),t.trigger("click"),e.preventDefault()}),$("a.suppress").live("click",function(e){return e.preventDefault()})}}).call(this);