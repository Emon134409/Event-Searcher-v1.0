
/* thickbox.js */

/* 1   */ /*
/* 2   *|  * Thickbox 3.1 - One Box To Rule Them All.
/* 3   *|  * By Cody Lindley (http://www.codylindley.com)
/* 4   *|  * Copyright (c) 2007 cody lindley
/* 5   *|  * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
/* 6   *| */
/* 7   */ 
/* 8   */ if ( typeof tb_pathToImage != 'string' ) {
/* 9   */ 	var tb_pathToImage = thickboxL10n.loadingAnimation;
/* 10  */ }
/* 11  */ 
/* 12  */ /*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/
/* 13  */ 
/* 14  */ //on page load call tb_init
/* 15  */ jQuery(document).ready(function(){
/* 16  */ 	tb_init('a.thickbox, area.thickbox, input.thickbox');//pass where to apply thickbox
/* 17  */ 	imgLoader = new Image();// preload image
/* 18  */ 	imgLoader.src = tb_pathToImage;
/* 19  */ });
/* 20  */ 
/* 21  */ //add thickbox to href & area elements that have a class of .thickbox
/* 22  */ function tb_init(domChunk){
/* 23  */ 	jQuery('body').on('click', domChunk, tb_click);
/* 24  */ }
/* 25  */ 
/* 26  */ function tb_click(){
/* 27  */ 	var t = this.title || this.name || null;
/* 28  */ 	var a = this.href || this.alt;
/* 29  */ 	var g = this.rel || false;
/* 30  */ 	tb_show(t,a,g);
/* 31  */ 	this.blur();
/* 32  */ 	return false;
/* 33  */ }
/* 34  */ 
/* 35  */ function tb_show(caption, url, imageGroup) {//function called when the user clicks on a thickbox link
/* 36  */ 
/* 37  */ 	try {
/* 38  */ 		if (typeof document.body.style.maxHeight === "undefined") {//if IE 6
/* 39  */ 			jQuery("body","html").css({height: "100%", width: "100%"});
/* 40  */ 			jQuery("html").css("overflow","hidden");
/* 41  */ 			if (document.getElementById("TB_HideSelect") === null) {//iframe to hide select elements in ie6
/* 42  */ 				jQuery("body").append("<iframe id='TB_HideSelect'>"+thickboxL10n.noiframes+"</iframe><div id='TB_overlay'></div><div id='TB_window'></div>");
/* 43  */ 				jQuery("#TB_overlay").click(tb_remove);
/* 44  */ 			}
/* 45  */ 		}else{//all others
/* 46  */ 			if(document.getElementById("TB_overlay") === null){
/* 47  */ 				jQuery("body").append("<div id='TB_overlay'></div><div id='TB_window'></div>");
/* 48  */ 				jQuery("#TB_overlay").click(tb_remove);
/* 49  */ 				jQuery( 'body' ).addClass( 'modal-open' );
/* 50  */ 			}

/* thickbox.js */

/* 51  */ 		}
/* 52  */ 
/* 53  */ 		if(tb_detectMacXFF()){
/* 54  */ 			jQuery("#TB_overlay").addClass("TB_overlayMacFFBGHack");//use png overlay so hide flash
/* 55  */ 		}else{
/* 56  */ 			jQuery("#TB_overlay").addClass("TB_overlayBG");//use background and opacity
/* 57  */ 		}
/* 58  */ 
/* 59  */ 		if(caption===null){caption="";}
/* 60  */ 		jQuery("body").append("<div id='TB_load'><img src='"+imgLoader.src+"' width='208' /></div>");//add loader to the page
/* 61  */ 		jQuery('#TB_load').show();//show loader
/* 62  */ 
/* 63  */ 		var baseURL;
/* 64  */ 	   if(url.indexOf("?")!==-1){ //ff there is a query string involved
/* 65  */ 			baseURL = url.substr(0, url.indexOf("?"));
/* 66  */ 	   }else{
/* 67  */ 	   		baseURL = url;
/* 68  */ 	   }
/* 69  */ 
/* 70  */ 	   var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;
/* 71  */ 	   var urlType = baseURL.toLowerCase().match(urlString);
/* 72  */ 
/* 73  */ 		if(urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp'){//code to show images
/* 74  */ 
/* 75  */ 			TB_PrevCaption = "";
/* 76  */ 			TB_PrevURL = "";
/* 77  */ 			TB_PrevHTML = "";
/* 78  */ 			TB_NextCaption = "";
/* 79  */ 			TB_NextURL = "";
/* 80  */ 			TB_NextHTML = "";
/* 81  */ 			TB_imageCount = "";
/* 82  */ 			TB_FoundURL = false;
/* 83  */ 			if(imageGroup){
/* 84  */ 				TB_TempArray = jQuery("a[rel="+imageGroup+"]").get();
/* 85  */ 				for (TB_Counter = 0; ((TB_Counter < TB_TempArray.length) && (TB_NextHTML === "")); TB_Counter++) {
/* 86  */ 					var urlTypeTemp = TB_TempArray[TB_Counter].href.toLowerCase().match(urlString);
/* 87  */ 						if (!(TB_TempArray[TB_Counter].href == url)) {
/* 88  */ 							if (TB_FoundURL) {
/* 89  */ 								TB_NextCaption = TB_TempArray[TB_Counter].title;
/* 90  */ 								TB_NextURL = TB_TempArray[TB_Counter].href;
/* 91  */ 								TB_NextHTML = "<span id='TB_next'>&nbsp;&nbsp;<a href='#'>"+thickboxL10n.next+"</a></span>";
/* 92  */ 							} else {
/* 93  */ 								TB_PrevCaption = TB_TempArray[TB_Counter].title;
/* 94  */ 								TB_PrevURL = TB_TempArray[TB_Counter].href;
/* 95  */ 								TB_PrevHTML = "<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>"+thickboxL10n.prev+"</a></span>";
/* 96  */ 							}
/* 97  */ 						} else {
/* 98  */ 							TB_FoundURL = true;
/* 99  */ 							TB_imageCount = thickboxL10n.image + ' ' + (TB_Counter + 1) + ' ' + thickboxL10n.of + ' ' + (TB_TempArray.length);
/* 100 */ 						}

/* thickbox.js */

/* 101 */ 				}
/* 102 */ 			}
/* 103 */ 
/* 104 */ 			imgPreloader = new Image();
/* 105 */ 			imgPreloader.onload = function(){
/* 106 */ 			imgPreloader.onload = null;
/* 107 */ 
/* 108 */ 			// Resizing large images - original by Christian Montoya edited by me.
/* 109 */ 			var pagesize = tb_getPageSize();
/* 110 */ 			var x = pagesize[0] - 150;
/* 111 */ 			var y = pagesize[1] - 150;
/* 112 */ 			var imageWidth = imgPreloader.width;
/* 113 */ 			var imageHeight = imgPreloader.height;
/* 114 */ 			if (imageWidth > x) {
/* 115 */ 				imageHeight = imageHeight * (x / imageWidth);
/* 116 */ 				imageWidth = x;
/* 117 */ 				if (imageHeight > y) {
/* 118 */ 					imageWidth = imageWidth * (y / imageHeight);
/* 119 */ 					imageHeight = y;
/* 120 */ 				}
/* 121 */ 			} else if (imageHeight > y) {
/* 122 */ 				imageWidth = imageWidth * (y / imageHeight);
/* 123 */ 				imageHeight = y;
/* 124 */ 				if (imageWidth > x) {
/* 125 */ 					imageHeight = imageHeight * (x / imageWidth);
/* 126 */ 					imageWidth = x;
/* 127 */ 				}
/* 128 */ 			}
/* 129 */ 			// End Resizing
/* 130 */ 
/* 131 */ 			TB_WIDTH = imageWidth + 30;
/* 132 */ 			TB_HEIGHT = imageHeight + 60;
/* 133 */ 			jQuery("#TB_window").append("<a href='' id='TB_ImageOff'><span class='screen-reader-text'>"+thickboxL10n.close+"</span><img id='TB_Image' src='"+url+"' width='"+imageWidth+"' height='"+imageHeight+"' alt='"+caption+"'/></a>" + "<div id='TB_caption'>"+caption+"<div id='TB_secondLine'>" + TB_imageCount + TB_PrevHTML + TB_NextHTML + "</div></div><div id='TB_closeWindow'><a href='#' id='TB_closeWindowButton'><span class='screen-reader-text'>"+thickboxL10n.close+"</span><div class='tb-close-icon'></div></a></div>");
/* 134 */ 
/* 135 */ 			jQuery("#TB_closeWindowButton").click(tb_remove);
/* 136 */ 
/* 137 */ 			if (!(TB_PrevHTML === "")) {
/* 138 */ 				function goPrev(){
/* 139 */ 					if(jQuery(document).unbind("click",goPrev)){jQuery(document).unbind("click",goPrev);}
/* 140 */ 					jQuery("#TB_window").remove();
/* 141 */ 					jQuery("body").append("<div id='TB_window'></div>");
/* 142 */ 					tb_show(TB_PrevCaption, TB_PrevURL, imageGroup);
/* 143 */ 					return false;
/* 144 */ 				}
/* 145 */ 				jQuery("#TB_prev").click(goPrev);
/* 146 */ 			}
/* 147 */ 
/* 148 */ 			if (!(TB_NextHTML === "")) {
/* 149 */ 				function goNext(){
/* 150 */ 					jQuery("#TB_window").remove();

/* thickbox.js */

/* 151 */ 					jQuery("body").append("<div id='TB_window'></div>");
/* 152 */ 					tb_show(TB_NextCaption, TB_NextURL, imageGroup);
/* 153 */ 					return false;
/* 154 */ 				}
/* 155 */ 				jQuery("#TB_next").click(goNext);
/* 156 */ 
/* 157 */ 			}
/* 158 */ 
/* 159 */ 			jQuery(document).bind('keydown.thickbox', function(e){
/* 160 */ 				if ( e.which == 27 ){ // close
/* 161 */ 					tb_remove();
/* 162 */ 
/* 163 */ 				} else if ( e.which == 190 ){ // display previous image
/* 164 */ 					if(!(TB_NextHTML == "")){
/* 165 */ 						jQuery(document).unbind('thickbox');
/* 166 */ 						goNext();
/* 167 */ 					}
/* 168 */ 				} else if ( e.which == 188 ){ // display next image
/* 169 */ 					if(!(TB_PrevHTML == "")){
/* 170 */ 						jQuery(document).unbind('thickbox');
/* 171 */ 						goPrev();
/* 172 */ 					}
/* 173 */ 				}
/* 174 */ 				return false;
/* 175 */ 			});
/* 176 */ 
/* 177 */ 			tb_position();
/* 178 */ 			jQuery("#TB_load").remove();
/* 179 */ 			jQuery("#TB_ImageOff").click(tb_remove);
/* 180 */ 			jQuery("#TB_window").css({'visibility':'visible'}); //for safari using css instead of show
/* 181 */ 			};
/* 182 */ 
/* 183 */ 			imgPreloader.src = url;
/* 184 */ 		}else{//code to show html
/* 185 */ 
/* 186 */ 			var queryString = url.replace(/^[^\?]+\??/,'');
/* 187 */ 			var params = tb_parseQuery( queryString );
/* 188 */ 
/* 189 */ 			TB_WIDTH = (params['width']*1) + 30 || 630; //defaults to 630 if no parameters were added to URL
/* 190 */ 			TB_HEIGHT = (params['height']*1) + 40 || 440; //defaults to 440 if no parameters were added to URL
/* 191 */ 			ajaxContentW = TB_WIDTH - 30;
/* 192 */ 			ajaxContentH = TB_HEIGHT - 45;
/* 193 */ 
/* 194 */ 			if(url.indexOf('TB_iframe') != -1){// either iframe or ajax window
/* 195 */ 					urlNoQuery = url.split('TB_');
/* 196 */ 					jQuery("#TB_iframeContent").remove();
/* 197 */ 					if(params['modal'] != "true"){//iframe no modal
/* 198 */ 						jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton'><span class='screen-reader-text'>"+thickboxL10n.close+"</span><div class='tb-close-icon'></div></a></div></div><iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;' >"+thickboxL10n.noiframes+"</iframe>");
/* 199 */ 					}else{//iframe modal
/* 200 */ 					jQuery("#TB_overlay").unbind();

/* thickbox.js */

/* 201 */ 						jQuery("#TB_window").append("<iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;'>"+thickboxL10n.noiframes+"</iframe>");
/* 202 */ 					}
/* 203 */ 			}else{// not an iframe, ajax
/* 204 */ 					if(jQuery("#TB_window").css("visibility") != "visible"){
/* 205 */ 						if(params['modal'] != "true"){//ajax no modal
/* 206 */ 						jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton'><div class='tb-close-icon'></div></a></div></div><div id='TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px'></div>");
/* 207 */ 						}else{//ajax modal
/* 208 */ 						jQuery("#TB_overlay").unbind();
/* 209 */ 						jQuery("#TB_window").append("<div id='TB_ajaxContent' class='TB_modal' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");
/* 210 */ 						}
/* 211 */ 					}else{//this means the window is already up, we are just loading new content via ajax
/* 212 */ 						jQuery("#TB_ajaxContent")[0].style.width = ajaxContentW +"px";
/* 213 */ 						jQuery("#TB_ajaxContent")[0].style.height = ajaxContentH +"px";
/* 214 */ 						jQuery("#TB_ajaxContent")[0].scrollTop = 0;
/* 215 */ 						jQuery("#TB_ajaxWindowTitle").html(caption);
/* 216 */ 					}
/* 217 */ 			}
/* 218 */ 
/* 219 */ 			jQuery("#TB_closeWindowButton").click(tb_remove);
/* 220 */ 
/* 221 */ 				if(url.indexOf('TB_inline') != -1){
/* 222 */ 					jQuery("#TB_ajaxContent").append(jQuery('#' + params['inlineId']).children());
/* 223 */ 					jQuery("#TB_window").bind('tb_unload', function () {
/* 224 */ 						jQuery('#' + params['inlineId']).append( jQuery("#TB_ajaxContent").children() ); // move elements back when you're finished
/* 225 */ 					});
/* 226 */ 					tb_position();
/* 227 */ 					jQuery("#TB_load").remove();
/* 228 */ 					jQuery("#TB_window").css({'visibility':'visible'});
/* 229 */ 				}else if(url.indexOf('TB_iframe') != -1){
/* 230 */ 					tb_position();
/* 231 */ 					jQuery("#TB_load").remove();
/* 232 */ 					jQuery("#TB_window").css({'visibility':'visible'});
/* 233 */ 				}else{
/* 234 */ 					jQuery("#TB_ajaxContent").load(url += "&random=" + (new Date().getTime()),function(){//to do a post change this load method
/* 235 */ 						tb_position();
/* 236 */ 						jQuery("#TB_load").remove();
/* 237 */ 						tb_init("#TB_ajaxContent a.thickbox");
/* 238 */ 						jQuery("#TB_window").css({'visibility':'visible'});
/* 239 */ 					});
/* 240 */ 				}
/* 241 */ 
/* 242 */ 		}
/* 243 */ 
/* 244 */ 		if(!params['modal']){
/* 245 */ 			jQuery(document).bind('keydown.thickbox', function(e){
/* 246 */ 				if ( e.which == 27 ){ // close
/* 247 */ 					tb_remove();
/* 248 */ 					return false;
/* 249 */ 				}
/* 250 */ 			});

/* thickbox.js */

/* 251 */ 		}
/* 252 */ 
/* 253 */ 	} catch(e) {
/* 254 */ 		//nothing here
/* 255 */ 	}
/* 256 */ }
/* 257 */ 
/* 258 */ //helper functions below
/* 259 */ function tb_showIframe(){
/* 260 */ 	jQuery("#TB_load").remove();
/* 261 */ 	jQuery("#TB_window").css({'visibility':'visible'});
/* 262 */ }
/* 263 */ 
/* 264 */ function tb_remove() {
/* 265 */  	jQuery("#TB_imageOff").unbind("click");
/* 266 */ 	jQuery("#TB_closeWindowButton").unbind("click");
/* 267 */ 	jQuery("#TB_window").fadeOut("fast",function(){jQuery('#TB_window,#TB_overlay,#TB_HideSelect').trigger("tb_unload").unbind().remove();});
/* 268 */ 	jQuery( 'body' ).removeClass( 'modal-open' );
/* 269 */ 	jQuery("#TB_load").remove();
/* 270 */ 	if (typeof document.body.style.maxHeight == "undefined") {//if IE 6
/* 271 */ 		jQuery("body","html").css({height: "auto", width: "auto"});
/* 272 */ 		jQuery("html").css("overflow","");
/* 273 */ 	}
/* 274 */ 	jQuery(document).unbind('.thickbox');
/* 275 */ 	return false;
/* 276 */ }
/* 277 */ 
/* 278 */ function tb_position() {
/* 279 */ var isIE6 = typeof document.body.style.maxHeight === "undefined";
/* 280 */ jQuery("#TB_window").css({marginLeft: '-' + parseInt((TB_WIDTH / 2),10) + 'px', width: TB_WIDTH + 'px'});
/* 281 */ 	if ( ! isIE6 ) { // take away IE6
/* 282 */ 		jQuery("#TB_window").css({marginTop: '-' + parseInt((TB_HEIGHT / 2),10) + 'px'});
/* 283 */ 	}
/* 284 */ }
/* 285 */ 
/* 286 */ function tb_parseQuery ( query ) {
/* 287 */    var Params = {};
/* 288 */    if ( ! query ) {return Params;}// return empty object
/* 289 */    var Pairs = query.split(/[;&]/);
/* 290 */    for ( var i = 0; i < Pairs.length; i++ ) {
/* 291 */       var KeyVal = Pairs[i].split('=');
/* 292 */       if ( ! KeyVal || KeyVal.length != 2 ) {continue;}
/* 293 */       var key = unescape( KeyVal[0] );
/* 294 */       var val = unescape( KeyVal[1] );
/* 295 */       val = val.replace(/\+/g, ' ');
/* 296 */       Params[key] = val;
/* 297 */    }
/* 298 */    return Params;
/* 299 */ }
/* 300 */ 

/* thickbox.js */

/* 301 */ function tb_getPageSize(){
/* 302 */ 	var de = document.documentElement;
/* 303 */ 	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
/* 304 */ 	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
/* 305 */ 	arrayPageSize = [w,h];
/* 306 */ 	return arrayPageSize;
/* 307 */ }
/* 308 */ 
/* 309 */ function tb_detectMacXFF() {
/* 310 */   var userAgent = navigator.userAgent.toLowerCase();
/* 311 */   if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox')!=-1) {
/* 312 */     return true;
/* 313 */   }
/* 314 */ }
/* 315 */ 
