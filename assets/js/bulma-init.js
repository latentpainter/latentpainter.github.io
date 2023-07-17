window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    var options = {
			slidesToScroll: 1,
			slidesToShow: 4,
			loop: true,
			infinite: true,
			autoplay: false,
            pagination: false,
    }

	// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
})
