// HIGHSLIDE SETTINGS
if( hs != undefined ) {
	hs.graphicsDir 			= 'highslide/graphics/';
	hs.showCredits 			= false;
	hs.dimmingOpacity 		= 0.8;
	hs.align 				= 'center',
	hs.transitions 			= ['expand', 'crossfade'];
	hs.outlineType 			= null;
	hs.wrapperClassName 	= 'modalbox';
	hs.outlineType 			= 'quasar';
	hs.contentId			= 'highslide-content';
}

$(document).ready( function() { 
	//LOGIN
	$('#login_uname').focus(function(){
		if ( $(this).attr('value') == 'username' ) $(this).attr('value','');
		var pwdfld = $('#login_pwd');
		if ( pwdfld.attr('value') == 'password' ) pwdfld.attr('value','');
	});
	$('#login_uname').blur(function(){
		if ( $(this).attr('value') == '' ) $(this).attr('value','username');
		var pwdfld = $('#login_pwd');
		if ( pwdfld.attr('value') == '' ) pwdfld.attr('value','password');
	});
	$('#login_pwd').focus(function(){
		if ( $(this).attr('value') == 'password' ) $(this).attr('value','');
		var unamefld = $('#login_uname');
		if ( unamefld.attr('value') == 'username' ) unamefld.attr('value','');
	});
	$('#login_pwd').blur(function(){
		if ( $(this).attr('value') == '' ) $(this).attr('value','password');
		var unamefld = $('#login_uname');
		if ( unamefld.attr('value') == '' ) unamefld.attr('value','username');
	});
	
	//SEARCH
	$('#search_txt').focus(function(){
		if ( $(this).attr('value') == 'Search...' ) $(this).attr('value','');
	});
	$('#search_txt').blur(function(){
		if ( $(this).attr('value') == '' ) $(this).attr('value','Search...');
	});
	
	//THUMBS
	var thumbGroups = new Array();
	$('a.thumb[@rel]').each( function() {
		var cRel = $(this).attr('rel');
		var tgLength = thumbGroups.length;
		var exists = false;
		for( var i = 0 ; i < tgLength ; i++ ) {
			if( cRel == thumbGroups[i] ) {
				exists = true;
				break;
			}
		}
		if( ! exists ) {
			thumbGroups.push( cRel );
			hs.addSlideshow({
				slideshowGroup: cRel,
				interval: 5000,
				repeat: false,
				useControls: true,
				fixedControls: false,
				overlayOptions: {
					opacity: 0.8,
					position: 'bottom center',
					hideOnMouseOut: true
				}
			});
		}
	});
	
	$('a.thumb').each(function() {
		this.onclick = function() { 
			return hs.expand(this, { slideshowGroup: $(this).attr('rel') });
		};
	});
});
