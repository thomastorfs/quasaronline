$('.highslide-body iframe', top.document).ready( function() {
	$('#closeappl').click( function() {
		return parent.window.hs.close();
	});

	function highlight( element ) {
		$( element ).animate({ backgroundColor: '#151b3f' , borderTopColor : '#7cafdd' , borderRightColor : '#7cafdd' , borderBottomColor : '#7cafdd' , borderLeftColor : '#7cafdd' } , 300);
	}
	function fade( element ) {
		$( element ).animate({ backgroundColor: '#090c21' , borderTopColor : '#457198' , borderRightColor : '#457198' , borderBottomColor : '#457198' , borderLeftColor : '#457198' } , 300);
	}
	function makeRed( element ) {
		$( element ).addClass( 'emptyField' );
		$( element ).animate({ backgroundColor: '#460000' , borderTopColor : '#c30000' , borderRightColor : '#c30000' , borderBottomColor : '#c30000' , borderLeftColor : '#c30000' } , 300);
	}
	function fieldFocus( element ) {
		highlight( element );
		element.removeClass( 'emptyField' );
		if( $('.emptyField').size() < 1 )
			$('#emptyfielderror').hide();
	}
	
	$('input').focus(function () {
		fieldFocus( $(this) );
	});
	$('input').blur(function () {
		fade( $(this) );
	});
	$('textarea').focus(function () {
		fieldFocus( $(this) );
	});
	$('textarea').blur(function () {
		fade( $(this) );
	});
	$( 'p.iagree :checkbox' ).click( function () {
		if( $(this).attr('checked') == true ) $( '#noagreeerror' ).hide();
	});
	
	
	$('.jobform').submit(function () {
		var fieldEmpty = false;
		var noAgree = false;
		
		$('input').each( function ( n , element ) {
			if( element.value == '' ) {
				makeRed( element );
				fieldEmpty = true;
			}
		});
		$('textarea').each( function ( n , element ) {
			if( element.value == '' ) {
				makeRed( element );
				fieldEmpty = true;
			}
		});
		
		if( fieldEmpty ) $( '#emptyfielderror' ).show();
		if( $( 'p.iagree :checkbox' ).attr('checked') == false ) {
			noAgree = true;
			$( '#noagreeerror' ).show();
		}
		
		return (!fieldEmpty && !noAgree);
	});
	
	$('#realname').focus();
});