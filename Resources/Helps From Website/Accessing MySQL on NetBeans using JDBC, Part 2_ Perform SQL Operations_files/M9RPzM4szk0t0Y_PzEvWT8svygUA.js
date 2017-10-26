
/* form.js */

/* 1  */ var ak_js = document.getElementById( "ak_js" );
/* 2  */ 
/* 3  */ if ( ! ak_js ) {
/* 4  */ 	ak_js = document.createElement( 'input' );
/* 5  */ 	ak_js.setAttribute( 'id', 'ak_js' );
/* 6  */ 	ak_js.setAttribute( 'name', 'ak_js' );
/* 7  */ 	ak_js.setAttribute( 'type', 'hidden' );
/* 8  */ }
/* 9  */ else {
/* 10 */ 	ak_js.parentNode.removeChild( ak_js );
/* 11 */ }
/* 12 */ 
/* 13 */ ak_js.setAttribute( 'value', ( new Date() ).getTime() );
/* 14 */ 
/* 15 */ var commentForm = document.getElementById( 'commentform' );
/* 16 */ 
/* 17 */ if ( commentForm ) {
/* 18 */ 	commentForm.appendChild( ak_js );
/* 19 */ }
/* 20 */ else {
/* 21 */ 	var replyRowContainer = document.getElementById( 'replyrow' );
/* 22 */ 
/* 23 */ 	if ( replyRowContainer ) {
/* 24 */ 		var children = replyRowContainer.getElementsByTagName( 'td' );
/* 25 */ 
/* 26 */ 		if ( children.length > 0 ) {
/* 27 */ 			children[0].appendChild( ak_js );
/* 28 */ 		}
/* 29 */ 	}
/* 30 */ }
