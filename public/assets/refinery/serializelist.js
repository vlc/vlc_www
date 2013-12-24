/**
 * jQuery Serialize List
 * Copyright (c) 2009 Mike Botsko, Botsko.net LLC
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * Copyright notice and license must remain intact for legal use
 * Version .2
 *
 * Serialize an unordered or ordered list item. Optional ability
 * to determine which attributes are included. The serialization
 * will be read by PHP as a multidimensional array which you may
 * use for saving state.
 *
 * http://github.com/botskonet/jquery.serialize-list
 */
!function(e){e.fn.serializelist=function(t){var i,n,s,r,a={attributes:["id"],allow_nest:!0,prepend:"ul",att_regex:!1,is_child:!1},o=e.extend(a,t),l=o.attributes,c="",u=function(e,t){if(!o.att_regex)return t;for(n in o.att_regex)if(o.att_regex[n].att===e)return t.replace(o.att_regex[n].regex,"")};return o.is_child||(o.prepend="&"+o.prepend),this.each(function(t,n){e(n).children().each(function(n,a){if(o.allow_nest||l.length>1)for(s in l)i=u(l[s],e(a).attr(l[s])),c+=o.prepend+"["+t+"]["+n+"]["+l[s]+"]="+i;else i=u(l[0],e(a).attr(l[0])),c+=o.prepend+"["+t+"]["+n+"]="+i;o.allow_nest&&(r=o.prepend+"["+t+"]["+n+"][children]",e(a).children().each(function(){("UL"==this.tagName||"OL"==this.tagName)&&(c+=e(this).serializelist({prepend:r,is_child:!0}))})),n++})}),c}}(jQuery);