
// EXTRA HIGHSLIDE SETTINGS
hs.registerOverlay({
	thumbnailId: null,
	overlayId: 'my-overlay',
	position: 'above right',
	hideOnMouseOut: true,
	opacity: 0.8
});

$(document).ready( function() { 
	$('a.applybtn').each(function() {
		this.onclick = function() { 
			return hs.htmlExpand( this, {
				objectType: 'iframe',
				wrapperClassName: 'modelbox',
				outlineType: 'quasar',
				contentId: 'highslide-content',
				preserveContent: false,
				width: 900,
				height: 480
			});
		};
	});
});