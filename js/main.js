// PRELOAD
$(window).load(preLoader);
function preLoader() {
	//scrollToID('#page', 1);
	setTimeout(function() {
		$("#preloader").delay(250).fadeOut({
			duration: 750,
			easing: 'easeInOutSine'
		});
	}, 2500);
}