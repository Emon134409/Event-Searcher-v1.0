
/* sharing.js */

/* 1   */ /* global WPCOM_sharing_counts, Recaptcha */
/* 2   */ var sharing_js_options;
/* 3   */ if ( sharing_js_options && sharing_js_options.counts ) {
/* 4   */ 	var WPCOMSharing = {
/* 5   */ 		done_urls : [],
/* 6   */ 		twitter_count : {},
/* 7   */ 		get_counts : function() {
/* 8   */ 			var facebookPostIds = [],
/* 9   */ 				https_url, http_url, url, urls, id, service, service_url, path_ending;
/* 10  */ 
/* 11  */ 			if ( 'undefined' === typeof WPCOM_sharing_counts ) {
/* 12  */ 				return;
/* 13  */ 			}
/* 14  */ 
/* 15  */ 			for ( url in WPCOM_sharing_counts ) {
/* 16  */ 				id = WPCOM_sharing_counts[ url ];
/* 17  */ 
/* 18  */ 				if ( 'undefined' !== typeof WPCOMSharing.done_urls[ id ] ) {
/* 19  */ 					continue;
/* 20  */ 				}
/* 21  */ 
/* 22  */ 				// get both the http and https version of these URLs
/* 23  */ 				https_url = encodeURIComponent( url.replace( /^http:\/\//i, 'https://' ) );
/* 24  */ 				http_url  = encodeURIComponent( url.replace( /^https:\/\//i, 'http://' ) );
/* 25  */ 
/* 26  */ 				if ( jQuery( 'a[data-shared=sharing-facebook-' + id  + ']' ).length ) {
/* 27  */ 					facebookPostIds.push( id );
/* 28  */ 				}
/* 29  */ 
/* 30  */ 				urls = {
/* 31  */ 					twitter: [
/* 32  */ 						'https://cdn.api.twitter.com/1/urls/count.json?callback=WPCOMSharing.update_twitter_count&url=' +
/* 33  */ 							http_url,
/* 34  */ 						'https://cdn.api.twitter.com/1/urls/count.json?callback=WPCOMSharing.update_twitter_count&url=' +
/* 35  */ 							https_url
/* 36  */ 					],
/* 37  */ 					// LinkedIn actually gets the share count for both the http and https version automatically -- so we don't need to do extra magic
/* 38  */ 					linkedin: [
/* 39  */ 						window.location.protocol +
/* 40  */ 							'//www.linkedin.com/countserv/count/share?format=jsonp&callback=WPCOMSharing.update_linkedin_count&url=' +
/* 41  */ 							encodeURIComponent( url )
/* 42  */ 					],
/* 43  */ 					// Pinterest, like LinkedIn, handles share counts for both http and https
/* 44  */ 					pinterest: [
/* 45  */ 						window.location.protocol +
/* 46  */ 							'//api.pinterest.com/v1/urls/count.json?callback=WPCOMSharing.update_pinterest_count&url=' +
/* 47  */ 							encodeURIComponent( url )
/* 48  */ 					]
/* 49  */ 				};
/* 50  */ 

/* sharing.js */

/* 51  */ 				for ( service in urls ) {
/* 52  */ 					if ( ! jQuery( 'a[data-shared=sharing-' + service + '-' + id  + ']' ).length ) {
/* 53  */ 						continue;
/* 54  */ 					}
/* 55  */ 
/* 56  */ 					while ( ( service_url = urls[ service ].pop() ) ) {
/* 57  */ 						jQuery.getScript( service_url );
/* 58  */ 					}
/* 59  */ 				}
/* 60  */ 
/* 61  */ 				WPCOMSharing.done_urls[ id ] = true;
/* 62  */ 			}
/* 63  */ 
/* 64  */ 			if ( facebookPostIds.length && ( 'WPCOM_site_ID' in window ) ) {
/* 65  */ 				path_ending = window.WPCOM_jetpack ? 'jetpack-count' : 'count';
/* 66  */ 				jQuery.ajax({
/* 67  */ 					dataType: 'jsonp',
/* 68  */ 					url: 'https://public-api.wordpress.com/rest/v1.1/sites/' + window.WPCOM_site_ID + '/sharing-buttons/facebook/' + path_ending,
/* 69  */ 					jsonpCallback: 'WPCOMSharing.update_facebook_count',
/* 70  */ 					data: { post_ID: facebookPostIds },
/* 71  */ 					success: WPCOMSharing.update_facebook_count,
/* 72  */ 					cache: true
/* 73  */ 				});
/* 74  */ 			}
/* 75  */ 		},
/* 76  */ 
/* 77  */ 		// get the version of the url that was stored in the dom (sharing-$service-URL)
/* 78  */ 		get_permalink: function( url ) {
/* 79  */ 			var rxTrailingSlash, formattedSlashUrl;
/* 80  */ 
/* 81  */ 			if ( 'https:' === window.location.protocol ) {
/* 82  */ 				url = url.replace( /^http:\/\//i, 'https://' );
/* 83  */ 			} else {
/* 84  */ 				url = url.replace( /^https:\/\//i, 'http://' );
/* 85  */ 			}
/* 86  */ 
/* 87  */ 			// Some services (e.g. Twitter) canonicalize the URL with a trailing
/* 88  */ 			// slash. We can account for this by checking whether either format
/* 89  */ 			// exists as a known URL
/* 90  */ 			if ( ! ( url in WPCOM_sharing_counts ) ) {
/* 91  */ 				rxTrailingSlash = /\/$/,
/* 92  */ 				formattedSlashUrl = rxTrailingSlash.test( url ) ?
/* 93  */ 					url.replace( rxTrailingSlash, '' ) : url + '/';
/* 94  */ 
/* 95  */ 				if ( formattedSlashUrl in WPCOM_sharing_counts ) {
/* 96  */ 					url = formattedSlashUrl;
/* 97  */ 				}
/* 98  */ 			}
/* 99  */ 
/* 100 */ 			return url;

/* sharing.js */

/* 101 */ 		},
/* 102 */ 		update_facebook_count : function( data ) {
/* 103 */ 			var index, length, post;
/* 104 */ 
/* 105 */ 			if ( ! data || ! data.counts ) {
/* 106 */ 				return;
/* 107 */ 			}
/* 108 */ 
/* 109 */ 			for ( index = 0, length = data.counts.length; index < length; index++ ) {
/* 110 */ 				post = data.counts[ index ];
/* 111 */ 
/* 112 */ 				if ( ! post.post_ID || ! post.count ) {
/* 113 */ 					continue;
/* 114 */ 				}
/* 115 */ 
/* 116 */ 				WPCOMSharing.inject_share_count( 'sharing-facebook-' + post.post_ID, post.count );
/* 117 */ 			}
/* 118 */ 		},
/* 119 */ 		update_twitter_count : function( data ) {
/* 120 */ 			if ( 'number' === typeof data.count ) {
/* 121 */ 				var permalink = WPCOMSharing.get_permalink( data.url );
/* 122 */ 
/* 123 */ 				if ( ! WPCOMSharing.twitter_count[ permalink ] ) {
/* 124 */ 					WPCOMSharing.twitter_count[ permalink ] = 0;
/* 125 */ 				}
/* 126 */ 
/* 127 */ 				WPCOMSharing.twitter_count[ permalink ] += data.count;
/* 128 */ 
/* 129 */ 				if ( WPCOMSharing.twitter_count[ permalink ] > 0 ) {
/* 130 */ 					WPCOMSharing.inject_share_count( 'sharing-twitter-' + WPCOM_sharing_counts[ permalink ], WPCOMSharing.twitter_count[ permalink ] );
/* 131 */ 				}
/* 132 */ 			}
/* 133 */ 		},
/* 134 */ 		update_linkedin_count : function( data ) {
/* 135 */ 			if ( 'undefined' !== typeof data.count && ( data.count * 1 ) > 0 ) {
/* 136 */ 				WPCOMSharing.inject_share_count( 'sharing-linkedin-' + WPCOM_sharing_counts[ data.url ], data.count );
/* 137 */ 			}
/* 138 */ 		},
/* 139 */ 		update_pinterest_count : function( data ) {
/* 140 */ 			if ( 'undefined' !== typeof data.count && ( data.count * 1 ) > 0 ) {
/* 141 */ 				WPCOMSharing.inject_share_count( 'sharing-pinterest-' + WPCOM_sharing_counts[ data.url ], data.count );
/* 142 */ 			}
/* 143 */ 		},
/* 144 */ 		inject_share_count : function( id, count ) {
/* 145 */ 			var $share = jQuery( 'a[data-shared=' + id + '] > span');
/* 146 */ 			$share.find( '.share-count' ).remove();
/* 147 */ 			$share.append( '<span class="share-count">' + WPCOMSharing.format_count( count ) + '</span>' );
/* 148 */ 		},
/* 149 */ 		format_count : function( count ) {
/* 150 */ 			if ( count < 1000 ) {

/* sharing.js */

/* 151 */ 				return count;
/* 152 */ 			}
/* 153 */ 			if ( count >= 1000 && count < 10000 ) {
/* 154 */ 				return String( count ).substring( 0, 1 ) + 'K+';
/* 155 */ 			}
/* 156 */ 			return '10K+';
/* 157 */ 		}
/* 158 */ 	};
/* 159 */ }
/* 160 */ 
/* 161 */ (function($){
/* 162 */ 	var $body, $sharing_email;
/* 163 */ 
/* 164 */ 	$.fn.extend( {
/* 165 */ 		share_is_email: function() {
/* 166 */ 			return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test( this.val() );
/* 167 */ 		}
/* 168 */ 	} );
/* 169 */ 
/* 170 */ 	$body = $( document.body ).on( 'post-load', WPCOMSharing_do );
/* 171 */ 	$( document ).on( 'ready', function() {
/* 172 */ 		$sharing_email = $( '#sharing_email' );
/* 173 */ 		$body.append( $sharing_email );
/* 174 */ 		WPCOMSharing_do();
/* 175 */ 	} );
/* 176 */ 
/* 177 */ 	function WPCOMSharing_do() {
/* 178 */ 		var $more_sharing_buttons;
/* 179 */ 		WPCOMSharing.get_counts();
/* 180 */ 		$more_sharing_buttons = $( '.sharedaddy a.sharing-anchor' );
/* 181 */ 
/* 182 */ 		$more_sharing_buttons.click( function() {
/* 183 */ 			return false;
/* 184 */ 		} );
/* 185 */ 
/* 186 */ 		$( '.sharedaddy a' ).each( function() {
/* 187 */ 			if ( $( this ).attr( 'href' ) && $( this ).attr( 'href' ).indexOf( 'share=' ) !== -1 ) {
/* 188 */ 				$( this ).attr( 'href', $( this ).attr( 'href' ) + '&nb=1' );
/* 189 */ 			}
/* 190 */ 		} );
/* 191 */ 
/* 192 */ 		// Show hidden buttons
/* 193 */ 
/* 194 */ 		// Touchscreen device: use click.
/* 195 */ 		// Non-touchscreen device: use click if not already appearing due to a hover event
/* 196 */ 		$more_sharing_buttons.on( 'click', function() {
/* 197 */ 			var $more_sharing_button = $( this ),
/* 198 */ 				$more_sharing_pane = $more_sharing_button.parents( 'div:first' ).find( '.inner' );
/* 199 */ 
/* 200 */ 			if ( $more_sharing_pane.is( ':animated' ) ) {

/* sharing.js */

/* 201 */ 				// We're in the middle of some other event's animation
/* 202 */ 				return;
/* 203 */ 			}
/* 204 */ 
/* 205 */ 			if ( true === $more_sharing_pane.data( 'justSlid' ) ) {
/* 206 */ 				// We just finished some other event's animation - don't process click event so that slow-to-react-clickers don't get confused
/* 207 */ 				return;
/* 208 */ 			}
/* 209 */ 
/* 210 */ 			$sharing_email.slideUp( 200 );
/* 211 */ 
/* 212 */ 			$more_sharing_pane.css( {
/* 213 */ 				left: $more_sharing_button.position().left + 'px',
/* 214 */ 				top: $more_sharing_button.position().top + $more_sharing_button.height() + 3 + 'px'
/* 215 */ 			} ).slideToggle( 200 );
/* 216 */ 		} );
/* 217 */ 
/* 218 */ 		if ( document.ontouchstart === undefined ) {
/* 219 */ 			// Non-touchscreen device: use hover/mouseout with delay
/* 220 */ 			$more_sharing_buttons.hover( function() {
/* 221 */ 				var $more_sharing_button = $( this ),
/* 222 */ 					$more_sharing_pane = $more_sharing_button.parents( 'div:first' ).find( '.inner' ),
/* 223 */ 					timer;
/* 224 */ 
/* 225 */ 				if ( ! $more_sharing_pane.is( ':animated' ) ) {
/* 226 */ 					// Create a timer to make the area appear if the mouse hovers for a period
/* 227 */ 					timer = setTimeout( function() {
/* 228 */ 						var handler_item_leave, handler_item_enter, handler_original_leave, handler_original_enter, close_it;
/* 229 */ 
/* 230 */ 						$sharing_email.slideUp( 200 );
/* 231 */ 
/* 232 */ 						$more_sharing_pane.data( 'justSlid', true );
/* 233 */ 						$more_sharing_pane.css( {
/* 234 */ 							left: $more_sharing_button.position().left + 'px',
/* 235 */ 							top: $more_sharing_button.position().top + $more_sharing_button.height() + 3 + 'px'
/* 236 */ 						} ).slideDown( 200, function() {
/* 237 */ 							// Mark the item as have being appeared by the hover
/* 238 */ 							$more_sharing_button.data( 'hasoriginal', true ).data( 'hasitem', false );
/* 239 */ 
/* 240 */ 							setTimeout( function() {
/* 241 */ 								$more_sharing_pane.data( 'justSlid', false );
/* 242 */ 							}, 300 );
/* 243 */ 
/* 244 */ 							if ( $more_sharing_pane.find( '.share-google-plus-1' ).size() ) {
/* 245 */ 								// The pane needs to stay open for the Google+ Button
/* 246 */ 								return;
/* 247 */ 							}
/* 248 */ 
/* 249 */ 							$more_sharing_pane.mouseleave( handler_item_leave ).mouseenter( handler_item_enter );
/* 250 */ 							$more_sharing_button.mouseleave( handler_original_leave ).mouseenter( handler_original_enter );

/* sharing.js */

/* 251 */ 						} );
/* 252 */ 
/* 253 */ 						// The following handlers take care of the mouseenter/mouseleave for the share button and the share area - if both are left then we close the share area
/* 254 */ 						handler_item_leave = function() {
/* 255 */ 							$more_sharing_button.data( 'hasitem', false );
/* 256 */ 
/* 257 */ 							if ( $more_sharing_button.data( 'hasoriginal' ) === false ) {
/* 258 */ 								var timer = setTimeout( close_it, 800 );
/* 259 */ 								$more_sharing_button.data( 'timer2', timer );
/* 260 */ 							}
/* 261 */ 						};
/* 262 */ 
/* 263 */ 						handler_item_enter = function() {
/* 264 */ 							$more_sharing_button.data( 'hasitem', true );
/* 265 */ 							clearTimeout( $more_sharing_button.data( 'timer2' ) );
/* 266 */ 						};
/* 267 */ 
/* 268 */ 						handler_original_leave = function() {
/* 269 */ 							$more_sharing_button.data( 'hasoriginal', false );
/* 270 */ 
/* 271 */ 							if ( $more_sharing_button.data( 'hasitem' ) === false ) {
/* 272 */ 								var timer = setTimeout( close_it, 800 );
/* 273 */ 								$more_sharing_button.data( 'timer2', timer );
/* 274 */ 							}
/* 275 */ 						};
/* 276 */ 
/* 277 */ 						handler_original_enter = function() {
/* 278 */ 							$more_sharing_button.data( 'hasoriginal', true );
/* 279 */ 							clearTimeout( $more_sharing_button.data( 'timer2' ) );
/* 280 */ 						};
/* 281 */ 
/* 282 */ 						close_it = function() {
/* 283 */ 							$more_sharing_pane.data( 'justSlid', true );
/* 284 */ 							$more_sharing_pane.slideUp( 200, function() {
/* 285 */ 								setTimeout( function() {
/* 286 */ 									$more_sharing_pane.data( 'justSlid', false );
/* 287 */ 								}, 300 );
/* 288 */ 							} );
/* 289 */ 
/* 290 */ 							// Clear all hooks
/* 291 */ 							$more_sharing_button.unbind( 'mouseleave', handler_original_leave ).unbind( 'mouseenter', handler_original_enter );
/* 292 */ 							$more_sharing_pane.unbind( 'mouseleave', handler_item_leave ).unbind( 'mouseenter', handler_item_leave );
/* 293 */ 							return false;
/* 294 */ 						};
/* 295 */ 					}, 200 );
/* 296 */ 
/* 297 */ 					// Remember the timer so we can detect it on the mouseout
/* 298 */ 					$more_sharing_button.data( 'timer', timer );
/* 299 */ 				}
/* 300 */ 			}, function() {

/* sharing.js */

/* 301 */ 				// Mouse out - remove any timer
/* 302 */ 				$more_sharing_buttons.each( function() {
/* 303 */ 					clearTimeout( $( this ).data( 'timer' ) );
/* 304 */ 				} );
/* 305 */ 				$more_sharing_buttons.data( 'timer', false );
/* 306 */ 			} );
/* 307 */ 		}
/* 308 */ 
/* 309 */ 		$( document ).click(function() {
/* 310 */ 
/* 311 */ 			// Click outside
/* 312 */ 			// remove any timer
/* 313 */ 			$more_sharing_buttons.each( function() {
/* 314 */ 				clearTimeout( $( this ).data( 'timer' ) );
/* 315 */ 			} );
/* 316 */ 			$more_sharing_buttons.data( 'timer', false );
/* 317 */ 
/* 318 */ 			// slide down forcibly
/* 319 */ 			$( '.sharedaddy .inner' ).slideUp();
/* 320 */ 
/* 321 */ 		});
/* 322 */ 
/* 323 */ 		// Add click functionality
/* 324 */ 		$( '.sharedaddy ul' ).each( function() {
/* 325 */ 
/* 326 */ 			if ( 'yep' === $( this ).data( 'has-click-events' ) ) {
/* 327 */ 				return;
/* 328 */ 			}
/* 329 */ 			$( this ).data( 'has-click-events', 'yep' );
/* 330 */ 
/* 331 */ 			var printUrl = function ( uniqueId, urlToPrint ) {
/* 332 */ 				$( 'body:first' ).append( '<iframe style="position:fixed;top:100;left:100;height:1px;width:1px;border:none;" id="printFrame-' + uniqueId + '" name="printFrame-' + uniqueId + '" src="' + urlToPrint + '" onload="frames[\'printFrame-' + uniqueId + '\'].focus();frames[\'printFrame-' + uniqueId + '\'].print();"></iframe>' );
/* 333 */ 			};
/* 334 */ 
/* 335 */ 			// Print button
/* 336 */ 			$( this ).find( 'a.share-print' ).click( function() {
/* 337 */ 				var ref = $( this ).attr( 'href' ),
/* 338 */ 					do_print = function() {
/* 339 */ 						if ( ref.indexOf( '#print' ) === -1 ) {
/* 340 */ 							var uid = new Date().getTime();
/* 341 */ 							printUrl( uid , ref );
/* 342 */ 						} else {
/* 343 */ 							print();
/* 344 */ 						}
/* 345 */ 					};
/* 346 */ 
/* 347 */ 				// Is the button in a dropdown?
/* 348 */ 				if ( $( this ).parents( '.sharing-hidden' ).length > 0 ) {
/* 349 */ 					$( this ).parents( '.inner' ).slideUp( 0, function() {
/* 350 */ 						do_print();

/* sharing.js */

/* 351 */ 					} );
/* 352 */ 				} else {
/* 353 */ 					do_print();
/* 354 */ 				}
/* 355 */ 
/* 356 */ 				return false;
/* 357 */ 			} );
/* 358 */ 
/* 359 */ 			// Press This button
/* 360 */ 			$( this ).find( 'a.share-press-this' ).click( function() {
/* 361 */ 				var s = '';
/* 362 */ 
/* 363 */ 				if ( window.getSelection ) {
/* 364 */ 					s = window.getSelection();
/* 365 */ 				} else if( document.getSelection ) {
/* 366 */ 					s = document.getSelection();
/* 367 */ 				} else if( document.selection ) {
/* 368 */ 					s = document.selection.createRange().text;
/* 369 */ 				}
/* 370 */ 
/* 371 */ 				if ( s ) {
/* 372 */ 					$( this ).attr( 'href', $( this ).attr( 'href' ) + '&sel=' + encodeURI( s ) );
/* 373 */ 				}
/* 374 */ 
/* 375 */ 				if ( !window.open( $( this ).attr( 'href' ), 't', 'toolbar=0,resizable=1,scrollbars=1,status=1,width=720,height=570' ) ) {
/* 376 */ 					document.location.href = $( this ).attr( 'href' );
/* 377 */ 				}
/* 378 */ 
/* 379 */ 				return false;
/* 380 */ 			} );
/* 381 */ 
/* 382 */ 			// Email button
/* 383 */ 			$( 'a.share-email', this ).on( 'click', function() {
/* 384 */ 				var url = $( this ).attr( 'href' ), key;
/* 385 */ 
/* 386 */ 				if ( $sharing_email.is( ':visible' ) ) {
/* 387 */ 					$sharing_email.slideUp( 200 );
/* 388 */ 				} else {
/* 389 */ 					$( '.sharedaddy .inner' ).slideUp();
/* 390 */ 
/* 391 */ 					$( '#sharing_email .response' ).remove();
/* 392 */ 					$( '#sharing_email form' ).show();
/* 393 */ 					$( '#sharing_email form input[type=submit]' ).removeAttr( 'disabled' );
/* 394 */ 					$( '#sharing_email form a.sharing_cancel' ).show();
/* 395 */ 
/* 396 */ 					key = '';
/* 397 */ 					if ( $( '#recaptcha_public_key' ).length > 0 ) {
/* 398 */ 						key = $( '#recaptcha_public_key' ).val();
/* 399 */ 					}
/* 400 */ 

/* sharing.js */

/* 401 */ 					// Update the recaptcha
/* 402 */ 					Recaptcha.create( key, 'sharing_recaptcha', { lang : sharing_js_options.lang } );
/* 403 */ 
/* 404 */ 					// Show dialog
/* 405 */ 					$sharing_email.css( {
/* 406 */ 						left: $( this ).offset().left + 'px',
/* 407 */ 						top: $( this ).offset().top + $( this ).height() + 'px'
/* 408 */ 					} ).slideDown( 200 );
/* 409 */ 
/* 410 */ 					// Hook up other buttons
/* 411 */ 					$( '#sharing_email a.sharing_cancel' ).unbind( 'click' ).click( function() {
/* 412 */ 						$( '#sharing_email .errors' ).hide();
/* 413 */ 						$sharing_email.slideUp( 200 );
/* 414 */ 						$( '#sharing_background' ).fadeOut();
/* 415 */ 						return false;
/* 416 */ 					} );
/* 417 */ 
/* 418 */ 					// Submit validation
/* 419 */ 					$( '#sharing_email input[type=submit]' ).unbind( 'click' ).click( function() {
/* 420 */ 						var form = $( this ).parents( 'form' );
/* 421 */ 
/* 422 */ 						// Disable buttons + enable loading icon
/* 423 */ 						$( this ).prop( 'disabled', true );
/* 424 */ 						form.find( 'a.sharing_cancel' ).hide();
/* 425 */ 						form.find( 'img.loading' ).show();
/* 426 */ 
/* 427 */ 						$( '#sharing_email .errors' ).hide();
/* 428 */ 						$( '#sharing_email .error' ).removeClass( 'error' );
/* 429 */ 
/* 430 */ 						if ( ! $( '#sharing_email input[name=source_email]' ).share_is_email() ) {
/* 431 */ 							$( '#sharing_email input[name=source_email]' ).addClass( 'error' );
/* 432 */ 						}
/* 433 */ 
/* 434 */ 						if ( ! $( '#sharing_email input[name=target_email]' ).share_is_email() ) {
/* 435 */ 							$( '#sharing_email input[name=target_email]' ).addClass( 'error' );
/* 436 */ 						}
/* 437 */ 
/* 438 */ 						if ( $( '#sharing_email .error' ).length === 0 ) {
/* 439 */ 							// AJAX send the form
/* 440 */ 							$.ajax( {
/* 441 */ 								url: url,
/* 442 */ 								type: 'POST',
/* 443 */ 								data: form.serialize(),
/* 444 */ 								success: function( response ) {
/* 445 */ 									form.find( 'img.loading' ).hide();
/* 446 */ 
/* 447 */ 									if ( response === '1' || response === '2' || response === '3' ) {
/* 448 */ 										$( '#sharing_email .errors-' + response ).show();
/* 449 */ 										form.find( 'input[type=submit]' ).removeAttr( 'disabled' );
/* 450 */ 										form.find( 'a.sharing_cancel' ).show();

/* sharing.js */

/* 451 */ 										Recaptcha.reload();
/* 452 */ 									}
/* 453 */ 									else {
/* 454 */ 										$( '#sharing_email form' ).hide();
/* 455 */ 										$sharing_email.append( response );
/* 456 */ 										$( '#sharing_email a.sharing_cancel' ).click( function() {
/* 457 */ 											$sharing_email.slideUp( 200 );
/* 458 */ 											$( '#sharing_background' ).fadeOut();
/* 459 */ 											return false;
/* 460 */ 										} );
/* 461 */ 									}
/* 462 */ 								}
/* 463 */ 							} );
/* 464 */ 
/* 465 */ 							return false;
/* 466 */ 						}
/* 467 */ 
/* 468 */ 						form.find( 'img.loading' ).hide();
/* 469 */ 						form.find( 'input[type=submit]' ).removeAttr( 'disabled' );
/* 470 */ 						form.find( 'a.sharing_cancel' ).show();
/* 471 */ 						$( '#sharing_email .errors-1' ).show();
/* 472 */ 
/* 473 */ 						return false;
/* 474 */ 					} );
/* 475 */ 				}
/* 476 */ 
/* 477 */ 				return false;
/* 478 */ 			} );
/* 479 */ 		} );
/* 480 */ 
/* 481 */ 		$( 'li.share-email, li.share-custom a.sharing-anchor' ).addClass( 'share-service-visible' );
/* 482 */ 	}
/* 483 */ })( jQuery );
/* 484 */ 
/* 485 */ // Recaptcha code
/* 486 */ /* jshint ignore:start */
/* 487 */ var RecaptchaTemplates={};RecaptchaTemplates.VertHtml='<table id="recaptcha_table" class="recaptchatable" > <tr> <td colspan="6" class=\'recaptcha_r1_c1\'></td> </tr> <tr> <td class=\'recaptcha_r2_c1\'></td> <td colspan="4" class=\'recaptcha_image_cell\'><div id="recaptcha_image"></div></td> <td class=\'recaptcha_r2_c2\'></td> </tr> <tr> <td rowspan="6" class=\'recaptcha_r3_c1\'></td> <td colspan="4" class=\'recaptcha_r3_c2\'></td> <td rowspan="6" class=\'recaptcha_r3_c3\'></td> </tr> <tr> <td rowspan="3" class=\'recaptcha_r4_c1\' height="49"> <div class="recaptcha_input_area"> <label for="recaptcha_response_field" class="recaptcha_input_area_text"><span id="recaptcha_instructions_image" class="recaptcha_only_if_image recaptcha_only_if_no_incorrect_sol"></span><span id="recaptcha_instructions_audio" class="recaptcha_only_if_no_incorrect_sol recaptcha_only_if_audio"></span><span id="recaptcha_instructions_error" class="recaptcha_only_if_incorrect_sol"></span></label><br/> <input name="recaptcha_response_field" id="recaptcha_response_field" type="text" /> </div> </td> <td rowspan="4" class=\'recaptcha_r4_c2\'></td> <td><a id=\'recaptcha_reload_btn\'><img id=\'recaptcha_reload\' width="25" height="17" /></a></td> <td rowspan="4" class=\'recaptcha_r4_c4\'></td> </tr> <tr> <td><a id=\'recaptcha_switch_audio_btn\' class="recaptcha_only_if_image"><img id=\'recaptcha_switch_audio\' width="25" height="16" alt="" /></a><a id=\'recaptcha_switch_img_btn\' class="recaptcha_only_if_audio"><img id=\'recaptcha_switch_img\' width="25" height="16" alt=""/></a></td> </tr> <tr> <td><a id=\'recaptcha_whatsthis_btn\'><img id=\'recaptcha_whatsthis\' width="25" height="16" /></a></td> </tr> <tr> <td class=\'recaptcha_r7_c1\'></td> <td class=\'recaptcha_r8_c1\'></td> </tr> </table> ';RecaptchaTemplates.CleanCss=".recaptchatable td img{display:block}.recaptchatable .recaptcha_image_cell center img{height:57px}.recaptchatable .recaptcha_image_cell center{height:57px}.recaptchatable .recaptcha_image_cell{background-color:white;height:57px;padding:7px!important}.recaptchatable,#recaptcha_area tr,#recaptcha_area td,#recaptcha_area th{margin:0!important;border:0!important;border-collapse:collapse!important;vertical-align:middle!important}.recaptchatable *{margin:0;padding:0;border:0;color:black;position:static;top:auto;left:auto;right:auto;bottom:auto;text-align:left!important}.recaptchatable #recaptcha_image{margin:auto;border:1px solid #dfdfdf!important}.recaptchatable a img{border:0}.recaptchatable a,.recaptchatable a:hover{-moz-outline:none;border:0!important;padding:0!important;text-decoration:none;color:blue;background:none!important;font-weight:normal}.recaptcha_input_area{position:relative!important;background:none!important}.recaptchatable label.recaptcha_input_area_text{border:1px solid #dfdfdf!important;margin:0!important;padding:0!important;position:static!important;top:auto!important;left:auto!important;right:auto!important;bottom:auto!important}.recaptcha_theme_red label.recaptcha_input_area_text,.recaptcha_theme_white label.recaptcha_input_area_text{color:black!important}.recaptcha_theme_blackglass label.recaptcha_input_area_text{color:white!important}.recaptchatable #recaptcha_response_field{font-size:11pt}.recaptcha_theme_blackglass #recaptcha_response_field,.recaptcha_theme_white #recaptcha_response_field{border:1px solid gray}.recaptcha_theme_red #recaptcha_response_field{border:1px solid #cca940}.recaptcha_audio_cant_hear_link{font-size:7pt;color:black}.recaptchatable{line-height:1em;border:1px solid #dfdfdf!important}.recaptcha_error_text{color:red}";RecaptchaTemplates.CleanHtml='<table id="recaptcha_table" class="recaptchatable"> <tr height="73"> <td class=\'recaptcha_image_cell\' width="302"><center><div id="recaptcha_image"></div></center></td> <td style="padding: 10px 7px 7px 7px;"> <a id=\'recaptcha_reload_btn\'><img id=\'recaptcha_reload\' width="25" height="18" alt="" /></a> <a id=\'recaptcha_switch_audio_btn\' class="recaptcha_only_if_image"><img id=\'recaptcha_switch_audio\' width="25" height="15" alt="" /></a><a id=\'recaptcha_switch_img_btn\' class="recaptcha_only_if_audio"><img id=\'recaptcha_switch_img\' width="25" height="15" alt=""/></a> <a id=\'recaptcha_whatsthis_btn\'><img id=\'recaptcha_whatsthis\' width="25" height="16" /></a> </td> <td style="padding: 18px 7px 18px 7px;"> <img id=\'recaptcha_logo\' alt="" width="71" height="36" /> </td> </tr> <tr> <td style="padding-left: 7px;"> <div class="recaptcha_input_area" style="padding-top: 2px; padding-bottom: 7px;"> <input style="border: 1px solid #3c3c3c; width: 302px;" name="recaptcha_response_field" id="recaptcha_response_field" type="text" /> </div> </td> <td></td> <td style="padding: 4px 7px 12px 7px;"> <img id="recaptcha_tagline" width="71" height="17" /> </td> </tr> </table> ';RecaptchaTemplates.ContextHtml='<table id="recaptcha_table" class="recaptchatable"> <tr> <td colspan="6" class=\'recaptcha_r1_c1\'></td> </tr> <tr> <td class=\'recaptcha_r2_c1\'></td> <td colspan="4" class=\'recaptcha_image_cell\'><div id="recaptcha_image"></div></td> <td class=\'recaptcha_r2_c2\'></td> </tr> <tr> <td rowspan="6" class=\'recaptcha_r3_c1\'></td> <td colspan="4" class=\'recaptcha_r3_c2\'></td> <td rowspan="6" class=\'recaptcha_r3_c3\'></td> </tr> <tr> <td rowspan="3" class=\'recaptcha_r4_c1\' height="49"> <div class="recaptcha_input_area"> <label for="recaptcha_response_field" class="recaptcha_input_area_text"><span id="recaptcha_instructions_context" class="recaptcha_only_if_image recaptcha_only_if_no_incorrect_sol"></span><span id="recaptcha_instructions_audio" class="recaptcha_only_if_no_incorrect_sol recaptcha_only_if_audio"></span><span id="recaptcha_instructions_error" class="recaptcha_only_if_incorrect_sol"></span></label><br/> <input name="recaptcha_response_field" id="recaptcha_response_field" type="text" /> </div> </td> <td rowspan="4" class=\'recaptcha_r4_c2\'></td> <td><a id=\'recaptcha_reload_btn\'><img id=\'recaptcha_reload\' width="25" height="17" /></a></td> <td rowspan="4" class=\'recaptcha_r4_c4\'></td> </tr> <tr> <td><a id=\'recaptcha_switch_audio_btn\' class="recaptcha_only_if_image"><img id=\'recaptcha_switch_audio\' width="25" height="16" alt="" /></a><a id=\'recaptcha_switch_img_btn\' class="recaptcha_only_if_audio"><img id=\'recaptcha_switch_img\' width="25" height="16" alt=""/></a></td> </tr> <tr> <td><a id=\'recaptcha_whatsthis_btn\'><img id=\'recaptcha_whatsthis\' width="25" height="16" /></a></td> </tr> <tr> <td class=\'recaptcha_r7_c1\'></td> <td class=\'recaptcha_r8_c1\'></td> </tr> </table> ';RecaptchaTemplates.VertCss=".recaptchatable td img{display:block}.recaptchatable .recaptcha_r1_c1{background:url(IMGROOT/sprite.png) 0 -63px no-repeat;width:318px;height:9px}.recaptchatable .recaptcha_r2_c1{background:url(IMGROOT/sprite.png) -18px 0 no-repeat;width:9px;height:57px}.recaptchatable .recaptcha_r2_c2{background:url(IMGROOT/sprite.png) -27px 0 no-repeat;width:9px;height:57px}.recaptchatable .recaptcha_r3_c1{background:url(IMGROOT/sprite.png) 0 0 no-repeat;width:9px;height:63px}.recaptchatable .recaptcha_r3_c2{background:url(IMGROOT/sprite.png) -18px -57px no-repeat;width:300px;height:6px}.recaptchatable .recaptcha_r3_c3{background:url(IMGROOT/sprite.png) -9px 0 no-repeat;width:9px;height:63px}.recaptchatable .recaptcha_r4_c1{background:url(IMGROOT/sprite.png) -43px 0 no-repeat;width:171px;height:49px}.recaptchatable .recaptcha_r4_c2{background:url(IMGROOT/sprite.png) -36px 0 no-repeat;width:7px;height:57px}.recaptchatable .recaptcha_r4_c4{background:url(IMGROOT/sprite.png) -214px 0 no-repeat;width:97px;height:57px}.recaptchatable .recaptcha_r7_c1{background:url(IMGROOT/sprite.png) -43px -49px no-repeat;width:171px;height:8px}.recaptchatable .recaptcha_r8_c1{background:url(IMGROOT/sprite.png) -43px -49px no-repeat;width:25px;height:8px}.recaptchatable .recaptcha_image_cell center img{height:57px}.recaptchatable .recaptcha_image_cell center{height:57px}.recaptchatable .recaptcha_image_cell{background-color:white;height:57px}#recaptcha_area,#recaptcha_table{width:318px!important}.recaptchatable,#recaptcha_area tr,#recaptcha_area td,#recaptcha_area th{margin:0!important;border:0!important;padding:0!important;border-collapse:collapse!important;vertical-align:middle!important}.recaptchatable *{margin:0;padding:0;border:0;font-family:helvetica,sans-serif;font-size:8pt;color:black;position:static;top:auto;left:auto;right:auto;bottom:auto;text-align:left!important}.recaptchatable #recaptcha_image{margin:auto}.recaptchatable img{border:0!important;margin:0!important;padding:0!important}.recaptchatable a,.recaptchatable a:hover{-moz-outline:none;border:0!important;padding:0!important;text-decoration:none;color:blue;background:none!important;font-weight:normal}.recaptcha_input_area{position:relative!important;width:146px!important;height:45px!important;margin-left:20px!important;margin-right:5px!important;margin-top:4px!important;background:none!important}.recaptchatable label.recaptcha_input_area_text{margin:0!important;padding:0!important;position:static!important;top:auto!important;left:auto!important;right:auto!important;bottom:auto!important;background:none!important;height:auto!important;width:auto!important}.recaptcha_theme_red label.recaptcha_input_area_text,.recaptcha_theme_white label.recaptcha_input_area_text{color:black!important}.recaptcha_theme_blackglass label.recaptcha_input_area_text{color:white!important}.recaptchatable #recaptcha_response_field{width:145px!important;position:absolute!important;bottom:7px!important;padding:0!important;margin:0!important;font-size:10pt}.recaptcha_theme_blackglass #recaptcha_response_field,.recaptcha_theme_white #recaptcha_response_field{border:1px solid gray}.recaptcha_theme_red #recaptcha_response_field{border:1px solid #cca940}.recaptcha_audio_cant_hear_link{font-size:7pt;color:black}.recaptchatable{line-height:1em}#recaptcha_instructions_error{color:red!important}";var RecaptchaStr_en={visual_challenge:"Get a visual challenge",audio_challenge:"Get an audio challenge",refresh_btn:"Get a new challenge",instructions_visual:"Type the two words:",instructions_context:"Type the words in the boxes:",instructions_audio:"Type what you hear:",help_btn:"Help",play_again:"Play sound again",cant_hear_this:"Download sound as MP3",incorrect_try_again:"Incorrect. Try again."},RecaptchaStr_de={visual_challenge:"Visuelle Aufgabe generieren",audio_challenge:"Audio-Aufgabe generieren",
/* 488 */ refresh_btn:"Neue Aufgabe generieren",instructions_visual:"Gib die 2 W\u00f6rter ein:",instructions_context:"",instructions_audio:"Gib die 8 Ziffern ein:",help_btn:"Hilfe",incorrect_try_again:"Falsch. Nochmals versuchen!"},RecaptchaStr_es={visual_challenge:"Obt\u00e9n un reto visual",audio_challenge:"Obt\u00e9n un reto audible",refresh_btn:"Obt\u00e9n un nuevo reto",instructions_visual:"Escribe las 2 palabras:",instructions_context:"",instructions_audio:"Escribe los 8 n\u00fameros:",help_btn:"Ayuda",
/* 489 */ incorrect_try_again:"Incorrecto. Otro intento."},RecaptchaStr_fr={visual_challenge:"D\u00e9fi visuel",audio_challenge:"D\u00e9fi audio",refresh_btn:"Nouveau d\u00e9fi",instructions_visual:"Entrez les deux mots:",instructions_context:"",instructions_audio:"Entrez les huit chiffres:",help_btn:"Aide",incorrect_try_again:"Incorrect."},RecaptchaStr_nl={visual_challenge:"Test me via een afbeelding",audio_challenge:"Test me via een geluidsfragment",refresh_btn:"Nieuwe uitdaging",instructions_visual:"Type de twee woorden:",
/* 490 */ instructions_context:"",instructions_audio:"Type de acht cijfers:",help_btn:"Help",incorrect_try_again:"Foute invoer."},RecaptchaStr_pt={visual_challenge:"Obter um desafio visual",audio_challenge:"Obter um desafio sonoro",refresh_btn:"Obter um novo desafio",instructions_visual:"Escreva as 2 palavras:",instructions_context:"",instructions_audio:"Escreva os 8 numeros:",help_btn:"Ajuda",incorrect_try_again:"Incorrecto. Tenta outra vez."},RecaptchaStr_ru={visual_challenge:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443",
/* 491 */ audio_challenge:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0437\u0432\u0443\u043a\u043e\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443",refresh_btn:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443",instructions_visual:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0432\u0430 \u0441\u043b\u043e\u0432\u0430:",instructions_context:"",instructions_audio:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u0441\u0435\u043c\u044c \u0447\u0438\u0441\u0435\u043b:",
/* 492 */ help_btn:"\u041f\u043e\u043c\u043e\u0449\u044c",incorrect_try_again:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e."},RecaptchaStr_tr={visual_challenge:"G\u00f6rsel deneme",audio_challenge:"\u0130\u015fitsel deneme",refresh_btn:"Yeni deneme",instructions_visual:"\u0130ki kelimeyi yaz\u0131n:",instructions_context:"",instructions_audio:"Sekiz numaray\u0131 yaz\u0131n:",help_btn:"Yard\u0131m (\u0130ngilizce)",incorrect_try_again:"Yanl\u0131\u015f. Bir daha deneyin."},RecaptchaStr_it=
/* 493 */ {visual_challenge:"Modalit\u00e0 visiva",audio_challenge:"Modalit\u00e0 auditiva",refresh_btn:"Chiedi due nuove parole",instructions_visual:"Scrivi le due parole:",instructions_context:"",instructions_audio:"Trascrivi ci\u00f2 che senti:",help_btn:"Aiuto",incorrect_try_again:"Scorretto. Riprova."},RecaptchaLangMap={en:RecaptchaStr_en,de:RecaptchaStr_de,es:RecaptchaStr_es,fr:RecaptchaStr_fr,nl:RecaptchaStr_nl,pt:RecaptchaStr_pt,ru:RecaptchaStr_ru,tr:RecaptchaStr_tr,it:RecaptchaStr_it};var RecaptchaStr=RecaptchaStr_en,RecaptchaOptions,RecaptchaDefaultOptions={tabindex:0,theme:"red",callback:null,lang:"en",custom_theme_widget:null,custom_translations:null,includeContext:false},Recaptcha={widget:null,timer_id:-1,style_set:false,theme:null,type:"image",ajax_verify_cb:null,$:function(a){return typeof a=="string"?document.getElementById(a):a},create:function(a,b,c){Recaptcha.destroy();if(b)Recaptcha.widget=Recaptcha.$(b);Recaptcha._init_options(c);Recaptcha._call_challenge(a)},destroy:function(){var a=
/* 494 */ Recaptcha.$("recaptcha_challenge_field");a&&a.parentNode.removeChild(a);Recaptcha.timer_id!=-1&&clearInterval(Recaptcha.timer_id);Recaptcha.timer_id=-1;if(a=Recaptcha.$("recaptcha_image"))a.innerHTML="";if(Recaptcha.widget){if(Recaptcha.theme!="custom")Recaptcha.widget.innerHTML="";else Recaptcha.widget.style.display="none";Recaptcha.widget=null}},focus_response_field:function(){var a=Recaptcha.$;a=a("recaptcha_response_field");a.focus()},get_challenge:function(){if(typeof RecaptchaState=="undefined")return null;
/* 495 */ return RecaptchaState.challenge},get_response:function(){var a=Recaptcha.$;a=a("recaptcha_response_field");if(!a)return null;return a.value},ajax_verify:function(a){Recaptcha.ajax_verify_cb=a;a=Recaptcha._get_api_server()+"/ajaxverify?c="+encodeURIComponent(Recaptcha.get_challenge())+"&response="+encodeURIComponent(Recaptcha.get_response());Recaptcha._add_script(a)},_ajax_verify_callback:function(a){Recaptcha.ajax_verify_cb(a)},_get_api_server:function(){var a=window.location.protocol,b;b=typeof _RecaptchaOverrideApiServer!=
/* 496 */ "undefined"?_RecaptchaOverrideApiServer:"www.google.com/recaptcha/api";return a+"//"+b},_call_challenge:function(a){a=Recaptcha._get_api_server()+"/challenge?k="+a+"&ajax=1&cachestop="+Math.random();if(typeof RecaptchaOptions.extra_challenge_params!="undefined")a+="&"+RecaptchaOptions.extra_challenge_params;if(RecaptchaOptions.includeContext)a+="&includeContext=1";Recaptcha._add_script(a)},_add_script:function(a){var b=document.createElement("script");b.type="text/javascript";b.src=a;Recaptcha._get_script_area().appendChild(b)},
/* 497 */ _get_script_area:function(){var a=document.getElementsByTagName("head");return a=!a||a.length<1?document.body:a[0]},_hash_merge:function(a){var b={};for(var c in a)for(var d in a[c])b[d]=a[c][d];if(b.theme=="context")b.includeContext=true;return b},_init_options:function(a){RecaptchaOptions=Recaptcha._hash_merge([RecaptchaDefaultOptions,a||{}])},challenge_callback:function(){Recaptcha._reset_timer();RecaptchaStr=Recaptcha._hash_merge([RecaptchaStr_en,RecaptchaLangMap[RecaptchaOptions.lang]||{},RecaptchaOptions.custom_translations||
/* 498 */ {}]);window.addEventListener&&window.addEventListener("unload",function(){Recaptcha.destroy()},false);Recaptcha._is_ie()&&window.attachEvent&&window.attachEvent("onbeforeunload",function(){});if(navigator.userAgent.indexOf("KHTML")>0){var a=document.createElement("iframe");a.src="about:blank";a.style.height="0px";a.style.width="0px";a.style.visibility="hidden";a.style.border="none";var b=document.createTextNode("This frame prevents back/forward cache problems in Safari.");a.appendChild(b);document.body.appendChild(a)}Recaptcha._finish_widget()},
/* 499 */ _add_css:function(a){var b=document.createElement("style");b.type="text/css";if(b.styleSheet)if(navigator.appVersion.indexOf("MSIE 5")!=-1)document.write("<style type='text/css'>"+a+"</style>");else b.styleSheet.cssText=a;else if(navigator.appVersion.indexOf("MSIE 5")!=-1)document.write("<style type='text/css'>"+a+"</style>");else{a=document.createTextNode(a);b.appendChild(a)}Recaptcha._get_script_area().appendChild(b)},_set_style:function(a){if(!Recaptcha.style_set){Recaptcha.style_set=true;Recaptcha._add_css(a+
/* 500 */ "\n\n.recaptcha_is_showing_audio .recaptcha_only_if_image,.recaptcha_isnot_showing_audio .recaptcha_only_if_audio,.recaptcha_had_incorrect_sol .recaptcha_only_if_no_incorrect_sol,.recaptcha_nothad_incorrect_sol .recaptcha_only_if_incorrect_sol{display:none !important}")}},_init_builtin_theme:function(){var a=Recaptcha.$,b=RecaptchaStr,c=RecaptchaState,d,e;c=c.server;if(c[c.length-1]=="/")c=c.substring(0,c.length-1);var f=c+"/img/"+Recaptcha.theme;if(Recaptcha.theme=="clean"){c=RecaptchaTemplates.CleanCss;

/* sharing.js */

/* 501 */ d=RecaptchaTemplates.CleanHtml;e="png"}else{if(Recaptcha.theme=="context"){c=RecaptchaTemplates.VertCss;d=RecaptchaTemplates.ContextHtml}else{c=RecaptchaTemplates.VertCss;d=RecaptchaTemplates.VertHtml}e="gif"}c=c.replace(/IMGROOT/g,f);Recaptcha._set_style(c);Recaptcha.widget.innerHTML="<div id='recaptcha_area'>"+d+"</div>";a("recaptcha_reload").src=f+"/refresh."+e;a("recaptcha_switch_audio").src=f+"/audio."+e;a("recaptcha_switch_img").src=f+"/text."+e;a("recaptcha_whatsthis").src=f+"/help."+e;if(Recaptcha.theme==
/* 502 */ "clean"){a("recaptcha_logo").src=f+"/logo."+e;a("recaptcha_tagline").src=f+"/tagline."+e}a("recaptcha_reload").alt=b.refresh_btn;a("recaptcha_switch_audio").alt=b.audio_challenge;a("recaptcha_switch_img").alt=b.visual_challenge;a("recaptcha_whatsthis").alt=b.help_btn;a("recaptcha_reload_btn").href="javascript:Recaptcha.reload ();";a("recaptcha_reload_btn").title=b.refresh_btn;a("recaptcha_switch_audio_btn").href="javascript:Recaptcha.switch_type('audio');";a("recaptcha_switch_audio_btn").title=b.audio_challenge;
/* 503 */ a("recaptcha_switch_img_btn").href="javascript:Recaptcha.switch_type('image');";a("recaptcha_switch_img_btn").title=b.visual_challenge;a("recaptcha_whatsthis_btn").href=Recaptcha._get_help_link();a("recaptcha_whatsthis_btn").target="_blank";a("recaptcha_whatsthis_btn").title=b.help_btn;a("recaptcha_whatsthis_btn").onclick=function(){Recaptcha.showhelp();return false};a("recaptcha_table").className="recaptchatable recaptcha_theme_"+Recaptcha.theme;a("recaptcha_instructions_image")&&a("recaptcha_instructions_image").appendChild(document.createTextNode(b.instructions_visual));
/* 504 */ a("recaptcha_instructions_context")&&a("recaptcha_instructions_context").appendChild(document.createTextNode(b.instructions_context));a("recaptcha_instructions_audio")&&a("recaptcha_instructions_audio").appendChild(document.createTextNode(b.instructions_audio));a("recaptcha_instructions_error")&&a("recaptcha_instructions_error").appendChild(document.createTextNode(b.incorrect_try_again))},_finish_widget:function(){var a=Recaptcha.$,b=RecaptchaState,c=RecaptchaOptions,d=c.theme;switch(d){case "red":case "white":case "blackglass":case "clean":case "custom":case "context":break;
/* 505 */ default:d="red";break}if(!Recaptcha.theme)Recaptcha.theme=d;Recaptcha.theme!="custom"?Recaptcha._init_builtin_theme():Recaptcha._set_style("");d=document.createElement("span");d.id="recaptcha_challenge_field_holder";d.style.display="none";a("recaptcha_response_field").parentNode.insertBefore(d,a("recaptcha_response_field"));a("recaptcha_response_field").setAttribute("autocomplete","off");a("recaptcha_image").style.width="300px";a("recaptcha_image").style.height="57px";Recaptcha.should_focus=false;
/* 506 */ Recaptcha._set_challenge(b.challenge,"image");if(c.tabindex){a("recaptcha_response_field").tabIndex=c.tabindex;if(Recaptcha.theme!="custom"){a("recaptcha_whatsthis_btn").tabIndex=c.tabindex;a("recaptcha_switch_img_btn").tabIndex=c.tabindex;a("recaptcha_switch_audio_btn").tabIndex=c.tabindex;a("recaptcha_reload_btn").tabIndex=c.tabindex}}if(Recaptcha.widget)Recaptcha.widget.style.display="";c.callback&&c.callback()},switch_type:function(a){var b=Recaptcha;b.type=a;b.reload(b.type=="audio"?"a":"v")},
/* 507 */ reload:function(a){var b=Recaptcha,c=RecaptchaState;if(typeof a=="undefined")a="r";c=c.server+"reload?c="+c.challenge+"&k="+c.site+"&reason="+a+"&type="+b.type+"&lang="+RecaptchaOptions.lang;if(RecaptchaOptions.includeContext)c+="&includeContext=1";if(typeof RecaptchaOptions.extra_challenge_params!="undefined")c+="&"+RecaptchaOptions.extra_challenge_params;if(b.type=="audio")c+=RecaptchaOptions.audio_beta_12_08?"&audio_beta_12_08=1":"&new_audio_default=1";b.should_focus=a!="t";b._add_script(c)},finish_reload:function(a,
/* 508 */ b){RecaptchaState.is_incorrect=false;Recaptcha._set_challenge(a,b)},_set_challenge:function(a,b){var c=Recaptcha,d=RecaptchaState,e=c.$;d.challenge=a;c.type=b;e("recaptcha_challenge_field_holder").innerHTML="<input type='hidden' name='recaptcha_challenge_field' id='recaptcha_challenge_field' value='"+d.challenge+"'/>";if(b=="audio")e("recaptcha_image").innerHTML=Recaptcha.getAudioCaptchaHtml();else if(b=="image"){var f=d.server+"image?c="+d.challenge;e("recaptcha_image").innerHTML="<img style='display:block;' height='57' width='300' src='"+
/* 509 */ f+"'/>"}Recaptcha._css_toggle("recaptcha_had_incorrect_sol","recaptcha_nothad_incorrect_sol",d.is_incorrect);Recaptcha._css_toggle("recaptcha_is_showing_audio","recaptcha_isnot_showing_audio",b=="audio");c._clear_input();c.should_focus&&c.focus_response_field();c._reset_timer()},_reset_timer:function(){var a=RecaptchaState;clearInterval(Recaptcha.timer_id);Recaptcha.timer_id=setInterval("Recaptcha.reload('t');",(a.timeout-300)*1E3)},showhelp:function(){window.open(Recaptcha._get_help_link(),"recaptcha_popup",
/* 510 */ "width=460,height=570,location=no,menubar=no,status=no,toolbar=no,scrollbars=yes,resizable=yes")},_clear_input:function(){var a=Recaptcha.$("recaptcha_response_field");a.value=""},_displayerror:function(a){var b=Recaptcha.$;b("recaptcha_image").innerHTML="";b("recaptcha_image").appendChild(document.createTextNode(a))},reloaderror:function(a){Recaptcha._displayerror(a)},_is_ie:function(){return navigator.userAgent.indexOf("MSIE")>0&&!window.opera},_css_toggle:function(a,b,c){var d=Recaptcha.widget;
/* 511 */ if(!d)d=document.body;var e=d.className;e=e.replace(RegExp("(^|\\s+)"+a+"(\\s+|$)")," ");e=e.replace(RegExp("(^|\\s+)"+b+"(\\s+|$)")," ");e+=" "+(c?a:b);d.className=e},_get_help_link:function(){var a=RecaptchaOptions.lang;return"http://recaptcha.net/popuphelp/"+(a=="en"?"":a+".html")},playAgain:function(){var a=Recaptcha.$;a("recaptcha_image").innerHTML=Recaptcha.getAudioCaptchaHtml()},getAudioCaptchaHtml:function(){var a=Recaptcha,b=RecaptchaState,c=b.server+"image?c="+b.challenge;if(c.indexOf("https://")==
/* 512 */ 0)c="http://"+c.substring(8);b=b.server+"/img/audiocaptcha.swf?v2";a=a._is_ie()?'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="audiocaptcha" width="0" height="0" codebase="https://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="'+b+'" /><param name="quality" value="high" /><param name="bgcolor" value="#869ca7" /><param name="allowScriptAccess" value="always" /></object><br/>':'<embed src="'+b+'" quality="high" bgcolor="#869ca7" width="0" height="0" name="audiocaptcha" align="middle" play="true" loop="false" quality="high" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"></embed> ';
/* 513 */ c=(Recaptcha.checkFlashVer()?'<br/><a class="recaptcha_audio_cant_hear_link" href="#" onclick="Recaptcha.playAgain(); return false;">'+RecaptchaStr.play_again+"</a>":"")+'<br/><a class="recaptcha_audio_cant_hear_link" target="_blank" href="'+c+'">'+RecaptchaStr.cant_hear_this+"</a>";return a+c},gethttpwavurl:function(){var a=RecaptchaState;if(Recaptcha.type=="audio"){a=a.server+"image?c="+a.challenge;if(a.indexOf("https://")==0)a="http://"+a.substring(8);return a}return""},checkFlashVer:function(){var a=
/* 514 */ navigator.appVersion.indexOf("MSIE")!=-1?true:false,b=navigator.appVersion.toLowerCase().indexOf("win")!=-1?true:false,c=navigator.userAgent.indexOf("Opera")!=-1?true:false,d=-1;if(navigator.plugins!=null&&navigator.plugins.length>0){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){a=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"";a=navigator.plugins["Shockwave Flash"+a].description;a=a.split(" ");a=a[2].split(".");d=a[0]}}else if(a&&b&&!c)try{var e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
/* 515 */ f=e.GetVariable("$version");d=f.split(" ")[1].split(",")[0]}catch(g){}return d>=9},getlang:function(){return RecaptchaOptions.lang}};
/* 516 */ /* jshint ignore:end */
/* 517 */ 
