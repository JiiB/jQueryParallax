/*
Parallax Plugin V 1.0
Author: Nino Zumstein
Date  : 12.09.2016
*/
(function ($) {
	$.fn.parallax = function (options) {

		var parallax_element = this;
		var settings = {
			speed: '100',
			ascending: true,
			delay: '1000'
		};

		if (options) {
			$.extend(settings, options);
		}

		var ad = "+";
		if (!settings['ascending'] == true) {
			var ad = "-";
		}

		$(window).scroll(function () {

			var wScroll = $(this).scrollTop();

			parallax_element.css({
				"transform": "translate(0px, " + ad + wScroll / settings['speed'] + "%)",
				"transition-duration": settings['delay'] + "ms"
			});
		});
	}
}(jQuery));